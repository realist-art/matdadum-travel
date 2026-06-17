const APP_STATE = {
  activeTab: localStorage.getItem("matdadum.activeTab") || "home",
  activeDate: "2026-06-18",
  exchangeRate: null,
  exchangeUpdatedAt: null,
  weather: null,
  weatherUpdatedAt: null,
  lastEditedCurrency: "jpy",
  routeCache: {},
};

const TRIP_DATES = ["2026-06-18", "2026-06-19", "2026-06-20", "2026-06-21"];
const FUKUOKA_COORDS = { lat: 33.5902, lon: 130.4017 };
const HOME_SUMMARY = [
  {
    title: "확정 메인 이벤트",
    text: "6월 20일 유후인 & 아프리칸 사파리",
  },
  {
    title: "숙소 체크인 핵심",
    text: "주소 · 지도 · 핀 코드 · 와이파이",
  },
  {
    title: "지금 자주 쓸 기능",
    text: "환율 · 날씨 · 집결지 · 러닝",
  },
  {
    title: "여행 중 바로 쓰는 기능",
    text: "지도 · 복사 · 탭 이동",
  },
];

const HOME_QUICK_LINKS = [
  {
    title: "6월 20일 투어 체크",
    description: "집결지, 시간, 준비물, 유후인 자유시간, 사파리 이용 포인트까지 한 번에 확인.",
    tab: "schedule",
  },
  {
    title: "환율 빠르게 보기",
    description: "1,000엔, 5,000엔, 10,000엔 버튼으로 바로 계산.",
    tab: "exchange",
  },
  {
    title: "오늘 날씨 확인",
    description: "우산 필요 여부와 러닝 추천 시간대를 함께 확인.",
    tab: "weather",
  },
  {
    title: "숙소 정보 복사",
    description: "주소, 지도, 핀 코드, 와이파이 정보를 복사 버튼으로 바로 확보.",
    tab: "stay",
  },
];

const SCHEDULE_DATA = {
  "2026-06-18": {
    label: "6월 18일 목요일",
    mood: "이동 적응 + 숙소권 산책",
    summary: "첫날은 니시진역과 숙소권 감 잡기에 집중하고 무리하게 멀리 빼지 않는 흐름으로 잡았습니다.",
    items: [
      {
        time: "오후",
        title: "숙소 체크인 및 장보기",
        description: "숙소 체크인 후 편의점, 물, 간식, 아침거리부터 먼저 정리하면 이후 일정이 훨씬 편합니다.",
      },
      {
        time: "저녁 전",
        title: "니시진 상점가 또는 숙소 주변 산책",
        description: "로컬 동네 분위기를 먼저 보고, 니시진 쪽 식당 후보를 잡아두기 좋습니다.",
      },
      {
        time: "저녁",
        title: "가벼운 첫 식사",
        description: "라멘이나 이자카야, 가볍게는 편의점+야식으로도 충분합니다. 첫날은 체력 안배가 핵심입니다.",
      },
    ],
  },
  "2026-06-19": {
    label: "6월 19일 금요일",
    mood: "시내 핵심 + 모모치권",
    summary: "오호리공원, 모모치, 후쿠오카타워, 팀랩 같은 시내 핵심 콘텐츠를 묶기 좋은 날입니다.",
    items: [
      {
        time: "오전",
        title: "오호리공원 또는 니시진 브런치",
        description: "날이 덜 더운 오전에 산책이나 브런치를 넣으면 리듬이 좋습니다.",
      },
      {
        time: "오후",
        title: "모모치 해변, 시박물관, 후쿠오카타워",
        description: "비가 오면 시박물관이나 팀랩 중심, 맑으면 해변과 타워 중심으로 움직이기 좋습니다.",
      },
      {
        time: "밤",
        title: "텐진 또는 나카스",
        description: "둘째 날 밤은 텐진, 나카스, 야타이 쪽으로 후쿠오카 시내다운 분위기를 즐기기 좋은 날입니다.",
      },
    ],
  },
  "2026-06-20": {
    label: "6월 20일 토요일",
    mood: "유후인 & 아프리칸 사파리 확정",
    summary: "이 날은 다른 버스투어 비교 없이 확정된 일일투어만 정리했습니다.",
    items: [
      {
        time: "투어명",
        title: "유후인 & 아프리칸 사파리 일일투어",
        description: "예약 기준 확정 일정입니다. 기존 버스투어 후보 비교는 제거했습니다.",
      },
      {
        time: "집결",
        title: "하카타역 치쿠시구치 오리엔탈호텔 로손 앞",
        description: "기존 예약 정보 기준 집합 08:10, 출발 08:30입니다. 실제 바우처에 적힌 최신 집합 시간을 출발 전날 밤에 한 번 더 확인해 주세요.",
        copy: "하카타역 치쿠시구치 오리엔탈호텔 로손 앞 / 08:10 집합 / 08:30 출발",
      },
      {
        time: "예상 동선",
        title: "하카타역 → 유후인 → 자유 점심 → 아프리칸 사파리 → 하카타 복귀",
        description: "상품명과 기존 안내 기준 예상 동선입니다. 세부 정차 순서와 최종 복귀 시각은 예약 내역 확인이 필요합니다.",
      },
      {
        time: "유후인",
        title: "유후인 자유시간 추천 동선",
        description: "유후인역 도착 후 유노츠보 거리 산책 → 긴린코 호수 → 카페 또는 기념품 → 점심 자유식 흐름이 가장 무난합니다. 너무 멀리 벗어나기보다 다시 집결하기 쉬운 메인 거리 중심이 안전합니다.",
      },
      {
        time: "사파리",
        title: "아프리칸 사파리 관람 포인트",
        description: "사파리존에서는 창가 쪽 자리 확보, 이동 중 촬영 준비, 동물 먹이 체험 가능 여부 현장 확인이 핵심입니다. 차량 이동형 관람이라 더위 피로도가 덜한 편입니다.",
      },
      {
        time: "점심",
        title: "점심과 자유시간 활용",
        description: "유후인 메인 거리 카페, 규카츠, 소바, 간단한 디저트 위주가 무난합니다. 사람이 많으면 웨이팅이 길어질 수 있어 목적지 1~2개 정도만 정해두는 편이 좋습니다.",
      },
      {
        time: "준비물",
        title: "준비물과 주의사항",
        description: "물, 선크림, 손선풍기, 보조배터리, 얇은 겉옷, 멀미약, 소액 현금, 투어 바우처 캡처를 준비해 두세요. 귀가가 늦어질 수 있어 숙소 복귀 교통도 함께 봐두는 편이 좋습니다.",
      },
    ],
  },
  "2026-06-21": {
    label: "6월 21일 일요일",
    mood: "체크아웃 + 마지막 정리",
    summary: "짐 정리, 기념품 정산, 공항 이동에 집중하는 날입니다.",
    items: [
      {
        time: "오전",
        title: "체크아웃 준비",
        description: "핀 코드, 열쇠 반납, 쓰레기 정리, 분실물 확인을 먼저 끝내두면 마지막 이동이 편합니다.",
      },
      {
        time: "점심 전",
        title: "기념품 정리 쇼핑",
        description: "하카타역이나 공항에서 먹는 기념품을 정리하는 쪽이 가장 효율적입니다.",
      },
      {
        time: "출국 전",
        title: "공항 이동",
        description: "짐이 많으면 택시 분담도 고려하고, 지하철 이동 시 국제선 수속 시간을 넉넉하게 잡아두는 편이 안전합니다.",
      },
    ],
  },
};

