#!/usr/bin/env python3
"""
build_public.py: reproducible public-data pipeline for world-culture-map.

Sources (all free to reuse):
  - Wikidata SPARQL endpoint (CC0)
  - CIA World Factbook via factbook/factbook.json mirror (public domain)
  - Natural Earth 110m admin-0 countries GeoJSON (public domain)

Outputs:
  data/raw/wikidata_countries.json          raw Wikidata rows, grouped per ISO2
  data/raw/factbook/<cc>.json               raw Factbook country files (cc = GEC code)
  data/raw/factbook/_index.json             region/file index from the GitHub API
  data/raw/ne_110m_admin_0_countries.geojson Natural Earth boundaries
  data/countries.json                       merged dataset, one object per ISO alpha-2

Usage:
  python3 data/build_public.py            # full run (uses cached raw files when present)
  python3 data/build_public.py --refresh  # ignore caches and refetch everything
  python3 data/build_public.py --merge-only  # rebuild countries.json from raw files only

Only Python 3 stdlib + requests are used. Node (if available) is used to read the
app's hand-curated data-*.js files so that curated content is carried into
countries.json unchanged.
"""
import argparse
import html as htmlmod
import datetime as dt
import json
import os
import re
import subprocess
import sys
import time

import requests

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
RAW = os.path.join(HERE, "raw")
FB_RAW = os.path.join(RAW, "factbook")
OUT = os.path.join(HERE, "countries.json")

UA = "world-culture-map-build/0.1 (https://github.com/choisen-hub/world-culture-map)"
SPARQL = "https://query.wikidata.org/sparql"
FB_API = "https://api.github.com/repos/factbook/factbook.json/contents/{region}"
FB_RAW_URL = "https://raw.githubusercontent.com/factbook/factbook.json/master/{region}/{cc}.json"
FB_REGIONS = [
    "africa", "antarctica", "australia-oceania", "central-america-n-caribbean",
    "central-asia", "east-n-southeast-asia", "europe", "middle-east",
    "north-america", "south-america", "south-asia",
]
NE_URL = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson"
NE_FILE = os.path.join(RAW, "ne_110m_admin_0_countries.geojson")

TODAY = dt.date.today().isoformat()

# ISO3 codes the app uses where Wikidata/Natural Earth differ (Kosovo: XKS / KOS)
APP_ISO3_OVERRIDES = {"XK": "XKX"}
SESSION = requests.Session()
SESSION.headers["User-Agent"] = UA

# Factbook "Internet country code" to ISO2 overrides (the ccTLD differs from ISO2
# in a handful of cases, or the Factbook entry has no usable ccTLD).
FB_CCTLD_OVERRIDES = {
    "uk": "GB",
    "eu": None,
    "su": None,
}
# GEC (FIPS 10-4) codes that need an explicit ISO2 (or None to skip). For every
# other entry the ccTLD in "Communications > Internet country code" is used,
# which equals the ISO2 code for all remaining Factbook entries. Name mismatches
# between Factbook and Wikidata are logged at merge time as a sanity check.
FB_GEC_OVERRIDES = {
    "uk": "GB",   # United Kingdom (.uk)
    "kv": "XK",   # Kosovo (user-assigned ISO code)
    "ay": "AQ",   # Antarctica
    "sx": "GS",   # South Georgia and the South Sandwich Islands
    "jn": "SJ", "sv": "SJ",  # Jan Mayen, Svalbard
    "hm": "HM", "bv": "BV", "fs": "TF", "um": "UM", "io": "IO",
    "we": "PS", "gz": "PS",  # West Bank, Gaza Strip
    # entities without an ISO 3166-1 code
    "ee": None, "ax": None, "dx": None, "bq": None, "pf": None, "pg": None,
    "at": None, "cr": None, "ip": None, "wq": None, "hq": None, "jq": None,
    "kq": None, "mq": None, "lq": None, "fq": None, "dq": None, "xx": None,
    "oo": None, "bs": None, "eu": None, "ju": None, "go": None, "tb": "BL",
    "rn": "MF",
}

log = lambda *a: print(*a, file=sys.stderr, flush=True)


