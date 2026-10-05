// 🍽️ Food data for World Theme Map Portal
const FOOD_DATA = {
"USA":{n:"미국",en:"United States",f:"🇺🇸",dishes:[
  {ko:"햄버거",en:"Hamburger",ja:"ハンバーガー",desc:"소고기 패티, 빵, 다양한 토핑",flavor:"짭짤, 고소"},
  {ko:"핫도그",en:"Hot Dog",ja:"ホットドッグ",desc:"소시지, 번, 머스타드/케첩",flavor:"짭짤"},
  {ko:"바비큐 립",en:"BBQ Ribs",ja:"BBQリブ",desc:"훈제 돼지갈비, 바비큐 소스",flavor:"달콤짭짤, 스모키"},
  {ko:"클램 차우더",en:"Clam Chowder",ja:"クラムチャウダー",desc:"조개, 감자, 크림",flavor:"크리미, 짭짤"},
  {ko:"애플파이",en:"Apple Pie",ja:"アップルパイ",desc:"사과, 시나몬, 버터 크러스트",flavor:"달콤, 스파이시"}
]},
"KOR":{n:"대한민국",en:"South Korea",f:"🇰🇷",dishes:[
  {ko:"김치찌개",en:"Kimchi Jjigae",ja:"キムチチゲ",desc:"김치, 돼지고기, 두부",flavor:"맵고 신, 감칠맛"},
  {ko:"불고기",en:"Bulgogi",ja:"プルコギ",desc:"양념 소고기, 간장, 배",flavor:"달콤짭짤"},
  {ko:"비빔밥",en:"Bibimbap",ja:"ビビンバ",desc:"밥, 나물, 고추장, 계란",flavor:"매콤, 고소"},
  {ko:"떡볶이",en:"Tteokbokki",ja:"トッポッキ",desc:"떡, 고추장, 어묵",flavor:"매콤달콤"},
  {ko:"삼겹살",en:"Samgyeopsal",ja:"サムギョプサル",desc:"돼지 삼겹살 구이, 쌈",flavor:"고소, 짭짤"}
]},
"JPN":{n:"일본",en:"Japan",f:"🇯🇵",dishes:[
  {ko:"스시",en:"Sushi",ja:"寿司",desc:"식초밥, 생선회",flavor:"신선, 감칠맛"},
  {ko:"라멘",en:"Ramen",ja:"ラーメン",desc:"면, 돈코츠/미소/쇼유 국물",flavor:"감칠맛, 깊은맛"},
  {ko:"돈카츠",en:"Tonkatsu",ja:"とんかつ",desc:"돼지고기 튀김, 소스",flavor:"바삭, 고소"},
  {ko:"타코야키",en:"Takoyaki",ja:"たこ焼き",desc:"문어, 반죽, 소스, 가쓰오부시",flavor:"짭짤, 감칠맛"},
  {ko:"우동",en:"Udon",ja:"うどん",desc:"두꺼운 면, 다시 국물",flavor:"담백, 감칠맛"}
]},
"CHN":{n:"중국",en:"China",f:"🇨🇳",dishes:[
  {ko:"마파두부",en:"Mapo Tofu",ja:"麻婆豆腐",desc:"두부, 두반장, 산초",flavor:"매콤, 마라"},
  {ko:"베이징 덕",en:"Peking Duck",ja:"北京ダック",desc:"오리구이, 전병, 파",flavor:"바삭, 고소"},
  {ko:"딤섬",en:"Dim Sum",ja:"点心",desc:"만두, 하가우, 샤오마이",flavor:"다양, 감칠맛"},
  {ko:"훠궈",en:"Hot Pot",ja:"火鍋",desc:"마라 국물, 다양한 재료 샤부샤부",flavor:"마라, 얼얼"},
  {ko:"볶음밥",en:"Fried Rice",ja:"チャーハン",desc:"밥, 계란, 채소, 간장",flavor:"고소, 짭짤"}
]},
"IND":{n:"인도",en:"India",f:"🇮🇳",dishes:[
  {ko:"버터 치킨",en:"Butter Chicken",ja:"バターチキン",desc:"닭고기, 토마토 크림 카레",flavor:"크리미, 스파이시"},
  {ko:"비리야니",en:"Biryani",ja:"ビリヤニ",desc:"바스마티쌀, 향신료, 고기",flavor:"향긋, 스파이시"},
  {ko:"사모사",en:"Samosa",ja:"サモサ",desc:"감자, 완두콩, 튀김 반죽",flavor:"바삭, 스파이시"},
  {ko:"난",en:"Naan",ja:"ナン",desc:"탄두르 화덕 빵",flavor:"담백, 버터향"},
  {ko:"탈리",en:"Thali",ja:"ターリー",desc:"밥, 달, 채소, 처트니 세트",flavor:"다양한 맛의 조화"}
]},
"ITA":{n:"이탈리아",en:"Italy",f:"🇮🇹",dishes:[
  {ko:"파스타 카르보나라",en:"Carbonara",ja:"カルボナーラ",desc:"스파게티, 계란, 판체타, 페코리노",flavor:"고소, 크리미"},
  {ko:"피자 마르게리타",en:"Pizza Margherita",ja:"ピッツァ マルゲリータ",desc:"토마토, 모차렐라, 바질",flavor:"심플, 토마토산미"},
  {ko:"리소토",en:"Risotto",ja:"リゾット",desc:"아르보리오쌀, 파르메산, 와인",flavor:"크리미, 감칠맛"},
  {ko:"젤라토",en:"Gelato",ja:"ジェラート",desc:"우유, 설탕, 다양한 맛",flavor:"달콤, 부드러움"}
]},
"FRA":{n:"프랑스",en:"France",f:"🇫🇷",dishes:[
  {ko:"크루아상",en:"Croissant",ja:"クロワッサン",desc:"버터, 밀가루, 층층이 반죽",flavor:"버터향, 바삭"},
  {ko:"라따뚜이",en:"Ratatouille",ja:"ラタトゥイユ",desc:"가지, 주키니, 토마토, 허브",flavor:"신선, 허브향"},
  {ko:"부르기뇽",en:"Boeuf Bourguignon",ja:"ブフ・ブルギニョン",desc:"소고기, 레드와인, 채소",flavor:"깊은맛, 풍부"},
  {ko:"에스카르고",en:"Escargot",ja:"エスカルゴ",desc:"달팽이, 마늘버터, 파슬리",flavor:"버터, 마늘향"}
]},
"MEX":{n:"멕시코",en:"Mexico",f:"🇲🇽",dishes:[
  {ko:"타코",en:"Taco",ja:"タコス",desc:"옥수수 또르티야, 고기, 살사",flavor:"매콤, 신선"},
  {ko:"구아카몰레",en:"Guacamole",ja:"ワカモレ",desc:"아보카도, 라임, 고수, 양파",flavor:"크리미, 상큼"},
  {ko:"엔칠라다",en:"Enchilada",ja:"エンチラーダ",desc:"또르티야 말이, 칠리소스, 치즈",flavor:"매콤, 치즈"},
  {ko:"몰레",en:"Mole",ja:"モーレ",desc:"칠리, 초콜릿, 향신료 소스",flavor:"복합, 스파이시"}
]},
"THA":{n:"태국",en:"Thailand",f:"🇹🇭",dishes:[
  {ko:"팟타이",en:"Pad Thai",ja:"パッタイ",desc:"쌀면, 새우, 땅콩, 라임",flavor:"달콤짭짤, 새콤"},
  {ko:"똠얌꿍",en:"Tom Yum Goong",ja:"トムヤムクン",desc:"새우, 레몬그라스, 라임잎",flavor:"시고 매운, 향긋"},
  {ko:"그린커리",en:"Green Curry",ja:"グリーンカレー",desc:"코코넛밀크, 그린칠리, 바질",flavor:"크리미, 매콤"},
  {ko:"카오팟",en:"Khao Pad",ja:"カオパッド",desc:"볶음밥, 계란, 라임",flavor:"고소, 담백"}
]},
"VNM":{n:"베트남",en:"Vietnam",f:"🇻🇳",dishes:[
  {ko:"쌀국수(퍼)",en:"Pho",ja:"フォー",desc:"쌀면, 소고기/닭, 허브",flavor:"담백, 깊은맛"},
  {ko:"반미",en:"Banh Mi",ja:"バインミー",desc:"바게트, 고기, 절임채소, 고수",flavor:"바삭, 신선"},
  {ko:"분짜",en:"Bun Cha",ja:"ブンチャー",desc:"쌀면, 숯불고기, 느억맘",flavor:"달콤짭짤, 훈연"}
]},
"TUR":{n:"튀르키예",en:"Türkiye",f:"🇹🇷",dishes:[
  {ko:"케밥",en:"Kebab",ja:"ケバブ",desc:"양고기/닭고기 구이, 빵",flavor:"스모키, 짭짤"},
  {ko:"바클라바",en:"Baklava",ja:"バクラヴァ",desc:"필로 반죽, 견과류, 시럽",flavor:"달콤, 바삭"},
  {ko:"메네멘",en:"Menemen",ja:"メネメン",desc:"토마토, 고추, 계란 스크램블",flavor:"토마토, 짭짤"},
  {ko:"이스켄데르 케밥",en:"Iskender Kebab",ja:"イスケンデルケバブ",desc:"돈너, 요거트, 토마토소스, 빵",flavor:"풍부, 크리미"}
]},
"DEU":{n:"독일",en:"Germany",f:"🇩🇪",dishes:[
  {ko:"소시지(브라트부르스트)",en:"Bratwurst",ja:"ブラートヴルスト",desc:"돼지고기 소시지, 머스타드",flavor:"짭짤, 스모키"},
  {ko:"슈니첼",en:"Schnitzel",ja:"シュニッツェル",desc:"돈까스, 레몬",flavor:"바삭, 고소"},
  {ko:"프레첼",en:"Pretzel",ja:"プレッツェル",desc:"밀가루 반죽, 소금",flavor:"짭짤, 쫄깃"}
]},
"ESP":{n:"스페인",en:"Spain",f:"🇪🇸",dishes:[
  {ko:"파에야",en:"Paella",ja:"パエリア",desc:"쌀, 해산물/고기, 사프란",flavor:"감칠맛, 향긋"},
  {ko:"타파스",en:"Tapas",ja:"タパス",desc:"다양한 소량 요리",flavor:"다양"},
  {ko:"가스파초",en:"Gazpacho",ja:"ガスパチョ",desc:"토마토, 오이, 마늘 냉수프",flavor:"상큼, 신선"},
  {ko:"하몽",en:"Jamón",ja:"ハモン",desc:"이베리코 돼지 생햄",flavor:"짭짤, 고소"}
]},
"GBR":{n:"영국",en:"United Kingdom",f:"🇬🇧",dishes:[
  {ko:"피시앤칩스",en:"Fish and Chips",ja:"フィッシュ&チップス",desc:"대구 튀김, 감자튀김",flavor:"바삭, 짭짤"},
  {ko:"풀 잉글리시 브렉퍼스트",en:"Full English Breakfast",ja:"フルイングリッシュ",desc:"계란, 베이컨, 소시지, 빈",flavor:"풍성, 짭짤"},
  {ko:"셰퍼드 파이",en:"Shepherd's Pie",ja:"シェパーズパイ",desc:"양고기, 매쉬드포테이토",flavor:"고소, 감칠맛"}
]},
"GRC":{n:"그리스",en:"Greece",f:"🇬🇷",dishes:[
  {ko:"무사카",en:"Moussaka",ja:"ムサカ",desc:"가지, 다진고기, 베샤멜",flavor:"고소, 감칠맛"},
  {ko:"수블라키",en:"Souvlaki",ja:"スブラキ",desc:"꼬치구이, 피타빵, 차치키",flavor:"허브, 레몬"},
  {ko:"그리스 샐러드",en:"Greek Salad",ja:"グリークサラダ",desc:"토마토, 올리브, 페타치즈",flavor:"상큼, 짭짤"}
]},
"BRA":{n:"브라질",en:"Brazil",f:"🇧🇷",dishes:[
  {ko:"슈하스코",en:"Churrasco",ja:"シュラスコ",desc:"숯불 고기구이, 소금",flavor:"스모키, 짭짤"},
  {ko:"페이조아다",en:"Feijoada",ja:"フェイジョアーダ",desc:"검은콩, 돼지고기 스튜",flavor:"감칠맛, 풍부"},
  {ko:"아사이볼",en:"Açaí Bowl",ja:"アサイーボウル",desc:"아사이베리, 과일, 그래놀라",flavor:"달콤, 상큼"}
]},
"ARG":{n:"아르헨티나",en:"Argentina",f:"🇦🇷",dishes:[
  {ko:"아사도",en:"Asado",ja:"アサード",desc:"숯불 소고기 구이",flavor:"스모키, 짭짤"},
  {ko:"엠파나다",en:"Empanada",ja:"エンパナーダ",desc:"고기/치즈 만두 파이",flavor:"고소, 짭짤"},
  {ko:"미라네사",en:"Milanesa",ja:"ミラネサ",desc:"빵가루 입힌 소고기 커틀릿",flavor:"바삭, 고소"}
]},
"RUS":{n:"러시아",en:"Russia",f:"🇷🇺",dishes:[
  {ko:"보르시치",en:"Borscht",ja:"ボルシチ",desc:"비트, 양배추, 사워크림",flavor:"새콤, 감칠맛"},
  {ko:"블리니",en:"Blini",ja:"ブリヌイ",desc:"메밀 팬케이크, 캐비어/사워크림",flavor:"담백, 고소"},
  {ko:"펠메니",en:"Pelmeni",ja:"ペリメニ",desc:"고기 만두, 사워크림",flavor:"감칠맛, 크리미"}
]},
"EGY":{n:"이집트",en:"Egypt",f:"🇪🇬",dishes:[
  {ko:"코샤리",en:"Koshari",ja:"コシャリ",desc:"파스타, 쌀, 렌틸콩, 토마토소스",flavor:"짭짤, 토마토"},
  {ko:"팔라펠",en:"Falafel",ja:"ファラフェル",desc:"병아리콩 튀김",flavor:"바삭, 고소"},
  {ko:"풀메다메스",en:"Ful Medames",ja:"フルメダメス",desc:"잠두콩, 레몬, 올리브오일",flavor:"고소, 레몬"}
]},
"MAR":{n:"모로코",en:"Morocco",f:"🇲🇦",dishes:[
  {ko:"타진",en:"Tagine",ja:"タジン",desc:"고기, 과일, 향신료 스튜",flavor:"달콤짭짤, 향긋"},
  {ko:"쿠스쿠스",en:"Couscous",ja:"クスクス",desc:"세몰리나, 채소, 고기",flavor:"담백, 향긋"},
  {ko:"파스틸라",en:"Pastilla",ja:"パスティラ",desc:"파이, 비둘기고기/닭, 아몬드, 설탕",flavor:"달콤짭짤"}
]},
"NGA":{n:"나이지리아",en:"Nigeria",f:"🇳🇬",dishes:[
  {ko:"졸로프 라이스",en:"Jollof Rice",ja:"ジョロフライス",desc:"토마토, 쌀, 향신료",flavor:"매콤, 토마토"},
  {ko:"수야",en:"Suya",ja:"スヤ",desc:"매콤한 꼬치구이",flavor:"스파이시, 스모키"},
  {ko:"에구시 수프",en:"Egusi Soup",ja:"エグシスープ",desc:"멜론씨, 시금치, 고기",flavor:"고소, 감칠맛"}
]},
"ETH":{n:"에티오피아",en:"Ethiopia",f:"🇪🇹",dishes:[
  {ko:"인제라와 와트",en:"Injera & Wat",ja:"インジェラ＆ワット",desc:"텃 발효빵, 매운 스튜",flavor:"신맛, 매콤"},
  {ko:"키트포",en:"Kitfo",ja:"キトフォ",desc:"양념 생고기 타르타르",flavor:"매콤, 버터향"},
  {ko:"도로 와트",en:"Doro Wat",ja:"ドロワット",desc:"닭고기, 베르베레 향신료, 계란",flavor:"매콤, 깊은맛"}
]},
"ZAF":{n:"남아프리카",en:"South Africa",f:"🇿🇦",dishes:[
  {ko:"브라이",en:"Braai",ja:"ブラーイ",desc:"숯불 바비큐, 보어워스 소시지",flavor:"스모키, 짭짤"},
  {ko:"보보티",en:"Bobotie",ja:"ボボティ",desc:"카레 다진고기, 계란 커스터드",flavor:"달콤스파이시"},
  {ko:"빌통",en:"Biltong",ja:"ビルトン",desc:"건조 양념 고기",flavor:"짭짤, 풍미"}
]},
"AUS":{n:"호주",en:"Australia",f:"🇦🇺",dishes:[
  {ko:"미트파이",en:"Meat Pie",ja:"ミートパイ",desc:"다진고기, 그레이비, 파이",flavor:"짭짤, 고소"},
  {ko:"베지마이트 토스트",en:"Vegemite Toast",ja:"ベジマイトトースト",desc:"효모 추출물, 버터, 토스트",flavor:"짭짤, 감칠맛"},
  {ko:"파블로바",en:"Pavlova",ja:"パブロヴァ",desc:"머랭, 크림, 열대과일",flavor:"달콤, 상큼"}
]},
"IDN":{n:"인도네시아",en:"Indonesia",f:"🇮🇩",dishes:[
  {ko:"나시고렝",en:"Nasi Goreng",ja:"ナシゴレン",desc:"볶음밥, 새우, 계란, 삼발",flavor:"매콤, 감칠맛"},
  {ko:"사테",en:"Satay",ja:"サテ",desc:"꼬치구이, 땅콩소스",flavor:"고소, 달콤짭짤"},
  {ko:"렌당",en:"Rendang",ja:"ルンダン",desc:"소고기, 코코넛, 향신료 장조림",flavor:"깊은맛, 스파이시"}
]},
"MYS":{n:"말레이시아",en:"Malaysia",f:"🇲🇾",dishes:[
  {ko:"나시르막",en:"Nasi Lemak",ja:"ナシレマッ",desc:"코코넛밥, 삼발, 멸치, 땅콩",flavor:"고소, 매콤"},
  {ko:"락사",en:"Laksa",ja:"ラクサ",desc:"코코넛커리 쌀면",flavor:"크리미, 스파이시"},
  {ko:"차르퀘이떼오",en:"Char Kway Teow",ja:"チャークイティオ",desc:"볶음면, 새우, 조개, 숙주",flavor:"스모키, 짭짤"}
]},
"PHL":{n:"필리핀",en:"Philippines",f:"🇵🇭",dishes:[
  {ko:"아도보",en:"Adobo",ja:"アドボ",desc:"닭/돼지, 간장, 식초, 마늘",flavor:"짭짤, 새콤"},
  {ko:"시니강",en:"Sinigang",ja:"シニガン",desc:"타마린드 신맛 수프, 고기/해산물",flavor:"새콤, 감칠맛"},
  {ko:"레촌",en:"Lechon",ja:"レチョン",desc:"통돼지 구이",flavor:"바삭, 짭짤"}
]},
"PAK":{n:"파키스탄",en:"Pakistan",f:"🇵🇰",dishes:[
  {ko:"니하리",en:"Nihari",ja:"ニハリ",desc:"소고기 사골 스튜, 향신료",flavor:"깊은맛, 스파이시"},
  {ko:"비리야니",en:"Biryani",ja:"ビリヤニ",desc:"바스마티쌀, 양고기, 향신료",flavor:"향긋, 풍부"},
  {ko:"차파티",en:"Chapati",ja:"チャパティ",desc:"통밀 납작빵",flavor:"담백, 고소"}
]},
"IRN":{n:"이란",en:"Iran",f:"🇮🇷",dishes:[
  {ko:"체로 케밥",en:"Chelow Kebab",ja:"チェロウケバブ",desc:"사프란밥, 양고기/닭 꼬치",flavor:"향긋, 스모키"},
  {ko:"고르메 사브지",en:"Ghormeh Sabzi",ja:"ゴルメサブジ",desc:"허브 스튜, 강낭콩, 라임",flavor:"허브, 새콤"},
  {ko:"타흐디그",en:"Tahdig",ja:"タフディグ",desc:"바삭한 밥 누룽지, 사프란",flavor:"바삭, 향긋"}
]},
"SAU":{n:"사우디아라비아",en:"Saudi Arabia",f:"🇸🇦",dishes:[
  {ko:"카브사",en:"Kabsa",ja:"カブサ",desc:"향신료밥, 양고기/닭",flavor:"향긋, 감칠맛"},
  {ko:"무타박",en:"Mutabbaq",ja:"ムタバク",desc:"속채운 팬케이크, 고기",flavor:"짭짤, 바삭"},
  {ko:"마르꾸끄",en:"Markook",ja:"マルクーク",desc:"얇은 납작빵",flavor:"담백"}
]},
"ISR":{n:"이스라엘",en:"Israel",f:"🇮🇱",dishes:[
  {ko:"후무스",en:"Hummus",ja:"フムス",desc:"병아리콩, 타히니, 레몬",flavor:"고소, 크리미"},
  {ko:"샤크슈카",en:"Shakshuka",ja:"シャクシュカ",desc:"토마토소스에 계란 포치",flavor:"토마토, 스파이시"},
  {ko:"팔라펠",en:"Falafel",ja:"ファラフェル",desc:"병아리콩 튀김, 타히니",flavor:"바삭, 고소"}
]},
"LBN":{n:"레바논",en:"Lebanon",f:"🇱🇧",dishes:[
  {ko:"타불레",en:"Tabbouleh",ja:"タブーレ",desc:"파슬리, 불구르, 토마토, 레몬",flavor:"상큼, 허브"},
  {ko:"키베",en:"Kibbeh",ja:"キッベ",desc:"불구르, 다진양고기 크로켓",flavor:"스파이시, 고소"},
  {ko:"만아키시",en:"Manakish",ja:"マナキーシュ",desc:"자타르/치즈 토핑 빵",flavor:"허브, 짭짤"}
]},
"POL":{n:"폴란드",en:"Poland",f:"🇵🇱",dishes:[
  {ko:"피에로기",en:"Pierogi",ja:"ピエロギ",desc:"감자/치즈/고기 만두",flavor:"고소, 담백"},
  {ko:"비고스",en:"Bigos",ja:"ビゴス",desc:"양배추, 고기 스튜",flavor:"새콤, 감칠맛"},
  {ko:"주렉",en:"Żurek",ja:"ジューレク",desc:"호밀 발효 수프, 소시지, 계란",flavor:"새콤, 감칠맛"}
]},
"PER":{n:"페루",en:"Peru",f:"🇵🇪",dishes:[
  {ko:"세비체",en:"Ceviche",ja:"セビーチェ",desc:"생선, 라임, 양파, 고추",flavor:"상큼, 매콤"},
  {ko:"로모 살타도",en:"Lomo Saltado",ja:"ロモサルタード",desc:"소고기, 양파, 감자, 간장",flavor:"짭짤, 중국풍"},
  {ko:"안티쿠초",en:"Anticucho",ja:"アンティクーチョ",desc:"소 심장 꼬치구이",flavor:"스모키, 매콤"}
]},
"COL":{n:"콜롬비아",en:"Colombia",f:"🇨🇴",dishes:[
  {ko:"반데하 파이사",en:"Bandeja Paisa",ja:"バンデハパイサ",desc:"콩, 밥, 고기, 계란, 아보카도",flavor:"풍성, 짭짤"},
  {ko:"아레파",en:"Arepa",ja:"アレパ",desc:"옥수수빵, 치즈/고기",flavor:"고소, 담백"}
]},
"CAN":{n:"캐나다",en:"Canada",f:"🇨🇦",dishes:[
  {ko:"푸틴",en:"Poutine",ja:"プーティン",desc:"감자튀김, 그레이비, 치즈커드",flavor:"짭짤, 치즈"},
  {ko:"메이플시럽 팬케이크",en:"Maple Syrup Pancakes",ja:"メープルシロップパンケーキ",desc:"팬케이크, 메이플시럽",flavor:"달콤"},
  {ko:"나나이모 바",en:"Nanaimo Bar",ja:"ナナイモバー",desc:"초콜릿, 커스터드, 코코넛",flavor:"달콤, 리치"}
]},
"SWE":{n:"스웨덴",en:"Sweden",f:"🇸🇪",dishes:[
  {ko:"미트볼",en:"Swedish Meatballs",ja:"スウェーデンミートボール",desc:"고기완자, 크림소스, 링곤베리",flavor:"고소, 달콤짭짤"},
  {ko:"그라브락스",en:"Gravlax",ja:"グラブラクス",desc:"소금절임 연어, 딜",flavor:"짭짤, 허브"}
]},
"JOR":{n:"요르단",en:"Jordan",f:"🇯🇴",dishes:[
  {ko:"만사프",en:"Mansaf",ja:"マンサフ",desc:"양고기, 요거트소스, 밥",flavor:"크리미, 감칠맛"},
  {ko:"크나페",en:"Knafeh",ja:"クナーフェ",desc:"치즈, 세몰리나, 시럽",flavor:"달콤, 치즈"}
]},
"NGR":{n:"헝가리",en:"Hungary",f:"🇭🇺",dishes:[
  {ko:"굴라쉬",en:"Goulash",ja:"グーラッシュ",desc:"소고기, 파프리카, 감자 스튜",flavor:"파프리카, 감칠맛"}
]},
"HUN":{n:"헝가리",en:"Hungary",f:"🇭🇺",dishes:[
  {ko:"굴라쉬",en:"Goulash",ja:"グーラッシュ",desc:"소고기, 파프리카, 감자 스튜",flavor:"파프리카, 감칠맛"},
  {ko:"랑고쉬",en:"Langos",ja:"ランゴシュ",desc:"튀긴 빵, 사워크림, 치즈",flavor:"바삭, 짭짤"}
]},
"PRT":{n:"포르투갈",en:"Portugal",f:"🇵🇹",dishes:[
  {ko:"파스텔 드 나타",en:"Pastel de Nata",ja:"パステル・デ・ナタ",desc:"에그타르트, 시나몬",flavor:"달콤, 바삭"},
  {ko:"바칼랴우",en:"Bacalhau",ja:"バカリャウ",desc:"소금 대구, 감자, 올리브오일",flavor:"짭짤, 고소"},
  {ko:"프란세지냐",en:"Francesinha",ja:"フランセジーニャ",desc:"샌드위치, 치즈, 맥주소스",flavor:"풍부, 짭짤"}
]},
"NZL":{n:"뉴질랜드",en:"New Zealand",f:"🇳🇿",dishes:[
  {ko:"행이",en:"Hangi",ja:"ハンギ",desc:"땅 속 전통 구이, 고기/채소",flavor:"스모키, 담백"},
  {ko:"파블로바",en:"Pavlova",ja:"パブロヴァ",desc:"머랭, 크림, 키위",flavor:"달콤, 상큼"}
]},
"BGD":{n:"방글라데시",en:"Bangladesh",f:"🇧🇩",dishes:[
  {ko:"일리시 마흐",en:"Ilish Mach",ja:"イリシュマーチ",desc:"힐사 생선 카레, 머스타드",flavor:"매콤, 머스타드"},
  {ko:"비리야니",en:"Biryani",ja:"ビリヤニ",desc:"바스마티쌀, 양고기",flavor:"향긋, 스파이시"}
]},
"LKA":{n:"스리랑카",en:"Sri Lanka",f:"🇱🇰",dishes:[
  {ko:"라이스 앤 커리",en:"Rice & Curry",ja:"ライス＆カレー",desc:"밥, 다양한 커리, 삼볼",flavor:"스파이시, 코코넛"},
  {ko:"호퍼",en:"Hoppers",ja:"ホッパー",desc:"쌀가루 크레이프, 계란",flavor:"담백, 바삭"}
]},
"NPL":{n:"네팔",en:"Nepal",f:"🇳🇵",dishes:[
  {ko:"달밧",en:"Dal Bhat",ja:"ダルバート",desc:"렌틸 수프, 밥, 채소",flavor:"담백, 스파이시"},
  {ko:"모모",en:"Momo",ja:"モモ",desc:"티베트식 만두, 처트니",flavor:"감칠맛, 매콤"}
]},
"MMR":{n:"미얀마",en:"Myanmar",f:"🇲🇲",dishes:[
  {ko:"모힝가",en:"Mohinga",ja:"モヒンガ",desc:"메기국수, 바나나줄기",flavor:"감칠맛, 생강"},
  {ko:"떼떡",en:"Tea Leaf Salad",ja:"ティーリーフサラダ",desc:"발효 찻잎, 땅콩, 마늘",flavor:"감칠맛, 고소"}
]},
"KHM":{n:"캄보디아",en:"Cambodia",f:"🇰🇭",dishes:[
  {ko:"아목",en:"Amok",ja:"アモック",desc:"코코넛커리 생선, 바나나잎",flavor:"크리미, 향긋"},
  {ko:"록락",en:"Lok Lak",ja:"ロクラック",desc:"소고기볶음, 후추 라임 소스",flavor:"짭짤, 페퍼"}
]},
"KEN":{n:"케냐",en:"Kenya",f:"🇰🇪",dishes:[
  {ko:"우갈리 & 니아마촘마",en:"Ugali & Nyama Choma",ja:"ウガリ＆ニャマチョマ",desc:"옥수수떡, 숯불고기",flavor:"담백, 스모키"},
  {ko:"차파티",en:"Chapati",ja:"チャパティ",desc:"납작빵, 콩스튜",flavor:"고소, 담백"}
]},
"GHA":{n:"가나",en:"Ghana",f:"🇬🇭",dishes:[
  {ko:"졸로프 라이스",en:"Jollof Rice",ja:"ジョロフライス",desc:"토마토, 쌀, 향신료",flavor:"매콤, 토마토"},
  {ko:"와체",en:"Waakye",ja:"ワーチェ",desc:"콩밥, 스파게티, 소스",flavor:"감칠맛, 매콤"}
]},
"CUB":{n:"쿠바",en:"Cuba",f:"🇨🇺",dishes:[
  {ko:"로파비에하",en:"Ropa Vieja",ja:"ロパビエハ",desc:"찢은 소고기, 토마토, 피망",flavor:"토마토, 감칠맛"},
  {ko:"쿠바 샌드위치",en:"Cuban Sandwich",ja:"キューバサンドイッチ",desc:"돼지고기, 햄, 치즈, 피클",flavor:"짭짤, 신선"}
]},
"JAM":{n:"자메이카",en:"Jamaica",f:"🇯🇲",dishes:[
  {ko:"저크치킨",en:"Jerk Chicken",ja:"ジャークチキン",desc:"스파이시 마리네이드 닭구이",flavor:"매콤, 스모키"},
  {ko:"아키앤솔트피시",en:"Ackee & Saltfish",ja:"アキー＆ソルトフィッシュ",desc:"아키 열매, 소금대구",flavor:"짭짤, 크리미"}
]},
"DNK":{n:"덴마크",en:"Denmark",f:"🇩🇰",dishes:[
  {ko:"스뫼레브뢰",en:"Smørrebrød",ja:"スモーブロー",desc:"오픈 샌드위치, 다양한 토핑",flavor:"짭짤, 신선"},
  {ko:"대니시 페이스트리",en:"Danish Pastry",ja:"デニッシュ",desc:"버터 패스트리, 크림",flavor:"달콤, 버터향"}
]},
"CHE":{n:"스위스",en:"Switzerland",f:"🇨🇭",dishes:[
  {ko:"퐁뒤",en:"Fondue",ja:"フォンデュ",desc:"녹인 치즈, 빵",flavor:"치즈, 고소"},
  {ko:"라클렛",en:"Raclette",ja:"ラクレット",desc:"녹인 치즈, 감자, 피클",flavor:"치즈, 짭짤"}
]},
"AUT":{n:"오스트리아",en:"Austria",f:"🇦🇹",dishes:[
  {ko:"비너 슈니첼",en:"Wiener Schnitzel",ja:"ウィーナーシュニッツェル",desc:"송아지 커틀릿, 레몬",flavor:"바삭, 고소"},
  {ko:"자허토르테",en:"Sachertorte",ja:"ザッハトルテ",desc:"초콜릿 케이크, 살구잼",flavor:"달콤, 초콜릿"}
]},
"NOR":{n:"노르웨이",en:"Norway",f:"🇳🇴",dishes:[
  {ko:"훈제연어",en:"Smoked Salmon",ja:"スモークサーモン",desc:"연어, 훈연",flavor:"짭짤, 스모키"},
  {ko:"포리코",en:"Fårikål",ja:"フォーリコール",desc:"양고기, 양배추 스튜",flavor:"담백, 감칠맛"}
]},
"FIN":{n:"핀란드",en:"Finland",f:"🇫🇮",dishes:[
  {ko:"카렐리안 파이",en:"Karelian Pie",ja:"カレリアンパイ",desc:"호밀 크러스트, 쌀 필링, 에그버터",flavor:"담백, 고소"},
  {ko:"순록 스튜",en:"Reindeer Stew",ja:"トナカイシチュー",desc:"순록고기, 으깬감자, 링곤베리",flavor:"게임, 달콤짭짤"}
]},
"CZE":{n:"체코",en:"Czechia",f:"🇨🇿",dishes:[
  {ko:"스비치코바",en:"Svíčková",ja:"スヴィーチコヴァー",desc:"소고기, 크림소스, 크네들리키",flavor:"크리미, 감칠맛"},
  {ko:"뜨르들로",en:"Trdelník",ja:"トゥルデルニーク",desc:"구운 반죽, 설탕, 시나몬",flavor:"달콤, 시나몬"}
]},
"IRL":{n:"아일랜드",en:"Ireland",f:"🇮🇪",dishes:[
  {ko:"아이리시 스튜",en:"Irish Stew",ja:"アイリッシュシチュー",desc:"양고기, 감자, 양파",flavor:"담백, 감칠맛"},
  {ko:"소다빵",en:"Soda Bread",ja:"ソーダブレッド",desc:"밀가루, 버터밀크, 베이킹소다",flavor:"담백, 고소"}
]},
"MNG":{n:"몽골",en:"Mongolia",f:"🇲🇳",dishes:[
  {ko:"부즈",en:"Buuz",ja:"ボーズ",desc:"양고기 찐만두",flavor:"감칠맛, 고소"},
  {ko:"수테차이",en:"Suutei Tsai",ja:"スーテイツァイ",desc:"소금 밀크티",flavor:"짭짤, 고소"}
]},
"SGP":{n:"싱가포르",en:"Singapore",f:"🇸🇬",dishes:[
  {ko:"칠리크랩",en:"Chilli Crab",ja:"チリクラブ",desc:"게, 칠리토마토소스",flavor:"매콤달콤"},
  {ko:"하이난 치킨라이스",en:"Hainanese Chicken Rice",ja:"海南チキンライス",desc:"삶은 닭, 생강밥",flavor:"담백, 생강"},
  {ko:"락사",en:"Laksa",ja:"ラクサ",desc:"코코넛커리 면",flavor:"크리미, 스파이시"}
]},
"TWN":{n:"대만",en:"Taiwan",f:"🇹🇼",dishes:[
  {ko:"소룡포",en:"Xiao Long Bao",ja:"小籠包",desc:"육즙 만두",flavor:"감칠맛, 생강"},
  {ko:"루로우판",en:"Lu Rou Fan",ja:"ルーローファン",desc:"간장 삼겹살 덮밥",flavor:"달콤짭짤"},
  {ko:"버블티",en:"Bubble Tea",ja:"タピオカミルクティー",desc:"밀크티, 타피오카 펄",flavor:"달콤, 크리미"}
]},
"UKR":{n:"우크라이나",en:"Ukraine",f:"🇺🇦",dishes:[
  {ko:"보르시치",en:"Borscht",ja:"ボルシチ",desc:"비트, 양배추 수프",flavor:"새콤, 감칠맛"},
  {ko:"바레니키",en:"Varenyky",ja:"ヴァレーヌィキ",desc:"감자/체리 만두",flavor:"고소/달콤"}
]},
"ROM":{n:"루마니아",en:"Romania",f:"🇷🇴",dishes:[
  {ko:"사르말레",en:"Sarmale",ja:"サルマーレ",desc:"양배추쌈, 다진고기, 쌀",flavor:"새콤, 감칠맛"}
]},
"ROU":{n:"루마니아",en:"Romania",f:"🇷🇴",dishes:[
  {ko:"사르말레",en:"Sarmale",ja:"サルマーレ",desc:"양배추쌈, 다진고기, 쌀",flavor:"새콤, 감칠맛"},
  {ko:"미치",en:"Mici",ja:"ミチ",desc:"양념 다진고기 소시지",flavor:"스모키, 마늘"}
]}
};