const TRANSPORT_CARDS = [
  {
    title: "숙소 주소",
    badge: "복사 가능",
    summary: "〒814-0012 일본 후쿠오카현 후쿠오카시 사와라구 쇼다이 2-9-14",
    actions: [
      { label: "주소 복사", type: "copy", value: "〒814-0012 일본 후쿠오카현 후쿠오카시 사와라구 쇼다이 2-9-14" },
      { label: "지도 열기", type: "link", value: "https://maps.app.goo.gl/i57qpsDuxfXsw5te6" },
    ],
  },
  {
    title: "니시진역",
    badge: "숙소 기준 출발점",
    summary: "숙소 기준 시내 이동, 러닝 시작, 모모치권 이동의 기준점으로 보기 좋습니다.",
    actions: [
      { label: "지도 열기", type: "link", value: "https://www.google.com/maps/search/?api=1&query=Nishijin+Station+Fukuoka" },
      { label: "역명 복사", type: "copy", value: "Nishijin Station, Fukuoka" },
    ],
  },
  {
    title: "투어 집결지",
    badge: "6/20 필수",
    summary: "하카타역 치쿠시구치 오리엔탈호텔 로손 앞. 예약 기준 집합 08:10 / 출발 08:30.",
    actions: [
      { label: "집결지 복사", type: "copy", value: "하카타역 치쿠시구치 오리엔탈호텔 로손 앞 / 08:10 집합 / 08:30 출발" },
      { label: "지도 열기", type: "link", value: "https://maps.app.goo.gl/dK8bDBvVMFJkA2ax8" },
    ],
  },
  {
    title: "후쿠오카 공항",
    badge: "출입국",
    summary: "공항 이동은 숙소 짐 상태에 따라 지하철 또는 택시 분담으로 보는 편이 좋습니다.",
    actions: [
      { label: "공항 지도", type: "link", value: "https://www.google.com/maps/search/?api=1&query=Fukuoka+Airport+International+Terminal" },
      { label: "공항 이름 복사", type: "copy", value: "Fukuoka Airport International Terminal" },
    ],
  },
];

const NEARBY_SPOTS = [
  {
    title: "니시진 상점가",
    badge: "도보 산책",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nishijin%20shopping%20street%20by%20LWY%20in%20Fukuoka.jpg",
    summary: "도착 첫날이나 마지막 날 가볍게 보기 좋은 로컬권입니다. 니시진 맛집, 카페, 생활권 분위기 파악에 좋습니다.",
    details: [
      ["체감 거리", "숙소 기준 도보권 + 짧은 이동"],
      ["추천 조합", "숙소 적응 + 간식 + 가벼운 저녁"],
    ],
    cta: "Google 지도",
    link: "https://www.google.com/maps/dir/?api=1&origin=2-9-14+Shodai+Sawara-ku+Fukuoka&destination=Nishijin+Shopping+Street+Fukuoka&travelmode=walking",
  },
  {
    title: "모모치 해변",
    badge: "노을 포인트",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Seaside-momochi%2020130927.jpg",
    summary: "숙소 위치와 잘 맞는 바다권 카드입니다. 후쿠오카타워, 시박물관, 팀랩과 같이 묶기 좋습니다.",
    details: [
      ["체감 거리", "숙소 기준 버스 또는 택시 이동권"],
      ["추천 조합", "해변 + 타워 + 저녁 텐진"],
    ],
    cta: "Google 지도",
    link: "https://www.google.com/maps/dir/?api=1&origin=2-9-14+Shodai+Sawara-ku+Fukuoka&destination=Seaside+Momochi+Beach+Park&travelmode=transit",
  },
  {
    title: "후쿠오카타워",
    badge: "대표 야경",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fukuoka%20Tower%202024%2001.jpg",
    summary: "야경, 전망, 사진을 한 번에 챙기기 좋은 대표 포인트입니다. 맑은 날 해질 무렵이 특히 좋습니다.",
    details: [
      ["입장료", "성인 1,000엔"],
      ["추천 조합", "모모치 해변 + 타워 + 팀랩"],
    ],
    cta: "Google 지도",
    link: "https://www.google.com/maps/dir/?api=1&origin=2-9-14+Shodai+Sawara-ku+Fukuoka&destination=Fukuoka+Tower&travelmode=transit",
  },
  {
    title: "오호리공원",
    badge: "아침 산책",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ohori%20Park%20%2830681292984%29.jpg",
    summary: "너무 관광지 느낌보다 산책과 브런치, 가벼운 운동 분위기를 원할 때 가장 안정적인 선택지입니다.",
    details: [
      ["체감 거리", "니시진역 출발 지하철권"],
      ["추천 조합", "브런치 + 공원 + 텐진 이동"],
    ],
    cta: "Google 지도",
    link: "https://www.google.com/maps/dir/?api=1&origin=Nishijin+Station+Fukuoka&destination=Ohori+Park+Fukuoka&travelmode=transit",
  },
];

