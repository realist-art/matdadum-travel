const staySpots = [
  {
    name: "니시진 상점가",
    area: "니시진역권 로컬 산책",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nishijin%20shopping%20street%20by%20LWY%20in%20Fukuoka.jpg",
    summary: "숙소에서 가장 부담 없이 붙일 수 있는 동네 산책 카드입니다. 관광지 느낌보다 실제 생활권 분위기가 강해서, 도착 첫날이나 마지막 날 브런치 코스로 넣기 좋습니다.",
    distance: "숙소 기준 약 1.1km권",
    transit: "도보 15~20분 또는 지하철 1정거장 느낌",
    combo: "니시진역 적응 + 간식 + 이자카야 탐색용",
    price: "무료",
    map: "https://www.google.com/maps/dir/?api=1&origin=Nishijin+Station+Fukuoka&destination=Nishijin+Shopping+Street+Fukuoka&travelmode=walking",
  },
  {
    name: "모모치 해변",
    area: "사와라구 대표 바다권",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Seaside-momochi%2020130927.jpg",
    summary: "숙소 위치의 가장 큰 장점 중 하나입니다. 텐진보다 덜 복잡한데 바다와 노을 만족도가 높아서, 첫날이나 둘째 날 저녁에 넣으면 체감이 확 좋습니다.",
    distance: "숙소 기준 약 3km 안팎",
    transit: "버스/택시/자전거 계열로 접근 편함",
    combo: "모모치 해변 + 후쿠오카타워 + 야경",
    price: "무료",
    map: "https://www.google.com/maps/dir/?api=1&origin=Nishijin+Station+Fukuoka&destination=Seaside+Momochi+Beach+Park&travelmode=transit",
  },
  {
    name: "후쿠오카타워",
    area: "모모치 전망 포인트",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fukuoka%20Tower%202024%2001.jpg",
    summary: "해변과 같이 보면 효율이 좋은 대표 관광지입니다. 낮보다 해질 무렵 이후가 확실히 더 좋고, 첫 방문 팀이면 무난하게 만족도가 높습니다.",
    distance: "숙소 기준 약 3.5km권",
    transit: "버스 1번에 묶기 좋음",
    combo: "해변 산책 후 전망대 입장",
    price: "1인 1,000엔",
    map: "https://www.google.com/maps/dir/?api=1&origin=Nishijin+Station+Fukuoka&destination=Fukuoka+Tower&travelmode=transit",
  },
  {
    name: "후쿠오카 시박물관",
    area: "모모치 실내 카드",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fukuoka%20city%20museum%2001.JPG",
    summary: "날씨가 애매할 때 좋은 실내 카드입니다. 후쿠오카라는 도시의 역사와 지역색을 짧게 넣어주기 좋아서 팀에 박물관 좋아하는 사람이 한 명만 있어도 괜찮습니다.",
    distance: "숙소 기준 약 3.1km권",
    transit: "타워 가는 날 함께 묶기 쉬움",
    combo: "박물관 + 팀랩 또는 박물관 + 타워",
    price: "상설전은 비교적 저렴",
    map: "https://www.google.com/maps/dir/?api=1&origin=Nishijin+Station+Fukuoka&destination=Fukuoka+City+Museum&travelmode=transit",
  },
  {
    name: "오호리공원",
    area: "도심 힐링 카드",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ohori%20Park%20%2830681292984%29.jpg",
    summary: "숙소에서 아주 붙어 있진 않지만 가는 난이도는 낮습니다. 아침 산책, 카페, 사진, 여유까지 골고루 잡을 수 있어서 남자들끼리 가도 생각보다 만족도가 높습니다.",
    distance: "숙소 기준 약 4km권",
    transit: "지하철 이동 쉬움",
    combo: "오호리공원 + 텐진 + 저녁 이자카야",
    price: "무료",
    map: "https://www.google.com/maps/dir/?api=1&origin=Nishijin+Station+Fukuoka&destination=Ohori+Park+Fukuoka&travelmode=transit",
  },
  {
    name: "유센테이 공원",
    area: "조용한 정원 산책",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yusentei%20Park%204.jpg",
    summary: "관광객 밀도가 낮아 한적하게 걷기 좋습니다. 팀이 너무 붐비는 곳보다 조용한 일본식 정원 감성을 원할 때 대안으로 아주 좋습니다.",
    distance: "숙소 기준 약 4.5km권",
    transit: "버스나 택시가 편한 편",
    combo: "브런치 + 정원 산책 + 텐진 이동",
    price: "입장권 소액",
    map: "https://www.google.com/maps/dir/?api=1&origin=Nishijin+Station+Fukuoka&destination=Yusentei+Park+Fukuoka&travelmode=transit",
  },
];