# ---------------------------------------------------------------- helpers
def get_json(url, params=None, retries=4, sleep=0.2):
    """GET with polite retry/backoff. Returns parsed JSON or None on 404."""
    for attempt in range(retries):
        try:
            r = SESSION.get(url, params=params, timeout=120)
        except requests.RequestException as e:
            log(f"  ! {e}; retry {attempt + 1}")
            time.sleep(2 * (attempt + 1))
            continue
        if r.status_code == 404:
            return None
        if r.status_code in (429, 500, 502, 503, 504):
            wait = int(r.headers.get("Retry-After", 5 * (attempt + 1)))
            log(f"  ! HTTP {r.status_code}; waiting {wait}s")
            time.sleep(wait)
            continue
        r.raise_for_status()
        time.sleep(sleep)
        return r.json()
    raise RuntimeError(f"gave up on {url}")


def sparql(query):
    data = get_json(SPARQL, params={"query": query, "format": "json"}, sleep=0.5)
    rows = []
    for b in data["results"]["bindings"]:
        rows.append({k: v["value"] for k, v in b.items()})
    return rows


def qid(uri):
    return uri.rsplit("/", 1)[-1]


def chunks(seq, n):
    for i in range(0, len(seq), n):
        yield seq[i:i + n]


def strip_html(s):
    if not isinstance(s, str):
        return s
    s = re.sub(r"<[^>]+>", "", s)
    s = htmlmod.unescape(s).replace("\xa0", " ")
    s = re.sub(r"\s+", " ", s).strip()
    return None if s.lower() in ("", "none") else s


# ---------------------------------------------------------------- Wikidata
LABELS = """
  OPTIONAL {{ {v} rdfs:label {v}_en FILTER(LANG({v}_en)="en") }}
  OPTIONAL {{ {v} rdfs:label {v}_ko FILTER(LANG({v}_ko)="ko") }}
  OPTIONAL {{ {v} rdfs:label {v}_ja FILTER(LANG({v}_ja)="ja") }}
"""


def wd_base_countries():
    q = """
SELECT ?c ?iso2 ?iso3 ?c_en ?c_ko ?c_ja WHERE {
  ?c wdt:P31 wd:Q3624078; wdt:P297 ?iso2.
  FILTER NOT EXISTS { ?c wdt:P576 ?dissolved }
  FILTER NOT EXISTS { ?c p:P31 ?st. ?st ps:P31 wd:Q3624078; pq:P582 ?end }
  OPTIONAL { ?c wdt:P298 ?iso3 }
""" + LABELS.format(v="?c") + "} ORDER BY ?iso2"
    return sparql(q)


def wd_items_for_iso2(codes):
    """Find Wikidata items (any type) carrying the given ISO 3166-1 alpha-2 codes."""
    if not codes:
        return []
    vals = " ".join(f'"{c}"' for c in codes)
    q = f"""
SELECT ?c ?iso2 ?iso3 ?c_en ?c_ko ?c_ja WHERE {{
  VALUES ?iso2 {{ {vals} }}
  ?c wdt:P297 ?iso2.
  FILTER NOT EXISTS {{ ?c wdt:P576 ?dissolved }}
  OPTIONAL {{ ?c wdt:P298 ?iso3 }}
""" + LABELS.format(v="?c") + "}"
    return sparql(q)


def wd_property(qids, prop, extra=""):
    """Rows of (c, v, rank, v_en, v_ko, v_ja [, native]) for one property over QID batches.
    Statements with an end time (P582) or deprecated rank are excluded; if a
    country has preferred-rank statements only those are kept (see fetch_wikidata)."""
    rows = []
    for batch in chunks(qids, 60):
        vals = " ".join(f"wd:{q}" for q in batch)
        q = f"""
SELECT ?c ?v ?rank ?v_en ?v_ko ?v_ja {extra and '?native'} WHERE {{
  VALUES ?c {{ {vals} }}
  ?c p:{prop} ?st. ?st ps:{prop} ?v; wikibase:rank ?rank.
  FILTER(?rank != wikibase:DeprecatedRank)
  FILTER NOT EXISTS {{ ?st pq:P582 ?end }}
""" + LABELS.format(v="?v") + extra + "}"
        rows += sparql(q)
    return rows