const CITY_CONTENTS = [
  {
    title: "teamLab Forest Fukuoka",
    badge: "실내 체험",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mizuho%20PayPay%20dome%20Fukuoka%202025.jpg",
    summary: "비 오는 날, 더운 날, 사진 남기고 싶은 날에 가장 실패 확률이 낮은 콘텐츠입니다.",
    details: [
      ["가격", "성인 2,400엔부터"],
      ["추천 조합", "후쿠오카타워 + 팀랩 + 텐진 저녁"],
    ],
    cta: "Google 지도",
    link: "https://www.google.com/maps/search/?api=1&query=teamLab+Forest+Fukuoka",
  },
  {
    title: "텐진 쇼핑 & 밤거리",
    badge: "쇼핑 / 술자리",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fukuoka%20in%20the%20night.jpg",
    summary: "남자 넷이서 돌아다니기 편하고, 저녁 식사와 2차, 쇼핑을 한꺼번에 정리하기 좋습니다.",
    details: [
      ["체감", "후쿠오카 시내 중심지"],
      ["추천 조합", "오호리공원 + 텐진 + 나카스"],
    ],
    cta: "Google 지도",
    link: "https://www.google.com/maps/dir/?api=1&origin=Nishijin+Station+Fukuoka&destination=Tenjin+Fukuoka&travelmode=transit",
  },
  {
    title: "나카스 야타이",
    badge: "2차 감성",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yatai.jpg",
    summary: "맛 자체보다 분위기 소비에 가까운 밤 코스입니다. 한 번쯤 가볼 만한 후쿠오카식 밤거리 카드입니다.",
    details: [
      ["예산", "1인 1,500엔~3,500엔"],
      ["팁", "웨이팅이 있으면 2차 타이밍이 더 낫습니다."],
    ],
    cta: "Google 지도",
    link: "https://www.google.com/maps/search/?api=1&query=Nakasu+Yatai+Fukuoka",
  },
  {
    title: "다자이후 텐만구",
    badge: "반나절 근교",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dazaifu%20Tenmangu%20Romon.JPG",
    summary: "유후인처럼 하루를 통째로 쓰지 않으면서 근교 분위기를 챙기고 싶을 때 좋은 선택지입니다.",
    details: [
      ["입장", "신사 자체는 무료"],
      ["추천 조합", "오전 다자이후 + 오후 텐진"],
    ],
    cta: "Google 지도",
    link: "https://www.google.com/maps/search/?api=1&query=Dazaifu+Tenmangu",
  },
];

const FOOD_SHOPPING = [
  {
    title: "모츠나베",
    badge: "1인 2,000~3,500엔",
    image: "./assets/photos/motsunabe.jpg",
    summary: "이번 여행에서 한 번은 꼭 넣을 만한 대표 저녁 메뉴입니다. 술자리와도 잘 맞고 4명이 먹기 편합니다.",
    details: [
      ["추천 타이밍", "둘째 날 또는 셋째 날 메인 저녁"],
      ["찾기 팁", "텐진, 니시진, 하카타역 주변에서 선택 폭이 넓습니다."],
    ],
    cta: "Google 지도",
    link: "https://www.google.com/maps/search/?api=1&query=Motsunabe+Fukuoka",
  },
  {
    title: "하카타 라멘",
    badge: "1인 900~1,500엔",
    image: "./assets/photos/hakata-ramen.jpg",
    summary: "가볍고 빠르게 먹기 좋은 한 끼라서 첫날 점심이나 마지막 날 마무리 식사로 특히 좋습니다.",
    details: [
      ["추천 타이밍", "이동 전후 짧은 한 끼"],
      ["팁", "회전이 빨라 일정 손해가 적습니다."],
    ],
    cta: "Google 지도",
    link: "https://www.google.com/maps/search/?api=1&query=Hakata+Ramen+Fukuoka",
  },
  {
    title: "멘타이코 과자 & 하카타 토리몽",
    badge: "기념품",
    image: "./assets/photos/mentaiko.jpg",
    summary: "회사나 지인에게 나눠주기 가장 무난한 선물군입니다. 하카타역이나 공항에서 마지막에 몰아사기 좋습니다.",
    details: [
      ["추천 타이밍", "마지막 날 하카타역 또는 공항"],
      ["팁", "여러 명에게 나눌 거면 개별 포장 많은 제품이 편합니다."],
    ],
    cta: "Google 지도",
    link: "https://www.google.com/maps/search/?api=1&query=Hakata+Station+Souvenir",
  },
  {
    title: "드럭스토어 쇼핑",
    badge: "실속형",
    image: "./assets/photos/drugstore.jpg",
    summary: "간식, 파스, 생활용품, 화장품까지 실속형 쇼핑은 드럭스토어에서 정리하는 편이 좋습니다.",
    details: [
      ["추천 타이밍", "첫날 가격만 보고 마지막에 몰아사기"],
      ["팁", "짐 무게 생각해서 마지막 날 정산이 안전합니다."],
    ],
    cta: "Google 지도",
    link: "https://www.google.com/maps/search/?api=1&query=Drugstore+Nishijin+Fukuoka",
  },
];

const PRACTICAL_GUIDES = [
  {
    title: "니시진역 여행 후기",
    badge: "네이버 블로그",
    image: "./icon.svg",
    summary: "니시진역 주변 분위기와 실제 이동 후기를 보고 싶을 때 바로 눌러보기 좋습니다.",
    details: [
      ["키워드", "후쿠오카 니시진역 여행"],
      ["용도", "동네 분위기, 동선 감 잡기"],
    ],
    cta: "블로그 보기",
    link: "https://search.naver.com/search.naver?where=blog&query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EB%8B%88%EC%8B%9C%EC%A7%84%EC%97%AD+%EC%97%AC%ED%96%89",
  },
  {
    title: "니시진역 숙소 후기",
    badge: "네이버 블로그",
    image: "./icon.svg",
    summary: "니시진역 근처 숙소의 실제 체감 거리, 조용함, 체크인 흐름을 참고하기 좋습니다.",
    details: [
      ["키워드", "후쿠오카 니시진역 숙소"],
      ["용도", "숙소권 리뷰 확인"],
    ],
    cta: "블로그 보기",
    link: "https://search.naver.com/search.naver?where=blog&query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EB%8B%88%EC%8B%9C%EC%A7%84%EC%97%AD+%EC%88%99%EC%86%8C",
  },
  {
    title: "니시진 맛집 후기",
    badge: "네이버 블로그",
    image: "./icon.svg",
    summary: "동네 식당, 카페, 가볍게 들를 만한 곳을 후기 중심으로 보는 용도입니다.",
    details: [
      ["키워드", "후쿠오카 니시진 맛집"],
      ["용도", "첫날, 마지막날 식당 탐색"],
    ],
    cta: "블로그 보기",
    link: "https://search.naver.com/search.naver?where=blog&query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EB%8B%88%EC%8B%9C%EC%A7%84+%EB%A7%9B%EC%A7%91",
  },
  {
    title: "모모치·니시진 동선 후기",
    badge: "네이버 블로그",
    image: "./icon.svg",
    summary: "모모치 해변, 후쿠오카타워, 니시진을 어떻게 묶는지 실제 후기를 참고하기 좋습니다.",
    details: [
      ["키워드", "후쿠오카 모모치 니시진"],
      ["용도", "둘째 날 동선 참고"],
    ],
    cta: "블로그 보기",
    link: "https://search.naver.com/search.naver?where=blog&query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EB%AA%A8%EB%AA%A8%EC%B9%98+%EB%8B%88%EC%8B%9C%EC%A7%84",
  },
];