const dayTours = [
  {
    name: "유후인 & 아프리칸 사파리 일일투어",
    badge: "사파리 버전",
    feature: true,
    description: "유후인의 감성 산책에 `아프리칸 사파리`를 얹은 버전입니다. 유노츠보 거리, 카페, 긴린코 호수 분위기를 본 뒤 사파리의 생동감을 더하는 구조라 사진과 체험 둘 다 챙기고 싶은 팀에 잘 맞습니다.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Kinrin%2020221022-2.jpg",
    price: "WAUG 쿠폰가 ₩25,992부터",
    duration: "약 8시간",
    meeting: "하카타역 치쿠시구치 오리엔탈호텔 로손 앞",
    time: "미팅 08:10 / 출발 08:30",
    included: "전용 차량, 기사, 한국인 가이드",
    excluded: "점심, 입장료, 개인경비, 여행자보험",
    fit: "유후인만 보면 심심할까 걱정되는 팀, 사진 + 체험형 선호 팀",
    note: "WAUG 리뷰에서는 사파리와 가이드 진행 만족도가 특히 좋게 언급됐습니다.",
    map: "https://maps.app.goo.gl/dK8bDBvVMFJkA2ax8",
    link: "https://www.waug.com/ko/activities/151520",
  },
  {
    name: "유후인 · 벳부 · 가마도지옥 · 다자이후 버스투어",
    badge: "꽉 채운 종합 버전",
    feature: false,
    description: "하루에 `유후인 + 벳부 + 가마도지옥 + 다자이후`를 묶는 진짜 빡빡한 버전입니다. 후쿠오카 근교의 대표 코스를 한 번에 찍고 싶은 사람에겐 효율이 좋지만, 이동량이 많아 여유로운 감성 여행과는 결이 다릅니다.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dazaifu%20Tenmangu%20Romon.JPG",
    price: "WAUG 페이지 기준 판매중",
    duration: "상품 정보상 장시간 투어",
    meeting: "하카타역 치쿠시구치 오리엔탈호텔 로손 앞",
    time: "미팅 07:20 / 출발 07:40",
    included: "왕복 교통, 진행 가이드 중심",
    excluded: "세부 입장료/식비/개인경비 별도 확인 필요",
    fit: "후쿠오카 근교 대표 포인트를 하루에 많이 찍고 싶은 팀",
    note: "플로랄빌리지 오픈런이 강조되어 있어 아침 출발이 더 이릅니다.",
    map: "https://maps.app.goo.gl/dK8bDBvVMFJkA2ax8",
    link: "https://www.waug.com/ko/activities/137220",
  },
];