// Color mapping for food map - based on cuisine region
const FOOD_REGIONS = {
  "동아시아": {c:"#e74c3c",countries:["CHN","JPN","KOR","TWN","MNG"]},
  "동남아시아": {c:"#e67e22",countries:["THA","VNM","IDN","MYS","PHL","KHM","MMR","SGP"]},
  "남아시아": {c:"#f39c12",countries:["IND","PAK","BGD","LKA","NPL"]},
  "중동": {c:"#27ae60",countries:["TUR","IRN","SAU","ISR","LBN","JOR","EGY","MAR"]},
  "유럽 서부": {c:"#3498db",countries:["FRA","ITA","ESP","PRT","GBR","IRL","BEL","NLD","CHE","AUT","DEU"]},
  "유럽 북부": {c:"#2980b9",countries:["SWE","NOR","FIN","DNK"]},
  "유럽 동부": {c:"#8e44ad",countries:["RUS","POL","HUN","CZE","UKR","ROU"]},
  "유럽 남부": {c:"#2c3e50",countries:["GRC"]},
  "북미": {c:"#c0392b",countries:["USA","CAN","MEX","CUB","JAM"]},
  "남미": {c:"#d35400",countries:["BRA","ARG","PER","COL"]},
  "아프리카": {c:"#16a085",countries:["NGA","ETH","ZAF","KEN","GHA"]},
  "오세아니아": {c:"#1abc9c",countries:["AUS","NZL"]}
};

function getFoodRegion(iso) {
  for (const [region, data] of Object.entries(FOOD_REGIONS)) {
    if (data.countries.includes(iso)) return {region, color: data.c};
  }
  return null;
}