const RUN_TIPS = [
  {
    title: "러닝 기본 전략",
    badge: "실제 경로 계산",
    summary: "직진 최단 코스는 더 짧고, 공원·수변 쪽으로 살짝 우회하면 약 7.5km대에 맞추기 좋습니다. 페이지에서 직접 계산한 실제 거리 기준으로 안내합니다.",
    lines: [
      "가벼운 러닝: 1km 7분 30초 기준",
      "보통 러닝: 1km 6분 20초 기준",
      "너무 덥거나 비 오면 런닝은 줄이고 대중교통 대체 추천",
    ],
  },
  {
    title: "좋은 구간과 주의 구간",
    badge: "안전 우선",
    summary: "오호리공원, 마이즈루공원, 해안 쪽은 리듬이 좋고, 도심 도로와 교차로 구간은 신호가 많아 속도를 줄이는 편이 좋습니다.",
    lines: [
      "좋은 구간: 공원 둘레, 수변 쪽 보행로",
      "주의 구간: 항만 진입부, 대로변 교차로",
      "수분 보충: 출발 전 편의점, 중간 편의점, 도착 후 온천 매점",
    ],
  },
  {
    title: "온천 이용 준비",
    badge: "나미하노유",
    summary: "수건, 갈아입을 옷, 젖은 옷 담을 봉투, 동전, 결제수단을 챙기면 편합니다. 운영시간과 문신 규정은 현장 도착 전 공식 재확인이 필요합니다.",
    lines: [
      "운영시간: 공식 최신 정보 확인 필요",
      "휴무일: 공식 최신 정보 확인 필요",
      "문신 규정: 공식 최신 정보 확인 필요",
    ],
  },
  {
    title: "온천 후 귀가",
    badge: "복귀 동선",
    summary: "온천 후에는 런닝 복귀보다 버스 또는 택시 분담이 현실적입니다. 베이사이드플레이스 하카타에서 시내 방면 이동 후 니시진역권으로 돌아오는 흐름을 추천합니다.",
    lines: [
      "대중교통: 베이사이드플레이스 하카타 → 시내 방면 버스 → 니시진역권",
      "택시: 4인 분담 시 편한 선택",
      "비/폭염 시: 러닝 생략 후 바로 대중교통 이동 추천",
    ],
  },
];

const GUIDE_CARDS = [
  {
    title: "여행 전에 꼭",
    badge: "사전 점검",
    summary: "투어 바우처, 숙소 핀 코드, 와이파이, 여권, 결제 수단, 보조배터리를 출발 전날 밤에 한 번 더 확인해 두세요.",
    lines: [
      "6/20 투어 집합 시간 재확인",
      "숙소 정보 캡처 저장",
      "비 오면 러닝 일정 조정",
    ],
  },
  {
    title: "공개 저장소 주의",
    badge: "보안",
    summary: "핀 코드와 와이파이 비밀번호는 화면에서 가려도 공개 저장소 소스코드에는 남습니다. 진짜 민감하면 비공개 저장소나 배포 전 값 교체가 더 안전합니다.",
    lines: [
      "가림 UI는 완전한 보안이 아님",
      "GitHub Pages는 누구나 소스 보기 가능",
      "검색엔진 노출 방지는 noindex로도 100% 보장 불가",
    ],
  },
  {
    title: "환율과 날씨 API",
    badge: "무상 API",
    summary: "환율은 open.er-api.com, 날씨는 Open-Meteo를 사용합니다. 둘 다 무료 사용이 가능하고 기본 구현에는 별도 키가 필요 없습니다.",
    lines: [
      "환율 실패 시 수동 환율 입력 가능",
      "날씨 실패 시 다시 불러오기 가능",
      "상업용이나 트래픽이 많으면 서비스 약관 재확인 추천",
    ],
  },
  {
    title: "GitHub Pages 반영",
    badge: "배포",
    summary: "수정 후에는 바뀐 파일과 사진 자산을 함께 업로드해야 합니다. GitHub Pages 반영은 보통 1~3분 정도 걸립니다.",
    lines: [
      "index.html, styles.css, app.js 재업로드",
      "assets/photos 폴더도 같이 업로드",
      "반영 후 휴대폰에서 새로고침",
    ],
  },
];

const SOURCE_LINKS = [
  { label: "투어 상품 - 유후인 & 아프리칸 사파리", url: "https://www.waug.com/ko/activities/151520" },
  { label: "숙소 지도", url: "https://maps.app.goo.gl/i57qpsDuxfXsw5te6" },
  { label: "후쿠오카타워", url: "https://www.google.com/maps/search/?api=1&query=Fukuoka+Tower" },
  { label: "Open-Meteo", url: "https://open-meteo.com/" },
  { label: "Open Exchange Rates API 대안 - open.er-api.com", url: "https://open.er-api.com/" },
];

const ELEMENTS = {
  installNote: document.getElementById("install-note"),
  shareButton: document.getElementById("share-button"),
  tabButtons: Array.from(document.querySelectorAll("[data-tab-target]")),
  tabPanels: Array.from(document.querySelectorAll("[data-tab-panel]")),
  homeSummary: document.getElementById("home-summary"),
  homeQuickLinks: document.getElementById("home-quick-links"),
  dateTabs: document.getElementById("date-tabs"),
  schedulePanel: document.getElementById("schedule-panel"),
  transportGrid: document.getElementById("transport-grid"),
  nearbyGrid: document.getElementById("nearby-grid"),
  cityGrid: document.getElementById("city-grid"),
  foodGrid: document.getElementById("food-grid"),
  reviewGrid: document.getElementById("review-grid"),
  quickAmounts: document.getElementById("quick-amounts"),
  jpyInput: document.getElementById("jpy-input"),
  krwInput: document.getElementById("krw-input"),
  manualRateInput: document.getElementById("manual-rate-input"),
  rateDisplay: document.getElementById("rate-display"),
  rateUpdatedAt: document.getElementById("rate-updated-at"),
  rateMessage: document.getElementById("rate-message"),
  rateRefreshButton: document.getElementById("rate-refresh-button"),
  manualRateButton: document.getElementById("manual-rate-button"),
  weatherCurrentTemp: document.getElementById("weather-current-temp"),
  weatherUpdatedAt: document.getElementById("weather-updated-at"),
  weatherStats: document.getElementById("weather-stats"),
  weatherMessage: document.getElementById("weather-message"),
  weatherRefreshButton: document.getElementById("weather-refresh-button"),
  weatherDailyGrid: document.getElementById("weather-daily-grid"),
  weatherHourlyGrid: document.getElementById("weather-hourly-grid"),
  runOriginSelect: document.getElementById("run-origin-select"),
  runRouteRefresh: document.getElementById("run-route-refresh"),
  runRouteGrid: document.getElementById("run-route-grid"),
  runRouteMessage: document.getElementById("run-route-message"),
  runRouteMapLink: document.getElementById("run-route-map-link"),
  runTipsGrid: document.getElementById("run-tips-grid"),
  guideGrid: document.getElementById("guide-grid"),
  sourceLinks: document.getElementById("source-links"),
};