const cityContents = [
  {
    name: "teamLab Forest Fukuoka",
    area: "실내 체험 / 사진",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mizuho%20PayPay%20dome%20Fukuoka%202025.jpg",
    summary: "비 오는 날, 더운 날, 혹은 사진 남기고 싶은 날 가장 안정적인 카드입니다. 후쿠오카타워와 모모치권 일정과 붙이기 좋아 하루의 완성도가 올라갑니다.",
    distance: "숙소에서 모모치권 연계",
    transit: "타워와 같은 날 편성 추천",
    combo: "후쿠오카타워 + 팀랩 + 텐진 저녁",
    price: "1인 2,400엔부터",
    map: "https://www.google.com/maps/search/?api=1&query=teamLab+Forest+Fukuoka",
  },
  {
    name: "텐진 쇼핑 & 밤거리",
    area: "쇼핑 / 술자리",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fukuoka%20in%20the%20night.jpg",
    summary: "후쿠오카에서 가장 체감 중심지에 가까운 구역입니다. 남자 넷이서 돌아다니기에도 편하고, 술자리나 2차로 연결하기 쉬워서 밤 일정의 안정감이 좋습니다.",
    distance: "숙소 기준 지하철 이동권",
    transit: "지하철 직결로 편함",
    combo: "오호리공원 + 텐진 + 나카스",
    price: "입장 무료",
    map: "https://www.google.com/maps/dir/?api=1&origin=Nishijin+Station+Fukuoka&destination=Tenjin+Fukuoka&travelmode=transit",
  },
  {
    name: "나카스 야타이",
    area: "후쿠오카 밤분위기",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yatai.jpg",
    summary: "먹는 것보다 `분위기 소비`의 성격이 강합니다. 라멘이나 교자 한 번쯤 먹으며 강변 밤공기를 느끼기 좋지만, 붐비는 시간대는 웨이팅을 생각해야 합니다.",
    distance: "숙소 기준 시내권 이동",
    transit: "텐진과 묶기 좋음",
    combo: "텐진 저녁 후 2차 감성 코스",
    price: "1인 1,500 ~ 3,500엔 예상",
    map: "https://www.google.com/maps/search/?api=1&query=Nakasu+Yatai+Fukuoka",
  },
  {
    name: "다자이후 텐만구",
    area: "반나절 근교",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dazaifu%20Tenmangu%20Romon.JPG",
    summary: "유후인까지 가는 건 과한데 근교 맛은 보고 싶다면 가장 좋은 절충안입니다. 후쿠오카 시내 일정과 병행하기 쉬워 체력 배분 면에서도 좋습니다.",
    distance: "숙소에서 텐진 경유 전철권",
    transit: "전철 연결 안정적",
    combo: "오전 다자이후 + 오후 텐진 쇼핑",
    price: "신사 입장 무료",
    map: "https://www.google.com/maps/search/?api=1&query=Dazaifu+Tenmangu",
  },
];

const foodGifts = [
  {
    name: "모츠나베",
    area: "저녁 메인 식사",
    image: "./assets/photos/motsunabe.jpg",
    summary: "남자 넷이서 가장 만족도 높게 먹기 쉬운 메뉴입니다. 술자리와도 잘 맞고, 후쿠오카 왔다는 느낌이 확 나는 대표 음식이라 한 번은 꼭 넣는 걸 추천합니다.",
    distance: "니시진/텐진/하카타 선택 폭 넓음",
    transit: "저녁 중심지에 따라 선택",
    combo: "둘째 날이나 셋째 날 메인 저녁",
    price: "1인 2,000 ~ 3,500엔",
    map: "https://www.google.com/maps/search/?api=1&query=Motsunabe+Fukuoka",
  },
  {
    name: "하카타 라멘",
    area: "가벼운 한 끼",
    image: "./assets/photos/hakata-ramen.jpg",
    summary: "첫날 점심이나 마지막 날 마무리 식사로 가장 안정적입니다. 회전이 빨라 일정에 부담이 적고, 가격도 비교적 무난합니다.",
    distance: "숙소권/하카타/텐진 어디든 가능",
    transit: "짧은 끼니용",
    combo: "이동 전후 한 끼",
    price: "1인 900 ~ 1,500엔",
    map: "https://www.google.com/maps/search/?api=1&query=Hakata+Ramen+Fukuoka",
  },
  {
    name: "멘타이코 과자 & 하카타 토리몽",
    area: "기념품",
    image: "./assets/photos/mentaiko.jpg",
    summary: "회사나 지인에게 나눠주기 무난한 선물군입니다. 부담 없는 가격대라 여러 개 사기 좋고, 하카타역이나 공항에서 마지막에 몰아사기 편합니다.",
    distance: "하카타역 / 공항 구매 편함",
    transit: "마지막 날 구매 추천",
    combo: "체크아웃 후 하카타역 정리 쇼핑",
    price: "박스당 수백엔~수천엔",
    map: "https://www.google.com/maps/search/?api=1&query=Hakata+Station+Souvenir",
  },
  {
    name: "드럭스토어 쇼핑",
    area: "실속 기념품",
    image: "./assets/photos/drugstore.jpg",
    summary: "간식, 파스, 생활용품, 화장품까지 실속형 선물은 여기서 정리하는 게 좋습니다. 니시진이나 텐진 근처에서도 쉽게 찾을 수 있습니다.",
    distance: "숙소 근처도 탐색 가능",
    transit: "로컬권에서도 확보 가능",
    combo: "첫날 위치 파악 겸 사전 답사",
    price: "구매 품목별 상이",
    map: "https://www.google.com/maps/search/?api=1&query=Drugstore+Fujisaki+Fukuoka",
  },
];

