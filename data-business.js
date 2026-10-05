// 🏢 Business data for World Theme Map Portal
const BIZ_INDUSTRIES = {
  "IT":{c:"#3498db",icon:"💻",en:"IT/Tech",ja:"IT/テック"},
  "자동차":{c:"#e74c3c",icon:"🚗",en:"Automotive",ja:"自動車"},
  "에너지":{c:"#f39c12",icon:"⛽",en:"Energy",ja:"エネルギー"},
  "금융":{c:"#2ecc71",icon:"🏦",en:"Finance",ja:"金融"},
  "소비재":{c:"#9b59b6",icon:"🛍️",en:"Consumer",ja:"消費財"},
  "제약/헬스":{c:"#1abc9c",icon:"💊",en:"Pharma/Health",ja:"製薬/ヘルス"},
  "통신":{c:"#e67e22",icon:"📡",en:"Telecom",ja:"通信"},
  "산업재":{c:"#95a5a6",icon:"🏭",en:"Industrial",ja:"産業財"},
  "광업/자원":{c:"#d35400",icon:"⛏️",en:"Mining/Resources",ja:"鉱業/資源"},
  "항공/방산":{c:"#2c3e50",icon:"✈️",en:"Aerospace/Defense",ja:"航空/防衛"},
  "식음료":{c:"#27ae60",icon:"🍺",en:"Food & Beverage",ja:"食品/飲料"},
  "유통":{c:"#8e44ad",icon:"🏬",en:"Retail",ja:"小売"},
  "복합":{c:"#7f8c8d",icon:"🏢",en:"Conglomerate",ja:"複合企業"}
};