function formatNumber(value, digits = 0) {
  return new Intl.NumberFormat("ko-KR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function parseNumericInput(value) {
  if (!value) return 0;
  return Number(String(value).replace(/[^0-9.]/g, "")) || 0;
}

function formatCurrencyInput(value) {
  if (!value) return "";
  return formatNumber(value);
}

function formatDateTimeLabel(dateLike) {
  const date = new Date(dateLike);
  return new Intl.DateTimeFormat("ko-KR", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function createInfoCard(item) {
  const detailsHtml = (item.details || [])
    .map(([label, value]) => `<div class="meta-row"><strong>${label}</strong><span>${value}</span></div>`)
    .join("");

  return `
    <article class="card">
      ${item.image ? `
        <div class="card__image">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </div>
      ` : ""}
      <div class="card__head">
        <div>
          <span class="panel__label">${item.badge}</span>
          <h3>${item.title}</h3>
        </div>
      </div>
      <p class="card__summary">${item.summary}</p>
      ${detailsHtml ? `
        <details>
          <summary>자세히 보기</summary>
          <div class="accordion-body">${detailsHtml}</div>
        </details>
      ` : ""}
      ${(item.link || item.actions) ? `
        <div class="card__footer">
          ${item.actions ? item.actions.map(renderActionButton).join("") : `<a class="action-button" href="${item.link}" target="_blank" rel="noreferrer">${item.cta || "열기"}</a>`}
        </div>
      ` : ""}
    </article>
  `;
}

function renderActionButton(action) {
  if (action.type === "copy") {
    return `<button class="action-button action-button--soft" type="button" data-copy="${action.value.replace(/"/g, "&quot;")}">${action.label}</button>`;
  }
  return `<a class="action-button" href="${action.value}" target="_blank" rel="noreferrer">${action.label}</a>`;
}

function renderHome() {
  ELEMENTS.homeSummary.innerHTML = HOME_SUMMARY.map((item) => createInfoCard({
    title: item.title,
    badge: "",
    summary: item.text,
  })).join("");

  ELEMENTS.homeQuickLinks.innerHTML = HOME_QUICK_LINKS.map((item) => `
    <article class="card">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="card__footer">
        <button class="action-button" type="button" data-tab-target="${item.tab}">이 탭 열기</button>
      </div>
    </article>
  `).join("");
}

function renderDateTabs() {
  ELEMENTS.dateTabs.innerHTML = TRIP_DATES.map((date) => {
    const item = SCHEDULE_DATA[date];
    const isActive = APP_STATE.activeDate === date;
    return `
      <button class="date-tab ${isActive ? "is-active" : ""}" type="button" data-date-tab="${date}">
        <strong>${item.label.replace("2026년 ", "")}</strong>
        <span>${item.mood}</span>
      </button>
    `;
  }).join("");
}

function getWeatherSummaryForDate(dateKey) {
  if (!APP_STATE.weather || !APP_STATE.weather.dailyMap[dateKey]) {
    return `<span class="weather-pill">날씨 불러오는 중</span>`;
  }

  const daily = APP_STATE.weather.dailyMap[dateKey];
  const umbrella = daily.maxPrecip >= 40 ? "우산 추천" : "우산은 선택";
  return `
    <span class="weather-pill">최저 ${Math.round(daily.minTemp)}도 / 최고 ${Math.round(daily.maxTemp)}도</span>
    <span class="weather-pill">${umbrella}</span>
  `;
}

function renderSchedule() {
  renderDateTabs();
  const data = SCHEDULE_DATA[APP_STATE.activeDate];
  ELEMENTS.schedulePanel.innerHTML = `
    <article class="card">
      <span class="panel__label">${data.label}</span>
      <h3>${data.mood}</h3>
      <p>${data.summary}</p>
      <div class="card__footer">${getWeatherSummaryForDate(APP_STATE.activeDate)}</div>
      <div class="schedule-stack">
        ${data.items.map((item) => `
          <article class="schedule-item">
            <span class="schedule-item__time">${item.time}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            ${item.copy ? `
              <div class="card__footer">
                <button class="action-button action-button--soft" type="button" data-copy="${item.copy.replace(/"/g, "&quot;")}">복사</button>
              </div>
            ` : ""}
          </article>
        `).join("")}
      </div>
    </article>
  `;
}

function renderCards() {
  ELEMENTS.transportGrid.innerHTML = TRANSPORT_CARDS.map(createInfoCard).join("");
  ELEMENTS.nearbyGrid.innerHTML = NEARBY_SPOTS.map(createInfoCard).join("");
  ELEMENTS.cityGrid.innerHTML = CITY_CONTENTS.map(createInfoCard).join("");
  ELEMENTS.foodGrid.innerHTML = FOOD_SHOPPING.map(createInfoCard).join("");
  ELEMENTS.reviewGrid.innerHTML = PRACTICAL_GUIDES.map(createInfoCard).join("");
  ELEMENTS.runTipsGrid.innerHTML = RUN_TIPS.map((item) => createInfoCard({
    title: item.title,
    badge: item.badge,
    summary: item.summary,
    details: item.lines.map((line, index) => [`포인트 ${index + 1}`, line]),
  })).join("");
  ELEMENTS.guideGrid.innerHTML = GUIDE_CARDS.map((item) => createInfoCard({
    title: item.title,
    badge: item.badge,
    summary: item.summary,
    details: item.lines.map((line, index) => [`체크 ${index + 1}`, line]),
  })).join("");
  ELEMENTS.sourceLinks.innerHTML = SOURCE_LINKS.map((item) => `
    <a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>
  `).join("");

  attachImageFallbacks();
}

function attachImageFallbacks() {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.closest(".card__image")?.replaceChildren(createFallbackNode(img.alt));
    }, { once: true });
  });
}