const practicalTips = [
  {
    name: "교통 패턴",
    area: "이동 팁",
    image: "./icon.svg",
    summary: "니시진역 베이스라면 공항-하카타-텐진-니시진 축이 핵심입니다. 모모치권은 버스가 더 편한 경우가 많고, 밤 늦게는 택시 4인 분담이 오히려 효율적일 수 있습니다.",
    distance: "지하철 + 버스 혼합 추천",
    transit: "하루 이동 많은 날은 1일권 검토",
    combo: "니시진역 이동 + 모모치 버스 + 야간 택시",
    price: "패스/단건 비교 필요",
    map: "https://www.google.com/maps/search/?api=1&query=Nishijin+Station+Fukuoka",
  },
  {
    name: "결제와 현금",
    area: "실전 팁",
    image: "./icon.svg",
    summary: "대부분 카드와 간편결제가 되지만, 야타이·소규모 상점·일부 버스 결제 때문에 소액 현금을 조금 갖고 있는 편이 안전합니다.",
    distance: "지갑 분산 추천",
    transit: "카드 + 현금 병행",
    combo: "편의점 ATM 활용",
    price: "소액 현금 1인 5천엔 안팎 권장",
    map: "https://www.google.com/maps/search/?api=1&query=ATM+Nishijin+Fukuoka",
  },
  {
    name: "예약 우선순위",
    area: "예약 팁",
    image: "./icon.svg",
    summary: "유후인 투어, 인기 모츠나베집, 팀랩 시간대, 유후인노모리 같은 건 미리 잡는 편이 좋습니다. 반대로 라멘·드럭스토어·기념품은 현장 대응으로 충분합니다.",
    distance: "사전 예약 효율 높음",
    transit: "출발 전 정리 추천",
    combo: "투어 + 저녁식당 우선 예약",
    price: "예약비는 상품별 상이",
    map: "https://www.google.com/maps/search/?api=1&query=Hakata+Station",
  },
  {
    name: "쇼핑 타이밍",
    area: "기념품 전략",
    image: "./icon.svg",
    summary: "먹는 기념품은 마지막 날 하카타역이나 공항에서 몰아사는 게 편하고, 드럭스토어 품목은 첫날 가격만 파악해뒀다가 마지막에 정리하는 방식이 실패가 적습니다.",
    distance: "첫날 탐색, 마지막 날 구매",
    transit: "하카타역 집중 구매 추천",
    combo: "숙소권 탐색 + 마지막 정산 쇼핑",
    price: "짐 무게 체크 필요",
    map: "https://www.google.com/maps/search/?api=1&query=Hakata+Station+Souvenir",
  },
  {
    name: "밤 귀가 팁",
    area: "야간 이동",
    image: "./icon.svg",
    summary: "텐진이나 나카스에서 늦게까지 있으면 마지막 지하철 시간을 미리 보고 움직이는 편이 좋습니다. 넷이면 택시 분담이 생각보다 괜찮고, 숙소가 주택가라 너무 늦은 밤에는 조용히 들어가는 게 편합니다.",
    distance: "야간엔 시간표 우선 확인",
    transit: "막차 전엔 지하철, 이후엔 택시 분담",
    combo: "나카스 2차 후 귀가 체크",
    price: "택시 분담 시 부담 완화",
    map: "https://www.google.com/maps/search/?api=1&query=Nishijin+Station+Fukuoka",
  },
  {
    name: "편의점 · ATM · 장보기",
    area: "숙소 생활",
    image: "./icon.svg",
    summary: "체크인 직후에는 물, 맥주, 야식, 아침거리, 세면용품부터 먼저 정리해두면 동선이 훨씬 편합니다. 현금이 모자라면 편의점 ATM이 가장 무난합니다.",
    distance: "숙소권 첫 동선에서 확인 추천",
    transit: "도보 생활권 체크",
    combo: "체크인 후 바로 장보기",
    price: "필요한 만큼만 소분 구매",
    map: "https://www.google.com/maps/search/?api=1&query=Convenience+store+Nishijin+Fukuoka",
  },
];