const BUSINESS_DATA = {
"USA":{n:"미국",en:"United States",f:"🇺🇸",industry:"IT",companies:[
  {ko:"애플",en:"Apple",ja:"アップル",industry:"IT",desc:"시가총액 세계 1위, iPhone/Mac"},
  {ko:"마이크로소프트",en:"Microsoft",ja:"マイクロソフト",industry:"IT",desc:"Windows, Azure, AI"},
  {ko:"아마존",en:"Amazon",ja:"アマゾン",industry:"IT",desc:"이커머스, AWS 클라우드"}
]},
"KOR":{n:"대한민국",en:"South Korea",f:"🇰🇷",industry:"IT",companies:[
  {ko:"삼성전자",en:"Samsung Electronics",ja:"サムスン電子",industry:"IT",desc:"반도체, 스마트폰 세계 1위"},
  {ko:"현대자동차",en:"Hyundai Motor",ja:"ヒュンダイ自動車",industry:"자동차",desc:"글로벌 Top 3 자동차"},
  {ko:"SK하이닉스",en:"SK Hynix",ja:"SKハイニックス",industry:"IT",desc:"메모리 반도체 세계 2위"}
]},
"JPN":{n:"일본",en:"Japan",f:"🇯🇵",industry:"자동차",companies:[
  {ko:"토요타",en:"Toyota",ja:"トヨタ",industry:"자동차",desc:"세계 최대 자동차 제조사"},
  {ko:"소니",en:"Sony",ja:"ソニー",industry:"IT",desc:"PlayStation, 엔터테인먼트"},
  {ko:"소프트뱅크",en:"SoftBank",ja:"ソフトバンク",industry:"IT",desc:"비전펀드, 통신, 투자"}
]},
"CHN":{n:"중국",en:"China",f:"🇨🇳",industry:"IT",companies:[
  {ko:"텐센트",en:"Tencent",ja:"テンセント",industry:"IT",desc:"위챗, 게임, 핀테크"},
  {ko:"알리바바",en:"Alibaba",ja:"アリババ",industry:"IT",desc:"이커머스, 클라우드"},
  {ko:"화웨이",en:"Huawei",ja:"ファーウェイ",industry:"IT",desc:"통신장비, 스마트폰"}
]},
"DEU":{n:"독일",en:"Germany",f:"🇩🇪",industry:"자동차",companies:[
  {ko:"폭스바겐",en:"Volkswagen",ja:"フォルクスワーゲン",industry:"자동차",desc:"유럽 최대 자동차 그룹"},
  {ko:"지멘스",en:"Siemens",ja:"シーメンス",industry:"산업재",desc:"산업 자동화, 에너지"},
  {ko:"SAP",en:"SAP",ja:"SAP",industry:"IT",desc:"기업용 소프트웨어 세계 1위"}
]},
"GBR":{n:"영국",en:"United Kingdom",f:"🇬🇧",industry:"금융",companies:[
  {ko:"셸",en:"Shell",ja:"シェル",industry:"에너지",desc:"글로벌 에너지 메이저"},
  {ko:"HSBC",en:"HSBC",ja:"HSBC",industry:"금융",desc:"글로벌 은행"},
  {ko:"아스트라제네카",en:"AstraZeneca",ja:"アストラゼネカ",industry:"제약/헬스",desc:"글로벌 제약사"}
]},
"FRA":{n:"프랑스",en:"France",f:"🇫🇷",industry:"소비재",companies:[
  {ko:"LVMH",en:"LVMH",ja:"LVMH",industry:"소비재",desc:"루이비통, 디올 등 럭셔리"},
  {ko:"토탈에너지",en:"TotalEnergies",ja:"トタルエナジーズ",industry:"에너지",desc:"글로벌 에너지 메이저"},
  {ko:"에르메스",en:"Hermès",ja:"エルメス",industry:"소비재",desc:"최고급 럭셔리 브랜드"}
]},
"IND":{n:"인도",en:"India",f:"🇮🇳",industry:"IT",companies:[
  {ko:"릴라이언스",en:"Reliance Industries",ja:"リライアンス",industry:"복합",desc:"에너지, 통신, 유통 복합기업"},
  {ko:"타타그룹",en:"Tata Group",ja:"タタグループ",industry:"복합",desc:"IT, 자동차, 철강 복합기업"},
  {ko:"인포시스",en:"Infosys",ja:"インフォシス",industry:"IT",desc:"IT 서비스 글로벌 기업"}
]},
"BRA":{n:"브라질",en:"Brazil",f:"🇧🇷",industry:"광업/자원",companies:[
  {ko:"페트로브라스",en:"Petrobras",ja:"ペトロブラス",industry:"에너지",desc:"브라질 국영 석유"},
  {ko:"발레",en:"Vale",ja:"ヴァーレ",industry:"광업/자원",desc:"세계 최대 철광석 생산"},
  {ko:"이타우은행",en:"Itaú Unibanco",ja:"イタウ銀行",industry:"금융",desc:"남미 최대 은행"}
]},
"CAN":{n:"캐나다",en:"Canada",f:"🇨🇦",industry:"금융",companies:[
  {ko:"로열뱅크",en:"Royal Bank of Canada",ja:"ロイヤルバンク",industry:"금융",desc:"캐나다 최대 은행"},
  {ko:"쇼피파이",en:"Shopify",ja:"ショピファイ",industry:"IT",desc:"이커머스 플랫폼"},
  {ko:"엔브리지",en:"Enbridge",ja:"エンブリッジ",industry:"에너지",desc:"북미 최대 파이프라인"}
]},
"AUS":{n:"호주",en:"Australia",f:"🇦🇺",industry:"광업/자원",companies:[
  {ko:"BHP",en:"BHP",ja:"BHP",industry:"광업/자원",desc:"세계 최대 광업 기업"},
  {ko:"커먼웰스은행",en:"Commonwealth Bank",ja:"コモンウェルス銀行",industry:"금융",desc:"호주 최대 은행"},
  {ko:"CSL",en:"CSL Limited",ja:"CSL",industry:"제약/헬스",desc:"혈장제제 글로벌 리더"}
]},
"CHE":{n:"스위스",en:"Switzerland",f:"🇨🇭",industry:"제약/헬스",companies:[
  {ko:"네슬레",en:"Nestlé",ja:"ネスレ",industry:"식음료",desc:"세계 최대 식품 기업"},
  {ko:"노바르티스",en:"Novartis",ja:"ノバルティス",industry:"제약/헬스",desc:"글로벌 제약사"},
  {ko:"로슈",en:"Roche",ja:"ロシュ",industry:"제약/헬스",desc:"진단/제약 글로벌 리더"}
]},
"NLD":{n:"네덜란드",en:"Netherlands",f:"🇳🇱",industry:"IT",companies:[
  {ko:"ASML",en:"ASML",ja:"ASML",industry:"IT",desc:"반도체 장비 독점 기업"},
  {ko:"유니레버",en:"Unilever",ja:"ユニリーバ",industry:"소비재",desc:"글로벌 소비재"},
  {ko:"필립스",en:"Philips",ja:"フィリップス",industry:"제약/헬스",desc:"의료기기, 헬스케어"}
]},
"TWN":{n:"대만",en:"Taiwan",f:"🇹🇼",industry:"IT",companies:[
  {ko:"TSMC",en:"TSMC",ja:"TSMC",industry:"IT",desc:"세계 최대 반도체 파운드리"},
  {ko:"폭스콘",en:"Foxconn",ja:"フォックスコン",industry:"IT",desc:"전자제품 위탁제조"},
  {ko:"미디어텍",en:"MediaTek",ja:"メディアテック",industry:"IT",desc:"모바일 칩셋 설계"}
]},
"SAU":{n:"사우디아라비아",en:"Saudi Arabia",f:"🇸🇦",industry:"에너지",companies:[
  {ko:"아람코",en:"Saudi Aramco",ja:"サウジアラムコ",industry:"에너지",desc:"세계 최대 석유 기업"},
  {ko:"SABIC",en:"SABIC",ja:"SABIC",industry:"산업재",desc:"세계 4위 화학 기업"},
  {ko:"STC",en:"STC",ja:"STC",industry:"통신",desc:"사우디 최대 통신사"}
]},
"RUS":{n:"러시아",en:"Russia",f:"🇷🇺",industry:"에너지",companies:[
  {ko:"가즈프롬",en:"Gazprom",ja:"ガスプロム",industry:"에너지",desc:"세계 최대 천연가스 기업"},
  {ko:"로스네프트",en:"Rosneft",ja:"ロスネフチ",industry:"에너지",desc:"러시아 최대 석유 기업"},
  {ko:"스베르방크",en:"Sberbank",ja:"ズベルバンク",industry:"금융",desc:"러시아 최대 은행"}
]},
"ITA":{n:"이탈리아",en:"Italy",f:"🇮🇹",industry:"소비재",companies:[
  {ko:"페라리",en:"Ferrari",ja:"フェラーリ",industry:"자동차",desc:"럭셔리 스포츠카"},
  {ko:"에니",en:"Eni",ja:"エニ",industry:"에너지",desc:"이탈리아 최대 에너지"},
  {ko:"프라다",en:"Prada",ja:"プラダ",industry:"소비재",desc:"럭셔리 패션 브랜드"}
]},
"ESP":{n:"스페인",en:"Spain",f:"🇪🇸",industry:"금융",companies:[
  {ko:"인디텍스",en:"Inditex",ja:"インディテックス",industry:"소비재",desc:"자라(ZARA) 모회사"},
  {ko:"산탄데르",en:"Santander",ja:"サンタンデール",industry:"금융",desc:"유럽 최대 은행 중 하나"},
  {ko:"이베르드롤라",en:"Iberdrola",ja:"イベルドローラ",industry:"에너지",desc:"세계 최대 풍력 발전"}
]},
"MEX":{n:"멕시코",en:"Mexico",f:"🇲🇽",industry:"통신",companies:[
  {ko:"아메리카 모빌",en:"América Móvil",ja:"アメリカモービル",industry:"통신",desc:"중남미 최대 통신사"},
  {ko:"세멕스",en:"CEMEX",ja:"セメックス",industry:"산업재",desc:"글로벌 시멘트 기업"},
  {ko:"펨사",en:"FEMSA",ja:"フェムサ",industry:"식음료",desc:"코카콜라 보틀러, 편의점"}
]},
"IDN":{n:"인도네시아",en:"Indonesia",f:"🇮🇩",industry:"금융",companies:[
  {ko:"뱅크센트럴아시아",en:"Bank Central Asia",ja:"バンクセントラルアジア",industry:"금융",desc:"인도네시아 최대 민간 은행"},
  {ko:"텔콤인도네시아",en:"Telkom Indonesia",ja:"テルコムインドネシア",industry:"통신",desc:"인도네시아 최대 통신사"},
  {ko:"고젝/고투",en:"GoTo",ja:"ゴートゥー",industry:"IT",desc:"슈퍼앱 플랫폼"}
]},
"THA":{n:"태국",en:"Thailand",f:"🇹🇭",industry:"식음료",companies:[
  {ko:"CP그룹",en:"CP Group",ja:"CPグループ",industry:"식음료",desc:"농업/식품/유통 복합기업"},
  {ko:"PTT",en:"PTT",ja:"PTT",industry:"에너지",desc:"태국 국영 에너지"},
  {ko:"방콕은행",en:"Bangkok Bank",ja:"バンコク銀行",industry:"금융",desc:"태국 최대 상업은행"}
]},
"MYS":{n:"말레이시아",en:"Malaysia",f:"🇲🇾",industry:"에너지",companies:[
  {ko:"페트로나스",en:"Petronas",ja:"ペトロナス",industry:"에너지",desc:"말레이시아 국영 석유"},
  {ko:"메이뱅크",en:"Maybank",ja:"メイバンク",industry:"금융",desc:"동남아 최대 은행"},
  {ko:"텐나가나시오날",en:"Tenaga Nasional",ja:"テナガナショナル",industry:"에너지",desc:"전력 유틸리티"}
]},
"SGP":{n:"싱가포르",en:"Singapore",f:"🇸🇬",industry:"금융",companies:[
  {ko:"DBS그룹",en:"DBS Group",ja:"DBSグループ",industry:"금융",desc:"동남아 최대 은행"},
  {ko:"씨",en:"Sea Limited",ja:"Sea",industry:"IT",desc:"쇼피, 게임, 핀테크"},
  {ko:"싱텔",en:"Singtel",ja:"シンテル",industry:"통신",desc:"싱가포르 최대 통신사"}
]},
"PHL":{n:"필리핀",en:"Philippines",f:"🇵🇭",industry:"복합",companies:[
  {ko:"SM인베스트먼츠",en:"SM Investments",ja:"SMインベストメンツ",industry:"복합",desc:"유통, 부동산, 금융"},
  {ko:"아얄라",en:"Ayala Corporation",ja:"アヤラ",industry:"복합",desc:"부동산, 은행, 인프라"},
  {ko:"졸리비",en:"Jollibee",ja:"ジョリビー",industry:"식음료",desc:"아시아 최대 패스트푸드"}
]},
"VNM":{n:"베트남",en:"Vietnam",f:"🇻🇳",industry:"IT",companies:[
  {ko:"빈그룹",en:"Vingroup",ja:"ビングループ",industry:"복합",desc:"부동산, 자동차, IT"},
  {ko:"비엣텔",en:"Viettel",ja:"ベトテル",industry:"통신",desc:"베트남 최대 통신사"},
  {ko:"FPT",en:"FPT Corporation",ja:"FPT",industry:"IT",desc:"IT서비스, 소프트웨어"}
]},
"TUR":{n:"튀르키예",en:"Türkiye",f:"🇹🇷",industry:"산업재",companies:[
  {ko:"코치홀딩스",en:"Koç Holding",ja:"コチホールディングス",industry:"복합",desc:"자동차, 에너지, 금융"},
  {ko:"사반즈홀딩스",en:"Sabancı Holding",ja:"サバンジ",industry:"복합",desc:"금융, 에너지, 시멘트"},
  {ko:"터키항공",en:"Turkish Airlines",ja:"ターキッシュエアラインズ",industry:"항공/방산",desc:"유럽 최대 항공사 중 하나"}
]},
"ISR":{n:"이스라엘",en:"Israel",f:"🇮🇱",industry:"IT",companies:[
  {ko:"체크포인트",en:"Check Point",ja:"チェックポイント",industry:"IT",desc:"사이버보안 글로벌 리더"},
  {ko:"테바",en:"Teva Pharmaceutical",ja:"テバ",industry:"제약/헬스",desc:"세계 최대 제네릭 의약품"},
  {ko:"나이스",en:"NICE Systems",ja:"ナイスシステムズ",industry:"IT",desc:"AI 고객경험 소프트웨어"}
]},
"ARE":{n:"아랍에미리트",en:"UAE",f:"🇦🇪",industry:"에너지",companies:[
  {ko:"ADNOC",en:"ADNOC",ja:"ADNOC",industry:"에너지",desc:"아부다비 국영 석유"},
  {ko:"에미레이트항공",en:"Emirates",ja:"エミレーツ",industry:"항공/방산",desc:"세계적 항공사"},
  {ko:"에티살랏",en:"Etisalat",ja:"エティサラート",industry:"통신",desc:"UAE 최대 통신사"}
]},
"ZAF":{n:"남아프리카",en:"South Africa",f:"🇿🇦",industry:"광업/자원",companies:[
  {ko:"나스퍼스",en:"Naspers",ja:"ナスパーズ",industry:"IT",desc:"텐센트 대주주, 미디어"},
  {ko:"앵글로아메리칸",en:"Anglo American",ja:"アングロアメリカン",industry:"광업/자원",desc:"글로벌 광업 기업"},
  {ko:"사솔",en:"Sasol",ja:"サソール",industry:"에너지",desc:"석탄 액화 기술 보유"}
]},
"NGA":{n:"나이지리아",en:"Nigeria",f:"🇳🇬",industry:"통신",companies:[
  {ko:"단고트그룹",en:"Dangote Group",ja:"ダンゴートグループ",industry:"산업재",desc:"아프리카 최대 재벌"},
  {ko:"MTN나이지리아",en:"MTN Nigeria",ja:"MTNナイジェリア",industry:"통신",desc:"나이지리아 최대 통신사"},
  {ko:"BUA시멘트",en:"BUA Cement",ja:"BUAセメント",industry:"산업재",desc:"나이지리아 2위 시멘트"}
]},
"EGY":{n:"이집트",en:"Egypt",f:"🇪🇬",industry:"금융",companies:[
  {ko:"CIB이집트",en:"CIB Egypt",ja:"CIBエジプト",industry:"금융",desc:"이집트 최대 민간 은행"},
  {ko:"오라스콤",en:"Orascom",ja:"オラスコム",industry:"산업재",desc:"건설, 통신 복합기업"},
  {ko:"이스턴컴퍼니",en:"Eastern Company",ja:"イースタンカンパニー",industry:"소비재",desc:"이집트 최대 담배 기업"}
]},
"POL":{n:"폴란드",en:"Poland",f:"🇵🇱",industry:"에너지",companies:[
  {ko:"PKN오를렌",en:"PKN Orlen",ja:"PKNオルレン",industry:"에너지",desc:"폴란드 최대 정유사"},
  {ko:"CD프로젝트",en:"CD Projekt",ja:"CDプロジェクト",industry:"IT",desc:"위쳐, 사이버펑크 게임"},
  {ko:"알레그로",en:"Allegro",ja:"アレグロ",industry:"IT",desc:"폴란드 최대 이커머스"}
]},
"SWE":{n:"스웨덴",en:"Sweden",f:"🇸🇪",industry:"산업재",companies:[
  {ko:"볼보",en:"Volvo",ja:"ボルボ",industry:"자동차",desc:"안전의 대명사, 트럭"},
  {ko:"에릭슨",en:"Ericsson",ja:"エリクソン",industry:"통신",desc:"5G 통신장비 글로벌"},
  {ko:"스포티파이",en:"Spotify",ja:"スポティファイ",industry:"IT",desc:"음악 스트리밍 세계 1위"}
]},
"DNK":{n:"덴마크",en:"Denmark",f:"🇩🇰",industry:"제약/헬스",companies:[
  {ko:"노보노디스크",en:"Novo Nordisk",ja:"ノボノルディスク",industry:"제약/헬스",desc:"당뇨/비만 치료 세계 1위"},
  {ko:"머스크",en:"Maersk",ja:"マースク",industry:"산업재",desc:"세계 최대 해운사"},
  {ko:"베스타스",en:"Vestas",ja:"ヴェスタス",industry:"에너지",desc:"풍력터빈 세계 1위"}
]},
"NOR":{n:"노르웨이",en:"Norway",f:"🇳🇴",industry:"에너지",companies:[
  {ko:"에퀴노르",en:"Equinor",ja:"エクイノール",industry:"에너지",desc:"노르웨이 국영 에너지"},
  {ko:"DNB",en:"DNB",ja:"DNB",industry:"금융",desc:"노르웨이 최대 은행"},
  {ko:"텔레노르",en:"Telenor",ja:"テレノール",industry:"통신",desc:"북유럽 최대 통신사"}
]},
"FIN":{n:"핀란드",en:"Finland",f:"🇫🇮",industry:"통신",companies:[
  {ko:"노키아",en:"Nokia",ja:"ノキア",industry:"통신",desc:"5G 통신 인프라"},
  {ko:"코네",en:"KONE",ja:"コネ",industry:"산업재",desc:"엘리베이터/에스컬레이터"},
  {ko:"수퍼셀",en:"Supercell",ja:"スーパーセル",industry:"IT",desc:"클래시오브클랜 게임"}
]},
"IRL":{n:"아일랜드",en:"Ireland",f:"🇮🇪",industry:"IT",companies:[
  {ko:"액센추어",en:"Accenture",ja:"アクセンチュア",industry:"IT",desc:"글로벌 IT 컨설팅"},
  {ko:"라이언에어",en:"Ryanair",ja:"ライアンエアー",industry:"항공/방산",desc:"유럽 최대 저가항공"},
  {ko:"CRH",en:"CRH",ja:"CRH",industry:"산업재",desc:"글로벌 건축자재 기업"}
]},
"AUT":{n:"오스트리아",en:"Austria",f:"🇦🇹",industry:"에너지",companies:[
  {ko:"레드불",en:"Red Bull",ja:"レッドブル",industry:"식음료",desc:"에너지드링크 세계 1위"},
  {ko:"OMV",en:"OMV",ja:"OMV",industry:"에너지",desc:"오스트리아 최대 석유"},
  {ko:"에르스테그룹",en:"Erste Group",ja:"エアステグループ",industry:"금융",desc:"중동유럽 주요 은행"}
]},
"BEL":{n:"벨기에",en:"Belgium",f:"🇧🇪",industry:"식음료",companies:[
  {ko:"AB인베브",en:"AB InBev",ja:"ABインベブ",industry:"식음료",desc:"세계 최대 맥주 기업"},
  {ko:"우미코어",en:"Umicore",ja:"ユミコア",industry:"산업재",desc:"소재/리사이클링"},
  {ko:"솔베이",en:"Solvay",ja:"ソルベイ",industry:"산업재",desc:"화학/소재 기업"}
]},
"ARG":{n:"아르헨티나",en:"Argentina",f:"🇦🇷",industry:"에너지",companies:[
  {ko:"메르카도리브레",en:"MercadoLibre",ja:"メルカドリブレ",industry:"IT",desc:"남미 최대 이커머스"},
  {ko:"YPF",en:"YPF",ja:"YPF",industry:"에너지",desc:"아르헨티나 국영 석유"},
  {ko:"글로반트",en:"Globant",ja:"グロバント",industry:"IT",desc:"IT 서비스 기업"}
]},
"CHL":{n:"칠레",en:"Chile",f:"🇨🇱",industry:"광업/자원",companies:[
  {ko:"코델코",en:"Codelco",ja:"コデルコ",industry:"광업/자원",desc:"세계 최대 구리 생산"},
  {ko:"SQM",en:"SQM",ja:"SQM",industry:"광업/자원",desc:"리튬 세계 2위 생산"},
  {ko:"팔코니브릿지",en:"Falabella",ja:"ファラベラ",industry:"유통",desc:"남미 최대 유통 기업"}
]},
"COL":{n:"콜롬비아",en:"Colombia",f:"🇨🇴",industry:"에너지",companies:[
  {ko:"에코페트롤",en:"Ecopetrol",ja:"エコペトロール",industry:"에너지",desc:"콜롬비아 국영 석유"},
  {ko:"방콜롬비아",en:"Bancolombia",ja:"バンコロンビア",industry:"금융",desc:"콜롬비아 최대 은행"},
  {ko:"누뱅크콜롬비아",en:"Grupo Aval",ja:"グルーポアバル",industry:"금융",desc:"금융 지주회사"}
]},
"PER":{n:"페루",en:"Peru",f:"🇵🇪",industry:"광업/자원",companies:[
  {ko:"부에나벤투라",en:"Buenaventura",ja:"ブエナベンチュラ",industry:"광업/자원",desc:"페루 최대 금광 기업"},
  {ko:"크레디코프",en:"Credicorp",ja:"クレディコープ",industry:"금융",desc:"페루 최대 금융그룹"}
]},
"IRN":{n:"이란",en:"Iran",f:"🇮🇷",industry:"에너지",companies:[
  {ko:"이란국영석유",en:"NIOC",ja:"NIOC",industry:"에너지",desc:"이란 국영 석유 회사"},
  {ko:"이란호드로",en:"Iran Khodro",ja:"イランホドロ",industry:"자동차",desc:"이란 최대 자동차"}
]},
"PAK":{n:"파키스탄",en:"Pakistan",f:"🇵🇰",industry:"금융",companies:[
  {ko:"HBL",en:"Habib Bank",ja:"ハビブ銀行",industry:"금융",desc:"파키스탄 최대 은행"},
  {ko:"엔그로",en:"Engro",ja:"エングロ",industry:"산업재",desc:"비료, 에너지, 식품"}
]},
"BGD":{n:"방글라데시",en:"Bangladesh",f:"🇧🇩",industry:"소비재",companies:[
  {ko:"그라민폰",en:"Grameenphone",ja:"グラミンフォン",industry:"통신",desc:"방글라데시 최대 통신사"},
  {ko:"스퀘어그룹",en:"Square Group",ja:"スクエアグループ",industry:"제약/헬스",desc:"제약/식품 복합기업"}
]},
"LKA":{n:"스리랑카",en:"Sri Lanka",f:"🇱🇰",industry:"소비재",companies:[
  {ko:"존키엘스",en:"John Keells",ja:"ジョンキールズ",industry:"복합",desc:"스리랑카 최대 복합기업"},
  {ko:"다이얼로그",en:"Dialog Axiata",ja:"ダイアログ",industry:"통신",desc:"최대 통신사"}
]},
"KAZ":{n:"카자흐스탄",en:"Kazakhstan",f:"🇰🇿",industry:"에너지",companies:[
  {ko:"카즈무나이가스",en:"KazMunayGas",ja:"カズムナイガス",industry:"에너지",desc:"카자흐 국영 석유"},
  {ko:"카스피은행",en:"Kaspi Bank",ja:"カスピ銀行",industry:"금융",desc:"핀테크/디지털 뱅킹"}
]},
"QAT":{n:"카타르",en:"Qatar",f:"🇶🇦",industry:"에너지",companies:[
  {ko:"카타르에너지",en:"QatarEnergy",ja:"カタールエナジー",industry:"에너지",desc:"세계 최대 LNG 생산"},
  {ko:"카타르국립은행",en:"QNB",ja:"QNB",industry:"금융",desc:"중동 최대 은행"}
]},
"KWT":{n:"쿠웨이트",en:"Kuwait",f:"🇰🇼",industry:"에너지",companies:[
  {ko:"쿠웨이트석유",en:"Kuwait Petroleum",ja:"クウェート石油",industry:"에너지",desc:"쿠웨이트 국영 석유"},
  {ko:"자인",en:"Zain",ja:"ザイン",industry:"통신",desc:"중동/아프리카 통신사"}
]},
"MAR":{n:"모로코",en:"Morocco",f:"🇲🇦",industry:"산업재",companies:[
  {ko:"OCP그룹",en:"OCP Group",ja:"OCPグループ",industry:"산업재",desc:"세계 최대 인산비료"},
  {ko:"아티자리와파은행",en:"Attijariwafa Bank",ja:"アティジャリワファ",industry:"금융",desc:"모로코 최대 은행"}
]},
"KEN":{n:"케냐",en:"Kenya",f:"🇰🇪",industry:"통신",companies:[
  {ko:"사파리콤",en:"Safaricom",ja:"サファリコム",industry:"통신",desc:"엠페사(M-Pesa) 모바일결제"},
  {ko:"이스트아프리카브루어리",en:"East African Breweries",ja:"東アフリカ醸造",industry:"식음료",desc:"동아프리카 최대 주류"}
]},
"ETH":{n:"에티오피아",en:"Ethiopia",f:"🇪🇹",industry:"식음료",companies:[
  {ko:"에티오피아항공",en:"Ethiopian Airlines",ja:"エチオピア航空",industry:"항공/방산",desc:"아프리카 최대 항공사"},
  {ko:"BGI에티오피아",en:"BGI Ethiopia",ja:"BGIエチオピア",industry:"식음료",desc:"맥주/음료 기업"}
]},
"GHA":{n:"가나",en:"Ghana",f:"🇬🇭",industry:"금융",companies:[
  {ko:"MTN가나",en:"MTN Ghana",ja:"MTNガーナ",industry:"통신",desc:"가나 최대 통신사"},
  {ko:"가나상업은행",en:"GCB Bank",ja:"GCB銀行",industry:"금융",desc:"가나 최대 은행"}
]},
"NZL":{n:"뉴질랜드",en:"New Zealand",f:"🇳🇿",industry:"식음료",companies:[
  {ko:"폰테라",en:"Fonterra",ja:"フォンテラ",industry:"식음료",desc:"세계 최대 유제품 수출"},
  {ko:"피셔앤파이켈",en:"Fisher & Paykel",ja:"フィッシャー＆パイケル",industry:"제약/헬스",desc:"의료기기/가전"}
]},
"PRT":{n:"포르투갈",en:"Portugal",f:"🇵🇹",industry:"에너지",companies:[
  {ko:"EDP",en:"EDP",ja:"EDP",industry:"에너지",desc:"포르투갈 최대 전력"},
  {ko:"제로니모마르틴스",en:"Jerónimo Martins",ja:"ジェロニモマルティンス",industry:"유통",desc:"유통 기업"}
]},
"GRC":{n:"그리스",en:"Greece",f:"🇬🇷",industry:"에너지",companies:[
  {ko:"그리스국립은행",en:"National Bank of Greece",ja:"ギリシャ国立銀行",industry:"금융",desc:"그리스 최대 은행"},
  {ko:"모터오일헬라스",en:"Motor Oil Hellas",ja:"モーターオイルヘラス",industry:"에너지",desc:"정유/에너지"}
]},
"CZE":{n:"체코",en:"Czechia",f:"🇨🇿",industry:"에너지",companies:[
  {ko:"ŠKO다오토",en:"Škoda Auto",ja:"シュコダ",industry:"자동차",desc:"체코 대표 자동차(VW 계열)"},
  {ko:"CEZ",en:"CEZ Group",ja:"CEZ",industry:"에너지",desc:"체코 최대 전력회사"}
]},
"HUN":{n:"헝가리",en:"Hungary",f:"🇭🇺",industry:"제약/헬스",companies:[
  {ko:"MOL그룹",en:"MOL Group",ja:"MOLグループ",industry:"에너지",desc:"헝가리 석유/가스"},
  {ko:"리히터게데온",en:"Richter Gedeon",ja:"リヒターゲデオン",industry:"제약/헬스",desc:"헝가리 최대 제약사"}
]},
"ROU":{n:"루마니아",en:"Romania",f:"🇷🇴",industry:"에너지",companies:[
  {ko:"OMV페트롬",en:"OMV Petrom",ja:"OMVペトロム",industry:"에너지",desc:"루마니아 최대 에너지"},
  {ko:"비트디펜더",en:"Bitdefender",ja:"ビットディフェンダー",industry:"IT",desc:"사이버보안 글로벌 기업"}
]},
"UKR":{n:"우크라이나",en:"Ukraine",f:"🇺🇦",industry:"산업재",companies:[
  {ko:"나프토가즈",en:"Naftogaz",ja:"ナフトガス",industry:"에너지",desc:"우크라이나 국영 에너지"},
  {ko:"메타인베스트",en:"Metinvest",ja:"メティンベスト",industry:"광업/자원",desc:"철강/광업 기업"}
]},
"IRQ":{n:"이라크",en:"Iraq",f:"🇮🇶",industry:"에너지",companies:[
  {ko:"바스라석유",en:"Basra Oil",ja:"バスラ石油",industry:"에너지",desc:"이라크 남부 석유"},
  {ko:"자인이라크",en:"Zain Iraq",ja:"ザインイラク",industry:"통신",desc:"이라크 주요 통신사"}
]},
"MMR":{n:"미얀마",en:"Myanmar",f:"🇲🇲",industry:"통신",companies:[
  {ko:"미얀마맥주",en:"Myanmar Brewery",ja:"ミャンマービール",industry:"식음료",desc:"미얀마 맥주 시장 주도"}
]},
"KHM":{n:"캄보디아",en:"Cambodia",f:"🇰🇭",industry:"금융",companies:[
  {ko:"아클레다은행",en:"ACLEDA Bank",ja:"アクレダ銀行",industry:"금융",desc:"캄보디아 최대 은행"}
]},
"MNG":{n:"몽골",en:"Mongolia",f:"🇲🇳",industry:"광업/자원",companies:[
  {ko:"에르데네트광산",en:"Erdenet Mining",ja:"エルデネト鉱山",industry:"광업/자원",desc:"몽골 최대 구리/몰리브덴 광산"}
]},
"LBN":{n:"레바논",en:"Lebanon",f:"🇱🇧",industry:"금융",companies:[
  {ko:"블롬은행",en:"BLOM Bank",ja:"ブロム銀行",industry:"금융",desc:"레바논 최대 은행"}
]},
"JOR":{n:"요르단",en:"Jordan",f:"🇯🇴",industry:"산업재",companies:[
  {ko:"아랍포타쉬",en:"Arab Potash",ja:"アラブポタッシュ",industry:"산업재",desc:"세계 주요 칼리 생산"},
  {ko:"요르단텔레콤",en:"Jordan Telecom",ja:"ヨルダンテレコム",industry:"통신",desc:"요르단 주요 통신사"}
]}
};

function getBizIndustry(iso) {
  const bd = BUSINESS_DATA[iso];
  if(!bd) return null;
  const ind = BIZ_INDUSTRIES[bd.industry];
  return ind ? {industry: bd.industry, color: ind.c, icon: ind.icon} : null;
}