function createFallbackNode(label) {
  const box = document.createElement("div");
  box.className = "card__image";
  box.innerHTML = `<div class="card__summary" style="display:grid;place-items:center;height:100%;padding:18px;text-align:center;">${label}</div>`;
  return box;
}

function setActiveTab(tabKey) {
  APP_STATE.activeTab = tabKey;
  localStorage.setItem("matdadum.activeTab", tabKey);
  ELEMENTS.tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tabTarget === tabKey);
  });
  ELEMENTS.tabPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.tabPanel === tabKey);
  });
}

function setupTabEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-tab-target]");
    if (!target) return;
    const nextTab = target.dataset.tabTarget;
    if (!nextTab) return;
    setActiveTab(nextTab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-date-tab]");
    if (!button) return;
    APP_STATE.activeDate = button.dataset.dateTab;
    renderSchedule();
  });
}

function setupCopyButtons() {
  document.addEventListener("click", async (event) => {
    const copyButton = event.target.closest("[data-copy]");
    if (!copyButton) return;
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copy);
      copyButton.textContent = "복사됨";
      setTimeout(() => {
        copyButton.textContent = copyButton.classList.contains("action-button--soft") ? "복사" : copyButton.textContent;
      }, 1200);
    } catch {
      copyButton.textContent = "복사 실패";
    }
  });
}

function setupSecretButtons() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-secret-target]");
    if (!button) return;
    const target = document.getElementById(button.dataset.secretTarget);
    if (!target) return;
    target.textContent = button.dataset.secretValue;
  });
}

function setupShare() {
  ELEMENTS.shareButton?.addEventListener("click", async () => {
    const shareData = {
      title: "맞닿음 모임",
      text: "후쿠오카 여행 가이드",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        return;
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      ELEMENTS.installNote.textContent = "현재 페이지 주소를 복사했습니다.";
    } catch {
      ELEMENTS.installNote.textContent = "주소 복사는 브라우저 권한이 필요합니다.";
    }
  });
}

function setupPwa() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {
        ELEMENTS.installNote.textContent = "오프라인 저장 등록은 실패했지만 페이지 자체는 사용할 수 있습니다.";
      });
    });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    ELEMENTS.installNote.textContent = "브라우저 메뉴에서 홈 화면에 추가를 누르면 앱처럼 설치할 수 있습니다.";
  });
}

function bindExchangeEvents() {
  const quickValues = [1000, 5000, 10000, 30000];
  ELEMENTS.quickAmounts.innerHTML = quickValues.map((amount) => `
    <button class="quick-amount-button" type="button" data-quick-jpy="${amount}">${formatNumber(amount)}엔</button>
  `).join("");

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-quick-jpy]");
    if (!button) return;
    const amount = Number(button.dataset.quickJpy);
    APP_STATE.lastEditedCurrency = "jpy";
    ELEMENTS.jpyInput.value = formatCurrencyInput(amount);
    updateExchangeFromJpy(amount);
  });

  ELEMENTS.jpyInput.addEventListener("input", () => {
    APP_STATE.lastEditedCurrency = "jpy";
    const value = parseNumericInput(ELEMENTS.jpyInput.value);
    ELEMENTS.jpyInput.value = formatCurrencyInput(value);
    updateExchangeFromJpy(value);
  });

  ELEMENTS.krwInput.addEventListener("input", () => {
    APP_STATE.lastEditedCurrency = "krw";
    const value = parseNumericInput(ELEMENTS.krwInput.value);
    ELEMENTS.krwInput.value = formatCurrencyInput(value);
    updateExchangeFromKrw(value);
  });

  ELEMENTS.manualRateButton.addEventListener("click", () => {
    const manualRate = parseNumericInput(ELEMENTS.manualRateInput.value);
    if (!manualRate) {
      ELEMENTS.rateMessage.textContent = "직접 입력 환율을 숫자로 넣어 주세요.";
      return;
    }
    APP_STATE.exchangeRate = manualRate;
    APP_STATE.exchangeUpdatedAt = new Date();
    renderExchangeMeta("직접 입력 환율을 적용했습니다.");
    syncExchangeInputs();
  });

  ELEMENTS.rateRefreshButton.addEventListener("click", loadExchangeRate);
}

function renderExchangeMeta(message = "") {
  if (APP_STATE.exchangeRate) {
    ELEMENTS.rateDisplay.textContent = `1엔 = ${formatNumber(APP_STATE.exchangeRate, 2)}원`;
  } else {
    ELEMENTS.rateDisplay.textContent = "환율 확인 필요";
  }
  ELEMENTS.rateUpdatedAt.textContent = APP_STATE.exchangeUpdatedAt ? formatDateTimeLabel(APP_STATE.exchangeUpdatedAt) : "-";
  ELEMENTS.rateMessage.textContent = message;
}

function updateExchangeFromJpy(jpy) {
  if (!APP_STATE.exchangeRate) return;
  const krw = Math.round(jpy * APP_STATE.exchangeRate);
  ELEMENTS.krwInput.value = krw ? formatCurrencyInput(krw) : "";
}

function updateExchangeFromKrw(krw) {
  if (!APP_STATE.exchangeRate) return;
  const jpy = Math.round(krw / APP_STATE.exchangeRate);
  ELEMENTS.jpyInput.value = jpy ? formatCurrencyInput(jpy) : "";
}

function syncExchangeInputs() {
  const jpy = parseNumericInput(ELEMENTS.jpyInput.value);
  const krw = parseNumericInput(ELEMENTS.krwInput.value);
  if (APP_STATE.lastEditedCurrency === "jpy") {
    updateExchangeFromJpy(jpy);
  } else if (APP_STATE.lastEditedCurrency === "krw") {
    updateExchangeFromKrw(krw);
  } else if (jpy) {
    updateExchangeFromJpy(jpy);
  } else if (krw) {
    updateExchangeFromKrw(krw);
  }
}

async function loadExchangeRate() {
  ELEMENTS.rateMessage.textContent = "환율을 불러오는 중입니다.";
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/JPY");
    if (!response.ok) throw new Error("exchange fetch failed");
    const data = await response.json();
    const rate = data?.rates?.KRW;
    if (!rate) throw new Error("missing KRW rate");
    APP_STATE.exchangeRate = rate;
    APP_STATE.exchangeUpdatedAt = data.time_last_update_utc || new Date();
    renderExchangeMeta("실시간 환율을 불러왔습니다.");
    syncExchangeInputs();
  } catch {
    renderExchangeMeta("실시간 환율을 불러오지 못했습니다. 직접 환율을 입력해 주세요.");
  }
}