const naverReviews = [
  {
    name: "니시진역 여행 후기",
    area: "네이버 블로그 검색",
    image: "./icon.svg",
    summary: "니시진역 주변 분위기, 숙소 동선, 실제 체감 이동 후기를 한 번에 보기 좋은 검색입니다.",
    distance: "키워드: 후쿠오카 니시진역 여행",
    transit: "숙소권 전반 리뷰",
    combo: "동네 분위기 먼저 확인할 때",
    price: "검색 링크",
    map: "https://search.naver.com/search.naver?where=blog&query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EB%8B%88%EC%8B%9C%EC%A7%84%EC%97%AD+%EC%97%AC%ED%96%89",
    cta: "블로그 보기",
  },
  {
    name: "니시진역 숙소 후기",
    area: "네이버 블로그 검색",
    image: "./icon.svg",
    summary: "니시진역 근처 숙소의 조용함, 이동 편의, 체크인 경험 같은 실사용 후기를 찾기 좋습니다.",
    distance: "키워드: 후쿠오카 니시진역 숙소",
    transit: "숙소 리뷰 중심",
    combo: "우리 숙소권 감 잡기",
    price: "검색 링크",
    map: "https://search.naver.com/search.naver?where=blog&query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EB%8B%88%EC%8B%9C%EC%A7%84%EC%97%AD+%EC%88%99%EC%86%8C",
    cta: "블로그 보기",
  },
  {
    name: "니시진 맛집 후기",
    area: "네이버 블로그 검색",
    image: "./icon.svg",
    summary: "니시진 쪽 로컬 식당, 카페, 가볍게 들를 만한 곳 위주로 후기들을 모아보기 좋습니다.",
    distance: "키워드: 후쿠오카 니시진 맛집",
    transit: "동네 먹거리 탐색",
    combo: "첫날/마지막날 식당 찾기",
    price: "검색 링크",
    map: "https://search.naver.com/search.naver?where=blog&query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EB%8B%88%EC%8B%9C%EC%A7%84+%EB%A7%9B%EC%A7%91",
    cta: "블로그 보기",
  },
  {
    name: "모모치 해변 · 니시진 동선 후기",
    area: "네이버 블로그 검색",
    image: "./icon.svg",
    summary: "니시진에서 모모치, 후쿠오카타워, 해변권을 어떻게 묶는지 본 사람들 후기 중심으로 보기 좋습니다.",
    distance: "키워드: 후쿠오카 모모치 니시진",
    transit: "바다권 동선 참고",
    combo: "둘째 날 계획 세울 때",
    price: "검색 링크",
    map: "https://search.naver.com/search.naver?where=blog&query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EB%AA%A8%EB%AA%A8%EC%B9%98+%EB%8B%88%EC%8B%9C%EC%A7%84",
    cta: "블로그 보기",
  },
];

const sampleFlow = [
  {
    title: "첫날",
    text: "숙소 체크인 후 니시진역 주변 적응, 니시진 상점가 산책, 저녁엔 모모치 해변이나 니시진 이자카야로 가볍게 시작.",
  },
  {
    title: "둘째 날",
    text: "오호리공원으로 아침 열고, 모모치권으로 넘어가 후쿠오카타워와 팀랩 또는 박물관을 묶은 뒤 텐진 저녁.",
  },
  {
    title: "셋째 날",
    text: "유후인 사파리 투어를 넣거나, 시내파면 다자이후 + 텐진 쇼핑 + 나카스 야타이로 구성.",
  },
];

const sources = [
  {
    label: "WAUG - 후쿠오카 하카타역 출발: 유후인&아프리칸 사파리 일일투어",
    url: "https://www.waug.com/ko/activities/151520",
  },
  {
    label: "WAUG - 후쿠오카 유후인 버스 투어: 벳부, 가마도지옥, 다자이후 텐만구, 유후다케",
    url: "https://www.waug.com/ko/activities/137220",
  },
  {
    label: "분양알리미 UI 참고",
    url: "https://app.bunyangi.com/index.html",
  },
  {
    label: "Airbnb 숙소 페이지",
    url: "https://www.airbnb.jp/rooms/1500501715678051555",
  },
  {
    label: "Wikimedia Commons 공개 이미지 모음",
    url: "https://commons.wikimedia.org/",
  },
];

