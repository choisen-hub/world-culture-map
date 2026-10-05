// 🗺️ Regional data for country detail pages
const REGION_DATA = {
"KOR": {
  center: [36.5, 127.5], zoom: 7,
  bounds: [[33, 124], [39, 132]],
  regions: [
    {name:"서울",en:"Seoul",ja:"ソウル",lat:37.5665,lon:126.978,type:"capital",desc:"수도, K-pop, 경복궁",icon:"🏙️"},
    {name:"부산",en:"Busan",ja:"釜山",lat:35.1796,lon:129.0756,type:"city",desc:"해운대, 자갈치시장, 해산물",icon:"🏖️"},
    {name:"제주",en:"Jeju",ja:"済州",lat:33.4996,lon:126.5312,type:"region",desc:"화산섬, 해녀, 흑돼지",icon:"🌴"},
    {name:"전라도",en:"Jeolla",ja:"全羅道",lat:35.15,lon:126.85,type:"region",desc:"한국 미식의 고장, 비빔밥",icon:"🍚"},
    {name:"경주",en:"Gyeongju",ja:"慶州",lat:35.8562,lon:129.2247,type:"city",desc:"신라 천년의 수도, 불국사",icon:"🏛️"},
    {name:"인천",en:"Incheon",ja:"仁川",lat:37.4563,lon:126.7052,type:"city",desc:"국제공항, 차이나타운",icon:"✈️"},
    {name:"강원도",en:"Gangwon",ja:"江原道",lat:37.8228,lon:128.1555,type:"region",desc:"설악산, 스키, 동해안",icon:"⛷️"}
  ]
},
"JPN": {
  center: [36.2, 138.2], zoom: 6,
  bounds: [[24, 123], [46, 146]],
  regions: [
    {name:"도쿄",en:"Tokyo",ja:"東京",lat:35.6762,lon:139.6503,type:"capital",desc:"수도, 시부야, 아키하바라",icon:"🗼"},
    {name:"오사카",en:"Osaka",ja:"大阪",lat:34.6937,lon:135.5023,type:"city",desc:"먹거리 천국, 오코노미야키",icon:"🍢"},
    {name:"교토",en:"Kyoto",ja:"京都",lat:35.0116,lon:135.7681,type:"city",desc:"천년 고도, 신사와 사찰",icon:"⛩️"},
    {name:"홋카이도",en:"Hokkaido",ja:"北海道",lat:43.0642,lon:141.3469,type:"region",desc:"라벤더, 해산물, 스키",icon:"❄️"},
    {name:"오키나와",en:"Okinawa",ja:"沖縄",lat:26.3344,lon:127.8056,type:"region",desc:"열대 해변, 류큐 문화",icon:"🏝️"},
    {name:"후쿠오카",en:"Fukuoka",ja:"福岡",lat:33.5904,lon:130.4017,type:"city",desc:"하카타 라멘, 야타이 포장마차",icon:"🍜"},
    {name:"히로시마",en:"Hiroshima",ja:"広島",lat:34.3853,lon:132.4553,type:"city",desc:"평화기념공원, 오코노미야키",icon:"🕊️"},
    {name:"나라",en:"Nara",ja:"奈良",lat:34.6851,lon:135.8048,type:"city",desc:"사슴공원, 대불",icon:"🦌"}
  ]
},
"CHN": {
  center: [35, 105], zoom: 4,
  bounds: [[18, 73], [54, 135]],
  regions: [
    {name:"베이징",en:"Beijing",ja:"北京",lat:39.9042,lon:116.4074,type:"capital",desc:"수도, 자금성, 만리장성",icon:"🏯"},
    {name:"상하이",en:"Shanghai",ja:"上海",lat:31.2304,lon:121.4737,type:"city",desc:"금융 중심, 와이탄, 샤오룽바오",icon:"🏙️"},
    {name:"광저우",en:"Guangzhou",ja:"広州",lat:23.1291,lon:113.2644,type:"city",desc:"광둥 요리, 딤섬",icon:"🍜"},
    {name:"청두",en:"Chengdu",ja:"成都",lat:30.5728,lon:104.0668,type:"city",desc:"쓰촨 요리, 판다, 마라",icon:"🐼"},
    {name:"시안",en:"Xi'an",ja:"西安",lat:34.3416,lon:108.9398,type:"city",desc:"병마용, 실크로드 기점",icon:"🏛️"},
    {name:"홍콩",en:"Hong Kong",ja:"香港",lat:22.3193,lon:114.1694,type:"city",desc:"금융 허브, 딤섬, 야경",icon:"🌃"},
    {name:"라사",en:"Lhasa",ja:"ラサ",lat:29.6500,lon:91.1000,type:"city",desc:"티베트, 포탈라궁",icon:"🏔️"},
    {name:"하얼빈",en:"Harbin",ja:"ハルビン",lat:45.7500,lon:126.6500,type:"city",desc:"빙등제, 러시아 영향",icon:"❄️"}
  ]
},
"USA": {
  center: [39, -98], zoom: 4,
  bounds: [[24, -125], [50, -66]],
  regions: [
    {name:"뉴욕",en:"New York",ja:"ニューヨーク",lat:40.7128,lon:-74.006,type:"city",desc:"자유의 여신상, 월스트리트",icon:"🗽"},
    {name:"로스앤젤레스",en:"Los Angeles",ja:"ロサンゼルス",lat:34.0522,lon:-118.2437,type:"city",desc:"할리우드, 엔터테인먼트",icon:"🎬"},
    {name:"워싱턴 D.C.",en:"Washington D.C.",ja:"ワシントンD.C.",lat:38.9072,lon:-77.0369,type:"capital",desc:"수도, 백악관, 스미소니언",icon:"🏛️"},
    {name:"시카고",en:"Chicago",ja:"シカゴ",lat:41.8781,lon:-87.6298,type:"city",desc:"딥디시 피자, 건축, 재즈",icon:"🎵"},
    {name:"텍사스",en:"Texas",ja:"テキサス",lat:31.9686,lon:-99.9018,type:"region",desc:"BBQ, 카우보이, 석유",icon:"🤠"},
    {name:"뉴올리언스",en:"New Orleans",ja:"ニューオーリンズ",lat:29.9511,lon:-90.0715,type:"city",desc:"재즈, 케이준 요리, 카니발",icon:"🎺"},
    {name:"샌프란시스코",en:"San Francisco",ja:"サンフランシスコ",lat:37.7749,lon:-122.4194,type:"city",desc:"실리콘밸리, 금문교",icon:"🌉"},
    {name:"하와이",en:"Hawaii",ja:"ハワイ",lat:21.3069,lon:-157.8583,type:"region",desc:"열대 파라다이스, 서핑",icon:"🌺"}
  ]
},
"GBR": {
  center: [54, -2], zoom: 6,
  bounds: [[49, -8], [61, 2]],
  regions: [
    {name:"런던",en:"London",ja:"ロンドン",lat:51.5074,lon:-0.1278,type:"capital",desc:"수도, 빅벤, 버킹엄궁",icon:"🏰"},
    {name:"에든버러",en:"Edinburgh",ja:"エディンバラ",lat:55.9533,lon:-3.1883,type:"city",desc:"스코틀랜드 수도, 위스키",icon:"🏴󠁧󠁢󠁳󠁣󠁴󠁿"},
    {name:"맨체스터",en:"Manchester",ja:"マンチェスター",lat:53.4808,lon:-2.2426,type:"city",desc:"축구, 산업혁명 발상지",icon:"⚽"},
    {name:"옥스퍼드",en:"Oxford",ja:"オックスフォード",lat:51.7520,lon:-1.2577,type:"city",desc:"세계 최고 대학 도시",icon:"🎓"},
    {name:"코츠월드",en:"Cotswolds",ja:"コッツウォルズ",lat:51.8330,lon:-1.8433,type:"region",desc:"그림 같은 영국 시골",icon:"🏡"},
    {name:"리버풀",en:"Liverpool",ja:"リバプール",lat:53.4084,lon:-2.9916,type:"city",desc:"비틀즈의 고향",icon:"🎸"}
  ]
},
"FRA": {
  center: [46.5, 2.5], zoom: 6,
  bounds: [[41, -5], [51, 10]],
  regions: [
    {name:"파리",en:"Paris",ja:"パリ",lat:48.8566,lon:2.3522,type:"capital",desc:"수도, 에펠탑, 루브르",icon:"🗼"},
    {name:"프로방스",en:"Provence",ja:"プロヴァンス",lat:43.9493,lon:6.0679,type:"region",desc:"라벤더, 지중해 요리",icon:"💜"},
    {name:"보르도",en:"Bordeaux",ja:"ボルドー",lat:44.8378,lon:-0.5792,type:"city",desc:"세계적인 와인 산지",icon:"🍷"},
    {name:"리옹",en:"Lyon",ja:"リヨン",lat:45.7640,lon:4.8357,type:"city",desc:"미식의 수도, 부숑",icon:"👨‍🍳"},
    {name:"니스",en:"Nice",ja:"ニース",lat:43.7102,lon:7.2620,type:"city",desc:"코트다쥐르, 지중해",icon:"🏖️"},
    {name:"노르망디",en:"Normandy",ja:"ノルマンディー",lat:48.8797,lon:-0.1712,type:"region",desc:"D-day, 카망베르 치즈",icon:"🧀"}
  ]
},
"DEU": {
  center: [51, 10], zoom: 6,
  bounds: [[47, 5], [55, 16]],
  regions: [
    {name:"베를린",en:"Berlin",ja:"ベルリン",lat:52.5200,lon:13.4050,type:"capital",desc:"수도, 브란덴부르크문",icon:"🏛️"},
    {name:"뮌헨",en:"Munich",ja:"ミュンヘン",lat:48.1351,lon:11.582,type:"city",desc:"옥토버페스트, 바이에른",icon:"🍺"},
    {name:"함부르크",en:"Hamburg",ja:"ハンブルク",lat:53.5511,lon:9.9937,type:"city",desc:"항구 도시, 피쉬마르크트",icon:"⚓"},
    {name:"프랑크푸르트",en:"Frankfurt",ja:"フランクフルト",lat:50.1109,lon:8.6821,type:"city",desc:"금융 중심, 소시지",icon:"🏦"},
    {name:"쾰른",en:"Cologne",ja:"ケルン",lat:50.9375,lon:6.9603,type:"city",desc:"대성당, 카니발",icon:"⛪"},
    {name:"드레스덴",en:"Dresden",ja:"ドレスデン",lat:51.0504,lon:13.7373,type:"city",desc:"바로크 건축, 엘베강",icon:"🎭"}
  ]
},
"IND": {
  center: [22, 80], zoom: 5,
  bounds: [[8, 68], [36, 98]],
  regions: [
    {name:"뉴델리",en:"New Delhi",ja:"ニューデリー",lat:28.6139,lon:77.2090,type:"capital",desc:"수도, 레드포트, 인디아게이트",icon:"🏛️"},
    {name:"뭄바이",en:"Mumbai",ja:"ムンバイ",lat:19.0760,lon:72.8777,type:"city",desc:"발리우드, 금융 중심",icon:"🎬"},
    {name:"바라나시",en:"Varanasi",ja:"バラナシ",lat:25.3176,lon:83.0064,type:"city",desc:"힌두교 성지, 갠지스강",icon:"🙏"},
    {name:"자이푸르",en:"Jaipur",ja:"ジャイプル",lat:26.9124,lon:75.7873,type:"city",desc:"핑크시티, 라자스탄",icon:"🏰"},
    {name:"고아",en:"Goa",ja:"ゴア",lat:15.2993,lon:74.1240,type:"region",desc:"해변, 포르투갈 영향",icon:"🏖️"},
    {name:"케랄라",en:"Kerala",ja:"ケーララ",lat:10.8505,lon:76.2711,type:"region",desc:"백워터, 향신료, 아유르베다",icon:"🌿"},
    {name:"콜카타",en:"Kolkata",ja:"コルカタ",lat:22.5726,lon:88.3639,type:"city",desc:"문화 수도, 라스굴라",icon:"📚"},
    {name:"아그라",en:"Agra",ja:"アーグラ",lat:27.1767,lon:78.0081,type:"city",desc:"타지마할",icon:"🕌"}
  ]
},
"ITA": {
  center: [42.5, 12.5], zoom: 6,
  bounds: [[36, 6], [47, 19]],
  regions: [
    {name:"로마",en:"Rome",ja:"ローマ",lat:41.9028,lon:12.4964,type:"capital",desc:"수도, 콜로세움, 바티칸",icon:"🏛️"},
    {name:"베네치아",en:"Venice",ja:"ヴェネツィア",lat:45.4408,lon:12.3155,type:"city",desc:"수상 도시, 곤돌라",icon:"🛶"},
    {name:"피렌체",en:"Florence",ja:"フィレンツェ",lat:43.7696,lon:11.2558,type:"city",desc:"르네상스, 우피치 미술관",icon:"🎨"},
    {name:"나폴리",en:"Naples",ja:"ナポリ",lat:40.8518,lon:14.2681,type:"city",desc:"피자 발상지, 베수비오",icon:"🍕"},
    {name:"밀라노",en:"Milan",ja:"ミラノ",lat:45.4642,lon:9.1900,type:"city",desc:"패션, 두오모 성당",icon:"👗"},
    {name:"시칠리아",en:"Sicily",ja:"シチリア",lat:37.5999,lon:14.0154,type:"region",desc:"그리스 유적, 카놀리",icon:"🏝️"},
    {name:"토스카나",en:"Tuscany",ja:"トスカーナ",lat:43.3500,lon:11.3500,type:"region",desc:"와인, 키안티, 올리브",icon:"🍷"}
  ]
},
"ESP": {
  center: [40, -3.5], zoom: 6,
  bounds: [[36, -10], [44, 5]],
  regions: [
    {name:"마드리드",en:"Madrid",ja:"マドリード",lat:40.4168,lon:-3.7038,type:"capital",desc:"수도, 프라도 미술관",icon:"🏛️"},
    {name:"바르셀로나",en:"Barcelona",ja:"バルセロナ",lat:41.3851,lon:2.1734,type:"city",desc:"가우디, 사그라다 파밀리아",icon:"⛪"},
    {name:"세비야",en:"Seville",ja:"セビリア",lat:37.3891,lon:-5.9845,type:"city",desc:"플라멩코, 안달루시아",icon:"💃"},
    {name:"발렌시아",en:"Valencia",ja:"バレンシア",lat:39.4699,lon:-0.3763,type:"city",desc:"파에야 발상지",icon:"🥘"},
    {name:"산세바스티안",en:"San Sebastián",ja:"サン・セバスティアン",lat:43.3183,lon:-1.9812,type:"city",desc:"미슐랭 스타의 도시, 핀초스",icon:"🍽️"},
    {name:"그라나다",en:"Granada",ja:"グラナダ",lat:37.1773,lon:-3.5986,type:"city",desc:"알람브라 궁전",icon:"🏰"}
  ]
},
"BRA": {
  center: [-14, -51], zoom: 4,
  bounds: [[-33, -74], [5, -34]],
  regions: [
    {name:"브라질리아",en:"Brasília",ja:"ブラジリア",lat:-15.7975,lon:-47.8919,type:"capital",desc:"수도, 오스카 니마이어 건축",icon:"🏛️"},
    {name:"리우데자네이루",en:"Rio de Janeiro",ja:"リオデジャネイロ",lat:-22.9068,lon:-43.1729,type:"city",desc:"카니발, 코르코바도",icon:"🎭"},
    {name:"상파울루",en:"São Paulo",ja:"サンパウロ",lat:-23.5505,lon:-46.6333,type:"city",desc:"남미 최대 도시, 금융",icon:"🏙️"},
    {name:"살바도르",en:"Salvador",ja:"サルヴァドール",lat:-12.9714,lon:-38.5124,type:"city",desc:"아프로브라질 문화",icon:"🥁"},
    {name:"아마존",en:"Amazon",ja:"アマゾン",lat:-3.1190,lon:-60.0217,type:"region",desc:"열대우림, 생태계",icon:"🌳"},
    {name:"미나스제라이스",en:"Minas Gerais",ja:"ミナスジェライス",lat:-19.9167,lon:-43.9345,type:"region",desc:"치즈빵(빵지게이주), 광산",icon:"⛏️"}
  ]
},
"RUS": {
  center: [62, 90], zoom: 3,
  bounds: [[41, 27], [82, 180]],
  regions: [
    {name:"모스크바",en:"Moscow",ja:"モスクワ",lat:55.7558,lon:37.6173,type:"capital",desc:"수도, 크렘린, 붉은광장",icon:"🏰"},
    {name:"상트페테르부르크",en:"St. Petersburg",ja:"サンクトペテルブルク",lat:59.9343,lon:30.3351,type:"city",desc:"에르미타주, 백야",icon:"🎭"},
    {name:"시베리아",en:"Siberia",ja:"シベリア",lat:60,lon:100,type:"region",desc:"바이칼호, 시베리아횡단철도",icon:"🚂"},
    {name:"블라디보스토크",en:"Vladivostok",ja:"ウラジオストク",lat:43.1198,lon:131.8869,type:"city",desc:"극동 항구, 시베리아횡단 종점",icon:"⚓"},
    {name:"소치",en:"Sochi",ja:"ソチ",lat:43.6028,lon:39.7342,type:"city",desc:"흑해 휴양지, 동계올림픽",icon:"🏔️"}
  ]
},
"THA": {
  center: [15, 101], zoom: 6,
  bounds: [[5, 97], [21, 106]],
  regions: [
    {name:"방콕",en:"Bangkok",ja:"バンコク",lat:13.7563,lon:100.5018,type:"capital",desc:"수도, 왓프라깨우, 카오산로드",icon:"🏯"},
    {name:"치앙마이",en:"Chiang Mai",ja:"チェンマイ",lat:18.7883,lon:98.9853,type:"city",desc:"사원의 도시, 란나 문화",icon:"⛩️"},
    {name:"푸켓",en:"Phuket",ja:"プーケット",lat:7.8804,lon:98.3923,type:"city",desc:"안다만해 해변 리조트",icon:"🏖️"},
    {name:"아유타야",en:"Ayutthaya",ja:"アユタヤ",lat:14.3692,lon:100.5877,type:"city",desc:"고대 왕국 유적",icon:"🏛️"},
    {name:"파타야",en:"Pattaya",ja:"パタヤ",lat:12.9236,lon:100.8825,type:"city",desc:"해변 리조트, 나이트라이프",icon:"🌴"}
  ]
},
"TUR": {
  center: [39, 35], zoom: 6,
  bounds: [[36, 26], [42, 45]],
  regions: [
    {name:"앙카라",en:"Ankara",ja:"アンカラ",lat:39.9334,lon:32.8597,type:"capital",desc:"수도, 아타튀르크 묘소",icon:"🏛️"},
    {name:"이스탄불",en:"Istanbul",ja:"イスタンブール",lat:41.0082,lon:28.9784,type:"city",desc:"하기아 소피아, 그랜드 바자르",icon:"🕌"},
    {name:"카파도키아",en:"Cappadocia",ja:"カッパドキア",lat:38.6431,lon:34.8289,type:"region",desc:"열기구, 동굴 도시",icon:"🎈"},
    {name:"안탈리아",en:"Antalya",ja:"アンタリヤ",lat:36.8969,lon:30.7133,type:"city",desc:"터키 리비에라, 해변",icon:"🏖️"},
    {name:"에페소스",en:"Ephesus",ja:"エフェソス",lat:37.9394,lon:27.3417,type:"city",desc:"고대 그리스-로마 유적",icon:"🏛️"},
    {name:"트라브존",en:"Trabzon",ja:"トラブゾン",lat:41.0027,lon:39.7168,type:"city",desc:"흑해 연안, 수멜라 수도원",icon:"⛪"}
  ]
},
"AUS": {
  center: [-25, 134], zoom: 4,
  bounds: [[-44, 112], [-10, 154]],
  regions: [
    {name:"캔버라",en:"Canberra",ja:"キャンベラ",lat:-35.2809,lon:149.1300,type:"capital",desc:"수도, 국회의사당",icon:"🏛️"},
    {name:"시드니",en:"Sydney",ja:"シドニー",lat:-33.8688,lon:151.2093,type:"city",desc:"오페라하우스, 하버브리지",icon:"🎭"},
    {name:"멜버른",en:"Melbourne",ja:"メルボルン",lat:-37.8136,lon:144.9631,type:"city",desc:"커피문화, 예술의 도시",icon:"☕"},
    {name:"그레이트 배리어 리프",en:"Great Barrier Reef",ja:"グレートバリアリーフ",lat:-18.2871,lon:147.6992,type:"region",desc:"세계 최대 산호초",icon:"🐠"},
    {name:"울루루",en:"Uluru",ja:"ウルル",lat:-25.3444,lon:131.0369,type:"region",desc:"원주민 성지, 붉은 바위",icon:"🪨"},
    {name:"퍼스",en:"Perth",ja:"パース",lat:-31.9505,lon:115.8605,type:"city",desc:"서호주, 인도양 해변",icon:"🌅"}
  ]
},
"MEX": {
  center: [23.5, -102], zoom: 5,
  bounds: [[14, -118], [33, -86]],
  regions: [
    {name:"멕시코시티",en:"Mexico City",ja:"メキシコシティ",lat:19.4326,lon:-99.1332,type:"capital",desc:"수도, 아즈텍 유적, 타코",icon:"🏛️"},
    {name:"칸쿤",en:"Cancún",ja:"カンクン",lat:21.1619,lon:-86.8515,type:"city",desc:"카리브해 리조트, 마야 유적",icon:"🏖️"},
    {name:"오악사카",en:"Oaxaca",ja:"オアハカ",lat:17.0732,lon:-96.7266,type:"city",desc:"몰레 소스, 메스칼",icon:"🌶️"},
    {name:"과달라하라",en:"Guadalajara",ja:"グアダラハラ",lat:20.6597,lon:-103.3496,type:"city",desc:"마리아치, 테킬라",icon:"🎺"},
    {name:"유카탄",en:"Yucatán",ja:"ユカタン",lat:20.7099,lon:-89.0943,type:"region",desc:"치첸이트사, 마야 문명",icon:"🏛️"}
  ]
},
"EGY": {
  center: [26.5, 30], zoom: 6,
  bounds: [[22, 25], [32, 35]],
  regions: [
    {name:"카이로",en:"Cairo",ja:"カイロ",lat:30.0444,lon:31.2357,type:"capital",desc:"수도, 이집트 박물관",icon:"🏛️"},
    {name:"기자",en:"Giza",ja:"ギザ",lat:29.9792,lon:31.1342,type:"city",desc:"피라미드, 스핑크스",icon:"🔺"},
    {name:"룩소르",en:"Luxor",ja:"ルクソール",lat:25.6872,lon:32.6396,type:"city",desc:"왕가의 계곡, 카르낙 신전",icon:"🏛️"},
    {name:"알렉산드리아",en:"Alexandria",ja:"アレクサンドリア",lat:31.2001,lon:29.9187,type:"city",desc:"지중해 항구, 고대 도서관",icon:"📚"},
    {name:"아스완",en:"Aswan",ja:"アスワン",lat:24.0889,lon:32.8998,type:"city",desc:"아스완댐, 누비아 문화",icon:"🌊"}
  ]
}
};