function weatherCodeToLabel(code) {
  const map = {
    0: "맑음",
    1: "대체로 맑음",
    2: "구름 조금",
    3: "흐림",
    45: "안개",
    48: "짙은 안개",
    51: "이슬비",
    61: "비",
    63: "보통 비",
    65: "강한 비",
    71: "눈",
    80: "소나기",
    95: "뇌우",
  };
  return map[code] || "날씨 확인 필요";
}

function isUmbrellaNeeded(hourlySlice) {
  return hourlySlice.some((hour) => hour.precip >= 45 || [61, 63, 65, 80, 95].includes(hour.code));
}

function getRunningWindow(hourlySlice) {
  const candidates = hourlySlice
    .filter((hour) => hour.hour >= 5 && hour.hour <= 22)
    .sort((a, b) => {
      const scoreA = a.apparent + a.precip;
      const scoreB = b.apparent + b.precip;
      return scoreA - scoreB;
    });
  return candidates[0];
}

function renderWeather() {
  if (!APP_STATE.weather) {
    ELEMENTS.weatherCurrentTemp.textContent = "날씨 불러오는 중";
    return;
  }

  const current = APP_STATE.weather.current;
  ELEMENTS.weatherCurrentTemp.textContent = `${Math.round(current.temp)}도 · ${weatherCodeToLabel(current.code)}`;
  ELEMENTS.weatherUpdatedAt.textContent = APP_STATE.weatherUpdatedAt ? formatDateTimeLabel(APP_STATE.weatherUpdatedAt) : "-";

  const currentDayKey = TRIP_DATES.find((date) => APP_STATE.weather.dailyMap[date]) || TRIP_DATES[0];
  const todaySlice = APP_STATE.weather.hourlyMap[currentDayKey] || [];
  const runningBest = getRunningWindow(todaySlice);

  ELEMENTS.weatherStats.innerHTML = [
    ["체감온도", `${Math.round(current.apparent)}도`],
    ["습도", `${current.humidity}%`],
    ["풍속", `${Math.round(current.wind)} km/h`],
    ["우산", isUmbrellaNeeded(todaySlice) ? "챙기는 편 추천" : "선택 가능"],
    ["러닝 추천", runningBest ? `${String(runningBest.hour).padStart(2, "0")}:00 전후` : "더위 확인 필요"],
    ["일출 / 일몰", `${APP_STATE.weather.dailyMap[currentDayKey].sunrise} / ${APP_STATE.weather.dailyMap[currentDayKey].sunset}`],
  ].map(([label, value]) => `
    <article class="stat-card">
      <span class="panel__label">${label}</span>
      <strong>${value}</strong>
    </article>
  `).join("");

  ELEMENTS.weatherDailyGrid.innerHTML = TRIP_DATES.map((dateKey) => {
    const day = APP_STATE.weather.dailyMap[dateKey];
    if (!day) return "";
    return `
      <article class="card">
        <span class="panel__label">${SCHEDULE_DATA[dateKey].label}</span>
        <h3>${weatherCodeToLabel(day.code)}</h3>
        <p>최저 ${Math.round(day.minTemp)}도 / 최고 ${Math.round(day.maxTemp)}도 · 강수확률 최대 ${day.maxPrecip}%</p>
        <div class="card__footer">
          <span class="status-pill">${day.maxPrecip >= 40 ? "우산 추천" : "우산은 선택"}</span>
          <span class="status-pill">${day.sunrise} / ${day.sunset}</span>
        </div>
      </article>
    `;
  }).join("");

  ELEMENTS.weatherHourlyGrid.innerHTML = TRIP_DATES.map((dateKey) => {
    const hours = (APP_STATE.weather.hourlyMap[dateKey] || []).slice(0, 6);
    if (!hours.length) return "";
    return `
      <article class="card">
        <span class="panel__label">${SCHEDULE_DATA[dateKey].label}</span>
        <h3>시간대별 앞 6개</h3>
        <div class="accordion-body">
          ${hours.map((hour) => `
            <div class="meta-row">
              <strong>${String(hour.hour).padStart(2, "0")}:00</strong>
              <span>${Math.round(hour.temp)}도 / 체감 ${Math.round(hour.apparent)}도 / 강수 ${hour.precip}%</span>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }).join("");

  renderSchedule();
}

async function loadWeather() {
  ELEMENTS.weatherMessage.textContent = "날씨를 불러오는 중입니다.";
  try {
    const weatherUrl = [
      "https://api.open-meteo.com/v1/forecast",
      `?latitude=${FUKUOKA_COORDS.lat}`,
      `&longitude=${FUKUOKA_COORDS.lon}`,
      "&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code",
      "&hourly=temperature_2m,apparent_temperature,precipitation_probability,weather_code,relative_humidity_2m,wind_speed_10m",
      "&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max",
      "&timezone=Asia%2FTokyo",
      "&forecast_days=7",
    ].join("");
    const response = await fetch(weatherUrl);
    if (!response.ok) throw new Error("weather fetch failed");
    const data = await response.json();

    const dailyMap = {};
    data.daily.time.forEach((date, index) => {
      dailyMap[date] = {
        code: data.daily.weather_code[index],
        maxTemp: data.daily.temperature_2m_max[index],
        minTemp: data.daily.temperature_2m_min[index],
        sunrise: new Date(data.daily.sunrise[index]).toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
        sunset: new Date(data.daily.sunset[index]).toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
        maxPrecip: data.daily.precipitation_probability_max[index],
      };
    });

    const hourlyMap = {};
    data.hourly.time.forEach((iso, index) => {
      const date = iso.slice(0, 10);
      if (!hourlyMap[date]) hourlyMap[date] = [];
      hourlyMap[date].push({
        hour: Number(iso.slice(11, 13)),
        temp: data.hourly.temperature_2m[index],
        apparent: data.hourly.apparent_temperature[index],
        precip: data.hourly.precipitation_probability[index],
        code: data.hourly.weather_code[index],
        humidity: data.hourly.relative_humidity_2m[index],
        wind: data.hourly.wind_speed_10m[index],
      });
    });

    APP_STATE.weather = {
      current: {
        temp: data.current.temperature_2m,
        apparent: data.current.apparent_temperature,
        humidity: data.current.relative_humidity_2m,
        wind: data.current.wind_speed_10m,
        code: data.current.weather_code,
      },
      dailyMap,
      hourlyMap,
    };
    APP_STATE.weatherUpdatedAt = new Date();
    ELEMENTS.weatherMessage.textContent = "실시간 날씨를 불러왔습니다.";
    renderWeather();
  } catch {
    ELEMENTS.weatherMessage.textContent = "날씨 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.";
  }
}