def wd_population(qids):
    rows = []
    for batch in chunks(qids, 60):
        vals = " ".join(f"wd:{q}" for q in batch)
        q = f"""
SELECT ?c ?pop ?date WHERE {{
  VALUES ?c {{ {vals} }}
  ?c p:P1082 ?st. ?st ps:P1082 ?pop.
  OPTIONAL {{ ?st pq:P585 ?date }}
}}"""
        rows += sparql(q)
    return rows


def fetch_wikidata(extra_iso2=(), refresh=False):
    path = os.path.join(RAW, "wikidata_countries.json")
    if os.path.exists(path) and not refresh:
        log(f"[wikidata] using cached {path}")
        return json.load(open(path, encoding="utf-8"))

    log("[wikidata] base sovereign-state query")
    base = wd_base_countries()
    by_iso2 = {}
    for r in base:
        by_iso2.setdefault(r["iso2"], {"qid": qid(r["c"]), "iso3": r.get("iso3"),
                                        "label": {k: r.get(f"c_{k}") for k in ("en", "ko", "ja")},
                                        "sovereign": True})
    missing = sorted(set(extra_iso2) - set(by_iso2))
    if missing:
        log(f"[wikidata] resolving {len(missing)} extra ISO2 codes from Factbook: {missing}")
        for r in wd_items_for_iso2(missing):
            by_iso2.setdefault(r["iso2"], {"qid": qid(r["c"]), "iso3": r.get("iso3"),
                                            "label": {k: r.get(f"c_{k}") for k in ("en", "ko", "ja")},
                                            "sovereign": False})
    qids = [v["qid"] for v in by_iso2.values()]
    q2iso = {v["qid"]: k for k, v in by_iso2.items()}

    props = {
        "capital": ("P36", ""),
        "continent": ("P30", ""),
        "currency": ("P38", ""),
        "government_form": ("P122", ""),
        "head_of_state": ("P35", ""),
        "head_of_government": ("P6", ""),
        "official_language": ("P37", "  OPTIONAL { ?v wdt:P1705 ?native }\n"),
    }
    for key, (prop, extra) in props.items():
        log(f"[wikidata] {key} ({prop}) for {len(qids)} items")
        per_country = {}
        for r in wd_property(qids, prop, extra):
            iso2 = q2iso.get(qid(r["c"]))
            if not iso2:
                continue
            item = {"qid": qid(r["v"]), "en": r.get("v_en"), "ko": r.get("v_ko"), "ja": r.get("v_ja"),
                    "rank": r.get("rank", "").rsplit("#", 1)[-1]}
            if extra:
                item["native"] = r.get("native")
            lst = per_country.setdefault(iso2, [])
            if item["qid"] not in {x["qid"] for x in lst}:
                lst.append(item)
        for iso2, lst in per_country.items():
            pref = [x for x in lst if x["rank"] == "PreferredRank"]
            by_iso2[iso2][key] = pref or lst

    log("[wikidata] population (P1082, latest by point in time)")
    for r in wd_population(qids):
        iso2 = q2iso.get(qid(r["c"]))
        if not iso2:
            continue
        try:
            val = int(float(r["pop"]))
        except ValueError:
            continue
        date = (r.get("date") or "")[:10]
        cur = by_iso2[iso2].get("population")
        if cur is None or date > cur["as_of"]:
            by_iso2[iso2]["population"] = {"value": val, "as_of": date}

    out = {"retrieved": TODAY, "endpoint": SPARQL, "countries": by_iso2}
    os.makedirs(RAW, exist_ok=True)
    json.dump(out, open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    log(f"[wikidata] saved {len(by_iso2)} items to {path}")
    return out


# ---------------------------------------------------------------- Factbook
def fetch_factbook_index(refresh=False):
    path = os.path.join(FB_RAW, "_index.json")
    if os.path.exists(path) and not refresh:
        return json.load(open(path, encoding="utf-8"))
    index = {}
    for region in FB_REGIONS:
        log(f"[factbook] listing {region}")
        listing = get_json(FB_API.format(region=region), sleep=0.5)
        if listing is None:
            log(f"  ! region {region} not found")
            continue
        index[region] = sorted(x["name"][:-5] for x in listing
                               if x["name"].endswith(".json") and not x["name"].startswith("_"))
    os.makedirs(FB_RAW, exist_ok=True)
    json.dump(index, open(path, "w", encoding="utf-8"), indent=1)
    return index


def fetch_factbook(refresh=False):
    index = fetch_factbook_index(refresh)
    files = {}
    n_total = sum(len(v) for v in index.values())
    n = 0
    for region, codes in index.items():
        for cc in codes:
            n += 1
            path = os.path.join(FB_RAW, f"{cc}.json")
            if os.path.exists(path) and not refresh:
                files[cc] = json.load(open(path, encoding="utf-8"))
                continue
            log(f"[factbook] {n}/{n_total} {region}/{cc}")
            data = get_json(FB_RAW_URL.format(region=region, cc=cc), sleep=0.2)
            if data is None:
                log(f"  ! 404 {region}/{cc}, skipped")
                continue
            data["_meta"] = {"region": region, "gec": cc, "retrieved": TODAY,
                             "url": FB_RAW_URL.format(region=region, cc=cc)}
            json.dump(data, open(path, "w", encoding="utf-8"), ensure_ascii=False)
            files[cc] = data
    return files


def dig(d, *keys):
    for k in keys:
        if not isinstance(d, dict):
            return None
        d = d.get(k)
    return d


def fb_text(d, *keys):
    v = dig(d, *keys)
    if isinstance(v, dict):
        v = v.get("text")
    return strip_html(v) if isinstance(v, str) else None


def fb_iso2(cc, data):
    if cc in FB_GEC_OVERRIDES:
        return FB_GEC_OVERRIDES[cc]
    tld = fb_text(data, "Communications", "Internet country code") or ""
    m = re.search(r"\.([a-z]{2})\b", tld)
    if not m:
        return None
    t = m.group(1)
    if t in FB_CCTLD_OVERRIDES:
        return FB_CCTLD_OVERRIDES[t]
    return t.upper()


def parse_shares(text):
    """'Protestant 17%, Buddhist 16%, none 60% (2021 est.)' -> [{name, pct}]"""
    if not text:
        return []
    body = re.split(r"\(\d{4}", text)[0]
    out = []
    for m in re.finditer(r"([^,;]+?)\s*(?:<|&lt;)?\s*([\d.]+)%", body):
        name = m.group(1).strip(" ,;:")
        name = re.sub(r"^(and|or)\s+", "", name)
        try:
            out.append({"name": name, "pct": float(m.group(2))})
        except ValueError:
            pass
    return out


def extract_factbook(cc, data):
    return {
        "gec": cc,
        "name": fb_text(data, "Government", "Country name", "conventional short form"),
        "name_long": fb_text(data, "Government", "Country name", "conventional long form"),
        "capital": fb_text(data, "Government", "Capital", "name"),
        "religions": fb_text(data, "People and Society", "Religions"),
        "ethnic_groups": fb_text(data, "People and Society", "Ethnic groups"),
        "languages": fb_text(data, "People and Society", "Languages", "Languages")
                     or fb_text(data, "People and Society", "Languages"),
        "government_type": fb_text(data, "Government", "Government type"),
        "legal_system": fb_text(data, "Government", "Legal system"),
        "url": data.get("_meta", {}).get("url"),
        "retrieved": data.get("_meta", {}).get("retrieved", TODAY),
    }


# ---------------------------------------------------------------- Natural Earth
def fetch_natural_earth(refresh=False):
    if os.path.exists(NE_FILE) and not refresh:
        log(f"[natural earth] using cached {NE_FILE}")
    else:
        log("[natural earth] downloading 110m admin-0 countries")
        r = SESSION.get(NE_URL, timeout=300)
        r.raise_for_status()
        os.makedirs(RAW, exist_ok=True)
        open(NE_FILE, "wb").write(r.content)
    gj = json.load(open(NE_FILE, encoding="utf-8"))
    by_iso2 = {}
    for f in gj["features"]:
        p = f["properties"]
        a2 = p.get("ISO_A2_EH") or p.get("ISO_A2")
        if not a2 or a2 == "-99":
            continue
        by_iso2[a2] = {
            "name": p.get("NAME"), "name_long": p.get("NAME_LONG"),
            "iso3": p.get("ISO_A3_EH") or p.get("ISO_A3"),
            "iso_n3": p.get("ISO_N3_EH") or p.get("ISO_N3"),
            "continent": p.get("CONTINENT"), "subregion": p.get("SUBREGION"),
            "pop_est": p.get("POP_EST"), "pop_year": p.get("POP_YEAR"),
        }
    return by_iso2


# ---------------------------------------------------------------- curated (app) data
def load_curated():
    """Evaluate the app's data-*.js and the inline DATA/PROFILE tables with node."""
    node = None
    for cand in ("node",):
        try:
            subprocess.run([cand, "--version"], capture_output=True, check=True)
            node = cand
            break
        except (OSError, subprocess.CalledProcessError):
            pass
    if not node:
        log("[curated] node not found; curated content will not be embedded")
        return {}
    html = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()

    def inline_const(name):
        m = re.search(rf"^const {name}=\{{.*?^\}};", html, re.S | re.M)
        return m.group(0) if m else ""

    js_files = ["data-food.js", "data-politics.js", "data-movies.js",
                "data-languages.js", "data-business.js", "data-regions.js"]
    script = inline_const("DATA") + "\n" + inline_const("PROFILE") + "\n"
    for f in js_files:
        script += open(os.path.join(ROOT, f), encoding="utf-8").read() + "\n"
    script += """
process.stdout.write(JSON.stringify({DATA, PROFILE, FOOD_DATA, POLITICS_DATA, MOVIES_DATA,
  LANGUAGES_DATA, BUSINESS_DATA, REGION_DATA}));
"""
    r = subprocess.run([node, "-e", script], capture_output=True, text=True)
    if r.returncode != 0:
        log("[curated] node failed:", r.stderr[:500])
        return {}
    return json.loads(r.stdout)


# ---------------------------------------------------------------- merge
def src(source, url, retrieved=TODAY):
    return {"source": source, "url": url, "retrieved": retrieved}


def names(lst, lang):
    return [x.get(lang) or x.get("en") for x in (lst or []) if x.get(lang) or x.get("en")]


def merge(wd, fb_files, ne, curated):
    wd_countries = wd["countries"]
    fb_by_iso2 = {}
    unmapped = []
    for cc, data in fb_files.items():
        iso2 = fb_iso2(cc, data)
        if not iso2:
            unmapped.append(cc)
            continue
        fb_by_iso2.setdefault(iso2, extract_factbook(cc, data))
    if unmapped:
        log(f"[merge] factbook entries without ISO2 mapping (skipped): {sorted(unmapped)}")
    # sanity check: Factbook short name vs Wikidata English label
    for iso2, f in sorted(fb_by_iso2.items()):
        wl = ((wd_countries.get(iso2) or {}).get("label") or {}).get("en")
        fn = f.get("name")
        if wl and fn:
            a, b = re.sub(r"[^a-z]", "", wl.lower()), re.sub(r"[^a-z]", "", fn.lower())
            if a not in b and b not in a and a[:4] != b[:4]:
                log(f"[merge] name check {iso2}: wikidata='{wl}' factbook='{fn}' (gec {f['gec']})")

    cur_by_iso3 = {}
    for key in ("DATA", "PROFILE", "FOOD_DATA", "POLITICS_DATA", "MOVIES_DATA",
                "LANGUAGES_DATA", "BUSINESS_DATA", "REGION_DATA"):
        for iso3, v in (curated.get(key) or {}).items():
            cur_by_iso3.setdefault(iso3, {})[key] = v

    all_iso2 = sorted(set(wd_countries) | set(fb_by_iso2))
    out = {}
    stats = {"wikidata": {}, "factbook": {}, "natural_earth": 0, "curated": 0}
    for iso2 in all_iso2:
        w = wd_countries.get(iso2, {})
        f = fb_by_iso2.get(iso2)
        n = ne.get(iso2)
        iso3 = APP_ISO3_OVERRIDES.get(iso2) or w.get("iso3") or (n or {}).get("iso3")
        qid_ = w.get("qid")
        wd_url = f"https://www.wikidata.org/wiki/{qid_}" if qid_ else None
        wd_src = src("Wikidata (CC0)", wd_url or SPARQL, wd["retrieved"])
        fb_src = src("CIA World Factbook (public domain)", f["url"], f["retrieved"]) if f else None
        ne_src = src("Natural Earth 110m (public domain)", NE_URL)

        e = {"iso2": iso2, "iso3": iso3, "qid": qid_, "sovereign": w.get("sovereign", False),
             "name": {}, "sources": {}}
        S = e["sources"]

        # names
        lab = w.get("label") or {}
        e["name"] = {"en": lab.get("en") or (f or {}).get("name") or (n or {}).get("name"),
                     "ko": lab.get("ko"), "ja": lab.get("ja")}
        if f and f.get("name_long"):
            e["name"]["long_en"] = f["name_long"]
        S["name"] = [wd_src] if lab.get("en") else ([fb_src] if f else [ne_src])

        # flag emoji from ISO2 (regional indicator symbols)
        if re.fullmatch(r"[A-Z]{2}", iso2):
            e["flag"] = "".join(chr(0x1F1E6 + ord(ch) - 65) for ch in iso2)

        def put(key, value, source, stat):
            if value in (None, [], "", {}):
                return
            e[key] = value
            S[key] = [source]
            stats[stat][key] = stats[stat].get(key, 0) + 1

        # Wikidata fields
        cap = (w.get("capital") or [None])[0]
        put("capital", {k: cap.get(k) for k in ("en", "ko", "ja")} if cap else None, wd_src, "wikidata")
        cont = w.get("continent") or []
        put("continent", [{k: c.get(k) for k in ("en", "ko", "ja")} for c in cont], wd_src, "wikidata")
        put("population", w.get("population"), wd_src, "wikidata")
        put("currency", [{k: c.get(k) for k in ("en", "ko", "ja")} for c in (w.get("currency") or [])], wd_src, "wikidata")
        put("government_form", [{k: c.get(k) for k in ("en", "ko", "ja")} for c in (w.get("government_form") or [])], wd_src, "wikidata")
        put("head_of_state", [{k: c.get(k) for k in ("qid", "en", "ko", "ja")} for c in (w.get("head_of_state") or [])], wd_src, "wikidata")
        put("head_of_government", [{k: c.get(k) for k in ("qid", "en", "ko", "ja")} for c in (w.get("head_of_government") or [])], wd_src, "wikidata")
        put("official_languages", [{k: c.get(k) for k in ("qid", "en", "ko", "ja", "native")} for c in (w.get("official_language") or [])], wd_src, "wikidata")

        # Factbook fields
        if f:
            put("religions_text", f.get("religions"), fb_src, "factbook")
            shares = parse_shares(f.get("religions"))
            put("religions", shares, fb_src, "factbook")
            put("ethnic_groups_text", f.get("ethnic_groups"), fb_src, "factbook")
            put("languages_text", f.get("languages"), fb_src, "factbook")
            put("government_type", f.get("government_type"), fb_src, "factbook")
            put("legal_system", f.get("legal_system"), fb_src, "factbook")
            if "capital" not in e and f.get("capital"):
                put("capital", {"en": f["capital"]}, fb_src, "factbook")
            e["factbook_gec"] = f["gec"]

        # Natural Earth cross-check fields
        if n:
            e["natural_earth"] = {"name": n["name"], "continent": n["continent"],
                                  "subregion": n["subregion"], "iso_n3": n["iso_n3"]}
            S["natural_earth"] = [ne_src]
            stats["natural_earth"] += 1

        # App-vocabulary view: the same fields in the shapes index.html already uses
        # (PROFILE: e/f/c/p/g/l, POLITICS: gov/leader, LANGUAGES: official/languages)
        app = {}
        if e.get("name", {}).get("en"):
            app["e"] = e["name"]["en"]
        if e.get("flag"):
            app["f"] = e["flag"]
        if e.get("capital"):
            app["c"] = {k: e["capital"].get(k) for k in ("en", "ko", "ja")}
        if e.get("population"):
            app["p"] = e["population"]["value"]
        if e.get("continent"):
            app["g"] = {k: names(e["continent"], k) for k in ("en", "ko", "ja")}
        if e.get("official_languages"):
            app["l"] = {k: names(e["official_languages"], k) for k in ("en", "ko", "ja")}
            app["official"] = app["l"]
            app["native"] = [x.get("native") for x in e["official_languages"] if x.get("native")]
        if e.get("government_form"):
            app["gov"] = {k: names(e["government_form"], k) for k in ("en", "ko", "ja")}
        if e.get("government_type"):
            app["gov_factbook"] = e["government_type"]
        leaders = {}
        for k in ("en", "ko", "ja"):
            hs = names(e.get("head_of_state"), k)
            hg = names(e.get("head_of_government"), k)
            leaders[k] = {"head_of_state": hs, "head_of_government": hg}
        if leaders["en"]["head_of_state"] or leaders["en"]["head_of_government"]:
            app["leader"] = leaders
        if e.get("religions"):
            app["r"] = [{"n": x["name"], "p": x["pct"]} for x in e["religions"]]
        e["app"] = app

        # hand-curated content from the app, carried over unchanged
        cur = cur_by_iso3.get(iso3) if iso3 else None
        if cur:
            e["curated"] = {
                "religion": cur.get("DATA"), "profile": cur.get("PROFILE"),
                "food": cur.get("FOOD_DATA"), "politics": cur.get("POLITICS_DATA"),
                "movies": cur.get("MOVIES_DATA"), "languages": cur.get("LANGUAGES_DATA"),
                "business": cur.get("BUSINESS_DATA"), "regions": cur.get("REGION_DATA"),
            }
            e["curated"] = {k: v for k, v in e["curated"].items() if v}
            S["curated"] = [src("Hand-curated by the app author (see README)",
                                "https://github.com/choisen-hub/world-culture-map", TODAY)]
            stats["curated"] += 1
        out[iso2] = e

    result = {
        "_meta": {
            "generated": TODAY,
            "generator": "data/build_public.py",
            "count": len(out),
            "sources": [
                {"name": "Wikidata", "licence": "CC0 1.0", "url": "https://www.wikidata.org/"},
                {"name": "CIA World Factbook (factbook.json mirror)", "licence": "Public domain",
                 "url": "https://github.com/factbook/factbook.json"},
                {"name": "Natural Earth", "licence": "Public domain", "url": "https://www.naturalearthdata.com/"},
            ],
            "stats": stats,
        },
        "countries": out,
    }
    return result


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--refresh", action="store_true", help="refetch everything, ignore raw caches")
    ap.add_argument("--merge-only", action="store_true", help="only rebuild countries.json from raw/")
    args = ap.parse_args()
    os.makedirs(FB_RAW, exist_ok=True)

    if args.merge_only:
        wd = json.load(open(os.path.join(RAW, "wikidata_countries.json"), encoding="utf-8"))
        fb_files = {}
        for fn in os.listdir(FB_RAW):
            if fn.endswith(".json") and not fn.startswith("_"):
                fb_files[fn[:-5]] = json.load(open(os.path.join(FB_RAW, fn), encoding="utf-8"))
        ne = fetch_natural_earth(False)
    else:
        fb_files = fetch_factbook(args.refresh)
        extra = sorted({fb_iso2(cc, d) for cc, d in fb_files.items()} - {None})
        wd = fetch_wikidata(extra, args.refresh)
        ne = fetch_natural_earth(args.refresh)

    curated = load_curated()
    result = merge(wd, fb_files, ne, curated)
    json.dump(result, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    m = result["_meta"]
    log(f"[done] {m['count']} countries -> {OUT}")
    log(json.dumps(m["stats"], ensure_ascii=False, indent=1))


if __name__ == "__main__":
    main()
