// 🎬 Movie data for World Theme Map Portal
const MOVIE_INDUSTRY = {
  "할리우드":{c:"#e74c3c",en:"Hollywood",ja:"ハリウッド"},
  "발리우드":{c:"#e67e22",en:"Bollywood",ja:"ボリウッド"},
  "누벨바그":{c:"#3498db",en:"Nouvelle Vague",ja:"ヌーヴェルヴァーグ"},
  "한류":{c:"#9b59b6",en:"Hallyu/K-Cinema",ja:"韓流"},
  "애니메이션강국":{c:"#f1c40f",en:"Animation Powerhouse",ja:"アニメ大国"},
  "네오리얼리즘":{c:"#2ecc71",en:"Neorealism",ja:"ネオレアリスモ"},
  "표현주의":{c:"#1abc9c",en:"Expressionism",ja:"表現主義"},
  "놀리우드":{c:"#16a085",en:"Nollywood",ja:"ノリウッド"},
  "다양":{c:"#95a5a6",en:"Diverse",ja:"多様"}
};

const MOVIES_DATA = {
"USA":{n:"미국",en:"United States",f:"🇺🇸",industry:"할리우드",desc:"세계 최대 영화 산업. 할리우드는 글로벌 엔터테인먼트의 중심지.",movies:[
  {ko:"대부",en:"The Godfather",ja:"ゴッドファーザー",year:1972,director:"프랜시스 포드 코폴라"},
  {ko:"쇼생크 탈출",en:"The Shawshank Redemption",ja:"ショーシャンクの空に",year:1994,director:"프랭크 다라본트"},
  {ko:"다크 나이트",en:"The Dark Knight",ja:"ダークナイト",year:2008,director:"크리스토퍼 놀란"}
]},
"KOR":{n:"대한민국",en:"South Korea",f:"🇰🇷",industry:"한류",desc:"K-시네마의 세계적 부상. 칸·아카데미 석권.",movies:[
  {ko:"기생충",en:"Parasite",ja:"パラサイト",year:2019,director:"봉준호"},
  {ko:"올드보이",en:"Oldboy",ja:"オールドボーイ",year:2003,director:"박찬욱"},
  {ko:"헤어질 결심",en:"Decision to Leave",ja:"別れる決心",year:2022,director:"박찬욱"}
]},
"JPN":{n:"일본",en:"Japan",f:"🇯🇵",industry:"애니메이션강국",desc:"세계 애니메이션의 중심. 구로사와에서 미야자키까지.",movies:[
  {ko:"7인의 사무라이",en:"Seven Samurai",ja:"七人の侍",year:1954,director:"구로사와 아키라"},
  {ko:"센과 치히로의 행방불명",en:"Spirited Away",ja:"千と千尋の神隠し",year:2001,director:"미야자키 하야오"},
  {ko:"도쿄 이야기",en:"Tokyo Story",ja:"東京物語",year:1953,director:"오즈 야스지로"}
]},
"CHN":{n:"중국",en:"China",f:"🇨🇳",industry:"다양",desc:"급성장하는 세계 2위 영화 시장. 우샤 무협에서 현대 블록버스터까지.",movies:[
  {ko:"와호장룡",en:"Crouching Tiger, Hidden Dragon",ja:"グリーン・デスティニー",year:2000,director:"이안"},
  {ko:"패왕별희",en:"Farewell My Concubine",ja:"さらば、わが愛",year:1993,director:"첸카이거"},
  {ko:"영웅",en:"Hero",ja:"HERO",year:2002,director:"장이머우"}
]},
"IND":{n:"인도",en:"India",f:"🇮🇳",industry:"발리우드",desc:"연간 제작편수 세계 1위. 발리우드 뮤지컬은 독자적 장르.",movies:[
  {ko:"세 얼간이",en:"3 Idiots",ja:"きっと、うまくいく",year:2009,director:"라즈쿠마르 히라니"},
  {ko:"바후발리",en:"Baahubali",ja:"バーフバリ",year:2015,director:"S.S. 라자모울리"},
  {ko:"RRR",en:"RRR",ja:"RRR",year:2022,director:"S.S. 라자모울리"}
]},
"FRA":{n:"프랑스",en:"France",f:"🇫🇷",industry:"누벨바그",desc:"영화의 발명국. 누벨바그는 세계 영화에 혁명적 영향.",movies:[
  {ko:"아멜리에",en:"Amélie",ja:"アメリ",year:2001,director:"장피에르 주네"},
  {ko:"네멋대로 해라",en:"Breathless",ja:"勝手にしやがれ",year:1960,director:"장뤼크 고다르"},
  {ko:"레미제라블",en:"Les Misérables",ja:"レ・ミゼラブル",year:2019,director:"라지 리"}
]},
"ITA":{n:"이탈리아",en:"Italy",f:"🇮🇹",industry:"네오리얼리즘",desc:"네오리얼리즘의 탄생지. 영화 예술의 거장들을 배출.",movies:[
  {ko:"인생은 아름다워",en:"Life Is Beautiful",ja:"ライフ・イズ・ビューティフル",year:1997,director:"로베르토 베니니"},
  {ko:"시네마 천국",en:"Cinema Paradiso",ja:"ニュー・シネマ・パラダイス",year:1988,director:"주세페 토르나토레"},
  {ko:"자전거 도둑",en:"Bicycle Thieves",ja:"自転車泥棒",year:1948,director:"비토리오 데 시카"}
]},
"DEU":{n:"독일",en:"Germany",f:"🇩🇪",industry:"표현주의",desc:"독일 표현주의에서 뉴 저먼 시네마까지. 유럽 영화의 중심.",movies:[
  {ko:"메트로폴리스",en:"Metropolis",ja:"メトロポリス",year:1927,director:"프리츠 랑"},
  {ko:"굿바이, 레닌!",en:"Good Bye, Lenin!",ja:"グッバイ、レーニン!",year:2003,director:"볼프강 베커"},
  {ko:"양철북",en:"The Tin Drum",ja:"ブリキの太鼓",year:1979,director:"폴커 슐렌도르프"}
]},
"GBR":{n:"영국",en:"United Kingdom",f:"🇬🇧",industry:"다양",desc:"셰익스피어 전통에서 본드 프랜차이즈까지. 할리우드와 밀접한 관계.",movies:[
  {ko:"해리 포터 시리즈",en:"Harry Potter",ja:"ハリー・ポッター",year:2001,director:"크리스 콜럼버스 외"},
  {ko:"트레인스포팅",en:"Trainspotting",ja:"トレインスポッティング",year:1996,director:"대니 보일"},
  {ko:"킹스 스피치",en:"The King's Speech",ja:"英国王のスピーチ",year:2010,director:"톰 후퍼"}
]},
"ESP":{n:"스페인",en:"Spain",f:"🇪🇸",industry:"다양",desc:"알모도바르를 중심으로 독자적 영화 문화 발전.",movies:[
  {ko:"판의 미로",en:"Pan's Labyrinth",ja:"パンズ・ラビリンス",year:2006,director:"기예르모 델 토로"},
  {ko:"내 어머니의 모든 것",en:"All About My Mother",ja:"オール・アバウト・マイ・マザー",year:1999,director:"페드로 알모도바르"}
]},
"MEX":{n:"멕시코",en:"Mexico",f:"🇲🇽",industry:"다양",desc:"'삼총사'(이냐리투, 쿠아론, 델토로)가 할리우드를 정복.",movies:[
  {ko:"로마",en:"Roma",ja:"ROMA/ローマ",year:2018,director:"알폰소 쿠아론"},
  {ko:"아무레스 페로스",en:"Amores Perros",ja:"アモーレス・ペロス",year:2000,director:"알레한드로 이냐리투"},
  {ko:"코코",en:"Coco",ja:"リメンバー・ミー",year:2017,director:"리 언크리치 (멕시코 배경)"}
]},
"BRA":{n:"브라질",en:"Brazil",f:"🇧🇷",industry:"다양",desc:"시네마 노보에서 현대 범죄 드라마까지.",movies:[
  {ko:"시티 오브 갓",en:"City of God",ja:"シティ・オブ・ゴッド",year:2002,director:"페르난두 메이렐리스"},
  {ko:"센트럴 스테이션",en:"Central Station",ja:"セントラル・ステーション",year:1998,director:"발테르 살레스"}
]},
"ARG":{n:"아르헨티나",en:"Argentina",f:"🇦🇷",industry:"다양",desc:"남미 영화의 리더. 아카데미 외국어영화상 2회 수상.",movies:[
  {ko:"그들 눈 속의 비밀",en:"The Secret in Their Eyes",ja:"瞳の奥の秘密",year:2009,director:"후안 호세 캄파넬라"},
  {ko:"와일드 테일즈",en:"Wild Tales",ja:"人生スイッチ",year:2014,director:"다미안 지프론"}
]},
"RUS":{n:"러시아",en:"Russia",f:"🇷🇺",industry:"다양",desc:"몽타주 이론의 발상지. 에이젠슈테인부터 타르코프스키까지.",movies:[
  {ko:"전함 포템킨",en:"Battleship Potemkin",ja:"戦艦ポチョムキン",year:1925,director:"세르게이 에이젠슈테인"},
  {ko:"스토커",en:"Stalker",ja:"ストーカー",year:1979,director:"안드레이 타르코프스키"},
  {ko:"러브리스",en:"Loveless",ja:"ラブレス",year:2017,director:"안드레이 즈뱌긴체프"}
]},
"TUR":{n:"튀르키예",en:"Türkiye",f:"🇹🇷",industry:"다양",desc:"누리 빌게 제일란 감독이 칸에서 국제적 명성 획득.",movies:[
  {ko:"겨울잠",en:"Winter Sleep",ja:"雪についての物語",year:2014,director:"누리 빌게 제일란"},
  {ko:"옛날 옛적 아나톨리아에서",en:"Once Upon a Time in Anatolia",ja:"昔々、アナトリアで",year:2011,director:"누리 빌게 제일란"}
]},
"IRN":{n:"이란",en:"Iran",f:"🇮🇷",industry:"다양",desc:"이란 뉴웨이브. 검열 속에서도 세계적 걸작 배출.",movies:[
  {ko:"씨민과 나데르의 별거",en:"A Separation",ja:"別離",year:2011,director:"아스가르 파르하디"},
  {ko:"체리 향기",en:"Taste of Cherry",ja:"桜桃の味",year:1997,director:"압바스 키아로스타미"},
  {ko:"영웅",en:"A Hero",ja:"英雄の証明",year:2021,director:"아스가르 파르하디"}
]},
"NGA":{n:"나이지리아",en:"Nigeria",f:"🇳🇬",industry:"놀리우드",desc:"연간 제작편수 세계 2위. 놀리우드는 아프리카 최대 영화산업.",movies:[
  {ko:"라이오네스",en:"Lionheart",ja:"ライオンハート",year:2018,director:"지네비에프 나지"},
  {ko:"결혼식의 파티",en:"The Wedding Party",ja:"ウェディングパーティー",year:2016,director:"케미 아데티바"}
]},
"EGY":{n:"이집트",en:"Egypt",f:"🇪🇬",industry:"다양",desc:"아랍 영화의 할리우드. 20세기 중반 아랍 세계 영화 산업 주도.",movies:[
  {ko:"카이로 역",en:"Cairo Station",ja:"カイロ中央駅",year:1958,director:"유세프 샤힌"},
  {ko:"더 블루 엘리펀트",en:"The Blue Elephant",ja:"ブルーエレファント",year:2014,director:"마르완 하메드"}
]},
"POL":{n:"폴란드",en:"Poland",f:"🇵🇱",industry:"다양",desc:"폴란드 영화학교의 전통. 키에슬로프스키의 유산.",movies:[
  {ko:"세 가지 색: 블루",en:"Three Colors: Blue",ja:"トリコロール/青の愛",year:1993,director:"크쥐시토프 키에슬로프스키"},
  {ko:"아이다",en:"Ida",ja:"イーダ",year:2013,director:"파벨 파블리코프스키"}
]},
"SWE":{n:"스웨덴",en:"Sweden",f:"🇸🇪",industry:"다양",desc:"잉마르 베리만의 나라. 북유럽 느와르의 원조.",movies:[
  {ko:"제7의 봉인",en:"The Seventh Seal",ja:"第七の封印",year:1957,director:"잉마르 베리만"},
  {ko:"밀레니엄: 여자를 증오한 남자들",en:"The Girl with the Dragon Tattoo",ja:"ミレニアム ドラゴン・タトゥーの女",year:2009,director:"닐스 아르덴 오플레브"}
]},
"DNK":{n:"덴마크",en:"Denmark",f:"🇩🇰",industry:"다양",desc:"도그마 95 운동의 발상지. 라스 폰 트리에의 영향력.",movies:[
  {ko:"사냥",en:"The Hunt",ja:"偽りなき者",year:2012,director:"토마스 빈터베르그"},
  {ko:"어나더 라운드",en:"Another Round",ja:"アナザーラウンド",year:2020,director:"토마스 빈터베르그"}
]},
"AUS":{n:"호주",en:"Australia",f:"🇦🇺",industry:"다양",desc:"뉴 오스트레일리안 웨이브. 조지 밀러, 피터 위어.",movies:[
  {ko:"매드 맥스: 분노의 도로",en:"Mad Max: Fury Road",ja:"マッドマックス 怒りのデス・ロード",year:2015,director:"조지 밀러"},
  {ko:"프리실라",en:"Priscilla, Queen of the Desert",ja:"プリシラ",year:1994,director:"스테판 엘리엇"}
]},
"CAN":{n:"캐나다",en:"Canada",f:"🇨🇦",industry:"다양",desc:"드니 빌뇌브, 데이비드 크로넨버그 배출.",movies:[
  {ko:"인세디어리",en:"Incendies",ja:"灼熱の魂",year:2010,director:"드니 빌뇌브"},
  {ko:"라스트 나이트",en:"Last Night",ja:"ラストナイト",year:1998,director:"돈 매켈러"}
]},
"THA":{n:"태국",en:"Thailand",f:"🇹🇭",industry:"다양",desc:"아피찻퐁 위라세타쿤이 칸 황금종려상 수상.",movies:[
  {ko:"엉클 분미",en:"Uncle Boonmee Who Can Recall His Past Lives",ja:"ブンミおじさんの森",year:2010,director:"아피찻퐁 위라세타쿤"},
  {ko:"옹박",en:"Ong-Bak",ja:"マッハ!",year:2003,director:"프라차 핑케우"}
]},
"IDN":{n:"인도네시아",en:"Indonesia",f:"🇮🇩",industry:"다양",desc:"더 레이드로 세계적 주목. 호러 장르 강세.",movies:[
  {ko:"더 레이드",en:"The Raid",ja:"ザ・レイド",year:2011,director:"가렛 에반스"},
  {ko:"사탄의 숭배자",en:"Satan's Slaves",ja:"悪魔の奴隷",year:2017,director:"조코 안와르"}
]},
"TWN":{n:"대만",en:"Taiwan",f:"🇹🇼",industry:"다양",desc:"타이완 뉴시네마. 허우 샤오시엔, 에드워드 양.",movies:[
  {ko:"비정성시",en:"A City of Sadness",ja:"悲情城市",year:1989,director:"허우 샤오시엔"},
  {ko:"하나와 앨리스",en:"Yi Yi",ja:"ヤンヤン 夏の想い出",year:2000,director:"에드워드 양"}
]},
"HUN":{n:"헝가리",en:"Hungary",f:"🇭🇺",industry:"다양",desc:"사울의 아들로 아카데미 외국어영화상 수상.",movies:[
  {ko:"사울의 아들",en:"Son of Saul",ja:"サウルの息子",year:2015,director:"네메시 라슬로"}
]},
"COL":{n:"콜롬비아",en:"Colombia",f:"🇨🇴",industry:"다양",desc:"최근 국제영화제에서 주목받는 신예 감독들.",movies:[
  {ko:"새들의 노래",en:"Birds of Passage",ja:"夏の鳥",year:2018,director:"크리스티나 가예고, 치로 게라"}
]},
"NZL":{n:"뉴질랜드",en:"New Zealand",f:"🇳🇿",industry:"다양",desc:"반지의 제왕 촬영지. 피터 잭슨과 타이카 와이티티.",movies:[
  {ko:"반지의 제왕",en:"The Lord of the Rings",ja:"ロード・オブ・ザ・リング",year:2001,director:"피터 잭슨"},
  {ko:"헌트 포 더 와일더피플",en:"Hunt for the Wilderpeople",ja:"ハント・フォー・ザ・ワイルダーピープル",year:2016,director:"타이카 와이티티"}
]},
"PHL":{n:"필리핀",en:"Philippines",f:"🇵🇭",industry:"다양",desc:"독립영화 강국. 라브 디아즈의 장편 실험.",movies:[
  {ko:"마닐라 인 더 클로즈 오브 네온",en:"Manila in the Claws of Light",ja:"マニラ光る爪",year:1975,director:"리노 브로카"}
]},
"ZAF":{n:"남아프리카",en:"South Africa",f:"🇿🇦",industry:"다양",desc:"아파르트헤이트 이후 다양한 목소리. 디스트릭트 9 등.",movies:[
  {ko:"디스트릭트 9",en:"District 9",ja:"第9地区",year:2009,director:"닐 블롬캠프"},
  {ko:"추피",en:"Tsotsi",ja:"ツォツィ",year:2005,director:"개빈 후드"}
]},
"GRC":{n:"그리스",en:"Greece",f:"🇬🇷",industry:"다양",desc:"요르고스 란티모스로 현대 그리스 영화 주목.",movies:[
  {ko:"킬링 디어",en:"The Killing of a Sacred Deer",ja:"聖なる鹿殺し",year:2017,director:"요르고스 란티모스"},
  {ko:"불량한 것들",en:"Poor Things",ja:"哀れなるものたち",year:2023,director:"요르고스 란티모스"}
]},
"UKR":{n:"우크라이나",en:"Ukraine",f:"🇺🇦",industry:"다양",desc:"소련 영화 전통 위에 독자적 정체성 구축.",movies:[
  {ko:"돈바스",en:"Donbass",ja:"ドンバス",year:2018,director:"세르게이 로즈니차"}
]},
"PER":{n:"페루",en:"Peru",f:"🇵🇪",industry:"다양",desc:"클라우디아 요사 등 신진 감독 주목.",movies:[
  {ko:"젖이 쓰라리다",en:"The Milk of Sorrow",ja:"悲しみのミルク",year:2009,director:"클라우디아 요사"}
]},
"CHL":{n:"칠레",en:"Chile",f:"🇨🇱",industry:"다양",desc:"파블로 라라인 감독 등 국제적 활약.",movies:[
  {ko:"노",en:"No",ja:"NO",year:2012,director:"파블로 라라인"},
  {ko:"글로리아",en:"Gloria",ja:"グロリア",year:2013,director:"세바스티안 렐리오"}
]},
"ETH":{n:"에티오피아",en:"Ethiopia",f:"🇪🇹",industry:"다양",desc:"아프리카 독립영화의 성장. 아마하릭어 영화 산업.",movies:[
  {ko:"람",en:"Lamb",ja:"ラム",year:2015,director:"야레드 젤레케"}
]},
"VNM":{n:"베트남",en:"Vietnam",f:"🇻🇳",industry:"다양",desc:"트란 안 훙 감독의 서정적 영화 세계.",movies:[
  {ko:"그린 파파야의 향기",en:"The Scent of Green Papaya",ja:"青いパパイヤの香り",year:1993,director:"트란 안 훙"}
]}
};
