# world-culture-map

An interactive world map for browsing country-level culture at a glance: religion composition, representative dishes, government type and leaders, film industry and notable films, language families and greetings, and major companies. It is a single HTML page with D3 and TopoJSON, plus a companion three.js globe view, and all country data is shipped as plain JavaScript objects in the repository. It was built as a personal study and reference tool and works offline except for the CDN-hosted libraries and the world atlas TopoJSON.

## Features

From `index.html`, `globe.html` and the `data-*.js` files:

- Six map themes selected by tabs: Religion, Food, Politics, Movies, Languages, Business. Each theme recolors the map (dominant religion, culinary region, government type, film industry, language family, dominant industry) and rebuilds the legend.
- Hover tooltip per country with theme-specific content (religion bars, top dishes, leader and parties, films, greeting and language family, companies).
- Click a country to open a side panel with an overview and per-theme tabs; a further "full page" country view (`#country/ISO`) with sections for overview, regions and cities, religion, politics, food, movies, business and language. The regions section draws an inline mini-map of cities and regions from `data-regions.js`.
- Statistics sidebar per theme: global religion shares and a per-continent stacked bar for Religion; counts and shares by category for the other themes.
- Zoom and pan (`d3.zoom`, scale 1 to 20).
- Three UI languages, Korean, English and Japanese, switched with the flag buttons; the choice is kept in `localStorage` under `religion-map-lang`. Data labels carry `ko`/`en`/`ja` variants where available.
- Deep links: `?country=KOR&tab=food` opens a country and theme on load; `#country/KOR/food` opens the full-page view at a section. Outgoing links point to two sibling apps of the author (a menu literacy app and a movie portal) and to Wikipedia where a `wiki` field exists.
- `globe.html`: a 3D globe (three.js r128) textured with the religion map, with auto-rotation, drag to rotate, wheel zoom, raycast hover tooltips and the same country panel. A button on each page switches between the 2D and 3D views.

## How it works

- `index.html` contains all CSS and application JavaScript. On load it fetches `world-atlas@2/countries-110m.json` from jsDelivr, converts it with `topojson-client`, and draws country paths with D3 using a `geoNaturalEarth1` projection (the regional mini-map on the country page uses `geoMercator`). Countries are keyed by ISO 3166-1 alpha-3 codes through an `idToISO` table that maps the atlas's numeric IDs.
- Theme data is loaded as global constants from separate script files before the main script runs:
  - `DATA` (religion shares, 259 entries) and `PROFILE` (capital, population, region, languages, religious-freedom tag and a description, 83 entries) are inline in `index.html`.
  - `FOOD_DATA`, `POLITICS_DATA` with `GOV_TYPES`, `MOVIES_DATA` with `MOVIE_INDUSTRY`, `LANGUAGES_DATA` with `LANG_FAMILIES`, `BUSINESS_DATA` with `BIZ_INDUSTRIES`, and `REGION_DATA` come from the `data-*.js` files.
- `getMapFill(iso)` picks a color per theme; `buildTooltipHTML`, `openUnifiedPanel` and the `cp-*` builders render the panel and the full-page view from the same objects.
- `globe.html` duplicates the religion `DATA`/`PROFILE` tables, paints a 4096x2048 canvas texture from the TopoJSON, and wraps it on a sphere; it does not load the other theme files.
- There is no build step, bundler or server component.

## Requirements

- Any modern browser with WebGL (for `globe.html`).
- Internet access on first load for: `d3.v7` (d3js.org), `topojson-client@3` and `world-atlas@2` (jsDelivr), and `three.js r128` (cdnjs). Nothing is installed locally.

## Installation and running

```bash
git clone https://github.com/choisen-hub/world-culture-map.git
cd world-culture-map
open index.html        # macOS; or double-click the file
```