async function geocodePlace(query) {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error("geocode failed");
  const data = await response.json();
  if (!data.length) throw new Error("no geocode result");
  return { lat: Number(data[0].lat), lon: Number(data[0].lon), name: data[0].display_name };
}

async function fetchOsrmRoute(points) {
  const coords = points.map((point) => `${point.lon},${point.lat}`).join(";");
  const response = await fetch(`https://router.project-osrm.org/route/v1/foot/${coords}?overview=false&steps=false`);
  if (!response.ok) throw new Error("route failed");
  const data = await response.json();
  if (!data.routes?.length) throw new Error("no route");
  return data.routes[0];
}

function minutesToText(minutes) {
  const hour = Math.floor(minutes / 60);
  const min = Math.round(minutes % 60);
  if (!hour) return `${min}분`;
  return `${hour}시간 ${min}분`;
}

async function loadRunRoutes() {
  ELEMENTS.runRouteMessage.textContent = "러닝 경로를 계산하는 중입니다.";
  const originKey = ELEMENTS.runOriginSelect.value;
  if (APP_STATE.routeCache[originKey]) {
    renderRunRoute(APP_STATE.routeCache[originKey], originKey);
    ELEMENTS.runRouteMessage.textContent = "저장된 경로 계산 결과를 표시했습니다.";
    return;
  }

  try {
    const originQuery = originKey === "station"
      ? "Nishijin Station, Fukuoka, Japan"
      : "2-9-14 Shodai, Sawara-ku, Fukuoka, Japan";

    const [origin, ohori, nagahama, onsen] = await Promise.all([
      geocodePlace(originQuery),
      geocodePlace("Ohori Park, Fukuoka, Japan"),
      geocodePlace("Nagahama Park, Fukuoka, Japan"),
      geocodePlace("Bayside Place Hakata, Fukuoka, Japan"),
    ]);

    const direct = await fetchOsrmRoute([origin, onsen]);
    const scenic = await fetchOsrmRoute([origin, ohori, nagahama, onsen]);

    const routeData = { origin, ohori, nagahama, onsen, direct, scenic };
    APP_STATE.routeCache[originKey] = routeData;
    renderRunRoute(routeData, originKey);
    ELEMENTS.runRouteMessage.textContent = "실제 보행 경로 기준으로 계산했습니다.";
  } catch {
    ELEMENTS.runRouteMessage.textContent = "경로 계산에 실패했습니다. Google 지도 경로 버튼을 먼저 사용해 주세요.";
  }
}

function renderRunRoute(routeData, originKey) {
  const originLabel = originKey === "station" ? "니시진역" : "숙소 인근";
  const directKm = routeData.direct.distance / 1000;
  const scenicKm = routeData.scenic.distance / 1000;
  const bestForTarget = Math.abs(scenicKm - 7.5) < Math.abs(directKm - 7.5) ? "scenic" : "direct";
  const selectedRoute = bestForTarget === "scenic" ? routeData.scenic : routeData.direct;

  const easyMinutes = selectedRoute.distance / 1000 * 7.5;
  const normalMinutes = selectedRoute.distance / 1000 * 6.2;

  ELEMENTS.runRouteMapLink.href = bestForTarget === "scenic"
    ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(originLabel + ", Fukuoka")}&destination=${encodeURIComponent("Bayside Place Hakata, Fukuoka")}&waypoints=${encodeURIComponent("Ohori Park, Fukuoka|Nagahama Park, Fukuoka")}&travelmode=walking`
    : `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(originLabel + ", Fukuoka")}&destination=${encodeURIComponent("Bayside Place Hakata, Fukuoka")}&travelmode=walking`;

  ELEMENTS.runRouteGrid.innerHTML = `
    <article class="card">
      <span class="panel__label">직결 코스</span>
      <h3>${originLabel} → 나미하노유</h3>
      <div class="route-stat-grid">
        <article class="stat-card">
          <span class="panel__label">실제 거리</span>
          <strong>${formatNumber(directKm, 2)}km</strong>
        </article>
        <article class="stat-card">
          <span class="panel__label">예상 소요</span>
          <strong>${minutesToText(routeData.direct.duration / 60)}</strong>
        </article>
      </div>
      <p>가장 짧은 보행 기준입니다. 약 7.5km보다는 짧을 가능성이 커서 더위가 심할 때는 이쪽이 안전합니다.</p>
    </article>
    <article class="card">
      <span class="panel__label">7.5km 맞춤 우회 코스</span>
      <h3>${originLabel} → 오호리공원 → 나가하마공원 → 나미하노유</h3>
      <div class="route-stat-grid">
        <article class="stat-card">
          <span class="panel__label">실제 거리</span>
          <strong>${formatNumber(scenicKm, 2)}km</strong>
        </article>
        <article class="stat-card">
          <span class="panel__label">예상 소요</span>
          <strong>${minutesToText(routeData.scenic.duration / 60)}</strong>
        </article>
      </div>
      <p>공원과 수변 쪽을 살려 달리는 코스입니다. 현재 기준으로 이 코스를 메인 추천으로 봤고, 가벼운 러닝은 약 ${minutesToText(easyMinutes)}, 보통 러닝은 약 ${minutesToText(normalMinutes)} 정도를 잡으면 됩니다.</p>
      <details>
        <summary>경유 포인트 보기</summary>
        <div class="accordion-body">
          <div class="meta-row"><strong>출발지</strong><span>${originLabel}</span></div>
          <div class="meta-row"><strong>주요 경유지</strong><span>오호리공원, 나가하마공원, 베이사이드플레이스 하카타</span></div>
          <div class="meta-row"><strong>수분 보충</strong><span>출발 전 편의점, 공원 주변 편의점, 도착지 매점</span></div>
          <div class="meta-row"><strong>화장실</strong><span>공원 공중화장실, 베이사이드플레이스 시설 화장실 활용</span></div>
        </div>
      </details>
    </article>
  `;
}

function setupRunEvents() {
  ELEMENTS.runRouteRefresh.addEventListener("click", loadRunRoutes);
}

function setupWeatherEvents() {
  ELEMENTS.weatherRefreshButton.addEventListener("click", loadWeather);
}

function renderAll() {
  renderHome();
  renderCards();
  renderSchedule();
}

function initializeApp() {
  renderAll();
  setActiveTab(APP_STATE.activeTab);
  setupTabEvents();
  setupCopyButtons();
  setupSecretButtons();
  setupShare();
  setupPwa();
  bindExchangeEvents();
  setupWeatherEvents();
  setupRunEvents();
  renderExchangeMeta();
  loadExchangeRate();
  loadWeather();
  loadRunRoutes();
}

initializeApp();