function cardTemplate(item) {
  return `
    <article class="card">
      <div class="card__image">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.parentElement.innerHTML='&lt;div class=&quot;card__image card__image--fallback&quot;&gt;${item.name}&lt;/div&gt;';">
      </div>
      <div class="card__head">
        <div>
          <span class="panel__label">${item.area}</span>
          <h3>${item.name}</h3>
        </div>
        <span class="badge">${item.price}</span>
      </div>
      <p class="card__summary">${item.summary}</p>
      <details>
        <summary>자세히 보기</summary>
        <div class="meta-list">
          <div class="meta-row"><strong>거리감</strong><span>${item.distance}</span></div>
          <div class="meta-row"><strong>이동</strong><span>${item.transit}</span></div>
          <div class="meta-row"><strong>추천 조합</strong><span>${item.combo}</span></div>
        </div>
      </details>
      <div class="card__footer">
        <a class="map-link" href="${item.map}" target="_blank" rel="noreferrer">${item.cta || "Google 지도"}</a>
      </div>
    </article>
  `;
}

function tourTemplate(item) {
  return `
    <article class="tour-card ${item.feature ? "tour-card--feature" : ""}">
      <div class="card__image">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.parentElement.innerHTML='&lt;div class=&quot;card__image card__image--fallback&quot;&gt;${item.name}&lt;/div&gt;';">
      </div>
      <div class="tour-card__head">
        <div>
          <span class="panel__label">${item.badge}</span>
          <h3>${item.name}</h3>
        </div>
        <span class="badge">${item.price}</span>
      </div>
      <p>${item.description}</p>
      <div class="tour-card__table">
        <div><strong>집결</strong><span>${item.meeting}</span></div>
        <div><strong>시간</strong><span>${item.time}</span></div>
        <div><strong>소요</strong><span>${item.duration}</span></div>
        <div><strong>포함</strong><span>${item.included}</span></div>
        <div><strong>불포함</strong><span>${item.excluded}</span></div>
        <div><strong>추천팀</strong><span>${item.fit}</span></div>
      </div>
      <ul>
        <li>${item.note}</li>
        <li>둘 다 WAUG 페이지 기준 투어 7일 전 100% 환불 가능, 이후 취소 불가입니다.</li>
      </ul>
      <div class="tour-card__footer">
        <a class="map-link" href="${item.map}" target="_blank" rel="noreferrer">집결지 지도</a>
        <a class="pill" href="${item.link}" target="_blank" rel="noreferrer">상품 보기</a>
      </div>
    </article>
  `;
}

function sampleTemplate(item) {
  return `
    <article class="sample-card">
      <span class="panel__label">${item.title}</span>
      <h3>${item.title} 추천 동선</h3>
      <p>${item.text}</p>
    </article>
  `;
}

document.getElementById("stay-grid").innerHTML = staySpots.map(cardTemplate).join("");
document.getElementById("tour-compare").innerHTML = dayTours.map(tourTemplate).join("");
document.getElementById("city-grid").innerHTML = cityContents.map(cardTemplate).join("");
document.getElementById("food-grid").innerHTML = foodGifts.map(cardTemplate).join("");
document.getElementById("tips-grid").innerHTML = practicalTips.map(cardTemplate).join("");
document.getElementById("review-grid").innerHTML = naverReviews.map(cardTemplate).join("");
document.getElementById("sample-board").innerHTML = sampleFlow.map(sampleTemplate).join("");
document.getElementById("source-links").innerHTML = sources
  .map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`)
  .join("");

const installNote = document.getElementById("install-note");
const shareButton = document.getElementById("share-button");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      if (installNote) {
        installNote.textContent = "오프라인 저장 등록은 실패했지만, 페이지 자체는 그대로 사용할 수 있습니다.";
      }
    });
  });
}

if (shareButton) {
  shareButton.addEventListener("click", async () => {
    const shareData = {
      title: "맞닿음 모임",
      text: "후쿠오카 여행 카테고리형 가이드",
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User dismissed share dialog.
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      if (installNote) {
        installNote.textContent = "공유 링크를 클립보드에 복사했습니다.";
      }
    } catch {
      if (installNote) {
        installNote.textContent = "이 페이지 주소를 직접 복사해서 공유해 주세요.";
      }
    }
  });
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  if (installNote) {
    installNote.textContent = "지원되는 휴대폰 브라우저에서는 메뉴에서 '홈 화면에 추가'를 선택하면 앱처럼 설치할 수 있습니다.";
  }
});