Opening the file directly works because all data is loaded through `<script>` tags, not `fetch`. If your browser blocks CDN requests from `file://`, serve the folder instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/index.html
```

Deploy by uploading the folder to any static host.

## Configuration

There are no environment variables or config files. Things you may want to change are constants in `index.html`:

- `DEEPLINK_URLS`: base URLs of the sibling apps used for outgoing links (`menuLiteracy`, `moviePortal`, `culturemap`).
- `i18n`: UI strings for `ko`, `en`, `ja`.
- `RELIGIONS`, `GLOBAL_STATS`, `CONTINENT_DATA`: legend colors, icons and the aggregate religion statistics shown in the sidebar.
- The atlas URL in `d3.json(...)` (and the matching `fetch(...)` in `globe.html`) if you want to self-host `countries-110m.json`.

## Project structure

```
world-culture-map/
  index.html          2D map app: styles, i18n, religion and profile data, all UI logic
  globe.html          3D globe view (three.js), religion theme only
  data-food.js        FOOD_DATA: dishes per country (ko/en/ja names, description, flavor)
  data-politics.js    GOV_TYPES and POLITICS_DATA: government type, leader, parties
  data-movies.js      MOVIE_INDUSTRY and MOVIES_DATA: industry tag and notable films
  data-languages.js   LANG_FAMILIES and LANGUAGES_DATA: family, languages, greeting
  data-business.js    BIZ_INDUSTRIES and BUSINESS_DATA: dominant industry and companies
  data-regions.js     REGION_DATA: cities and regions with coordinates for the mini-map
  data/countries.json Public dataset per ISO alpha-2 (Wikidata + CIA Factbook + Natural Earth), built by data/build_public.py
  data/README.md      Source list, licences and the rebuild command for the public dataset
  _회수정보.md         Note (Korean) on how this copy was recovered from the deployed site
  LICENSE             MIT
```

## Usage examples

Open a country and theme from a URL:

```
index.html?country=JPN&tab=movies
index.html#country/JPN/food
```

Add a dish to a country in `data-food.js`:

```js
"KOR":{n:"대한민국",en:"South Korea",f:"🇰🇷",dishes:[
  {ko:"냉면",en:"Naengmyeon",ja:"冷麺",desc:"차가운 메밀국수",flavor:"시원, 새콤"},
  // ...
]},
```

Add a city marker in `data-regions.js`:

```js
{name:"대구",en:"Daegu",ja:"大邱",lat:35.8714,lon:128.6014,type:"city",desc:"섬유, 사과",icon:"🏙️"}
```

Change the default UI language: set `localStorage['religion-map-lang']` to `ko`, `en` or `ja`, or click a flag button.

## Data sources, licensing and attribution

- Country boundaries: `world-atlas` (Natural Earth derived, public domain) via jsDelivr.
- Libraries: D3 (ISC), topojson-client (ISC), three.js (MIT). They are loaded from CDNs and are not vendored.
- `data/countries.json` adds public fields (capital, population, currency, form of government, heads of state and government, official languages, Factbook religions, ethnic groups, languages, legal system) for 243 ISO codes, from Wikidata (CC0), the CIA World Factbook (public domain) and Natural Earth (public domain). It is loaded with `fetch()` when the page is served over HTTP and shows up as a "Public data" section plus a "Sources" line in the side panel and the full country page; on `file://` the app silently falls back to the curated tables. See `data/README.md` for the rebuild command.
- Religion percentages, profiles, dishes, political facts, films, languages and companies were compiled by the author from public reference sources (the sidebar cites Pew Research Center 2020 for global religion shares; individual entries link to Wikipedia where a `wiki` field is present). Figures are approximate and were not updated after compilation; treat them as a study aid, not a citable dataset.
- Flags are Unicode emoji.

## Known limitations

- Facts such as heads of government and party names are static snapshots in the data files and go out of date.
- Coverage is uneven across themes: religion data covers 259 entries, food 64, politics 67, languages 74, business 68, movies 37, regional detail 17 countries. Countries missing from a theme show no fill for that tab.
- The 3D globe only renders the religion theme and duplicates the religion data rather than sharing it with `index.html`.
- All logic lives in one large inline script; there are no tests and no module boundaries.
- Requires CDN access; nothing works offline on first load.
- Japanese translations are partial; where a `ja` field is missing the Korean or English label is shown.

## License

MIT. See `LICENSE`. Third-party libraries and the world atlas data keep their own licenses as noted above.
