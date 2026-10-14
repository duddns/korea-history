// 한국사 타임라인 데이터
// startYear, endYear는 숫자로 표시 (음수는 BC)

// 현재 연도 (대한민국 종료 연도, 타임라인 끝)
const CURRENT_YEAR = new Date().getFullYear();

export const historyData = [
  {
    name: "고조선",
    startYear: -2333,
    endYear: -108,
    color: "#fecaca", // red-200
    events: [
      { year: -2333, title: "단군왕검 건국" },
      { year: -108, title: "한나라 침입으로 멸망" }
    ]
  },
  {
    name: "낙랑군",
    startYear: -108,
    endYear: 313,
    color: "#d1d5db", // gray-300
    events: [
      { year: -108, title: "한나라 군현 설치" },
      { year: 313, title: "고구려 미천왕에 축출" }
    ]
  },
  {
    name: "부여",
    startYear: -200,
    endYear: 494,
    color: "#fecaca", // red-200
    events: [
      { year: -200, title: "만주 송화강 지역 건국" },
      { year: 494, title: "고구려에 흡수" }
    ]
  },
  {
    name: "옥저",
    startYear: -300,
    endYear: 56,
    color: "#fecaca", // red-200
    events: [
      { year: -300, title: "함경도 동해안 지역" },
      { year: 56, title: "고구려에 복속" }
    ]
  },
  {
    name: "동예",
    startYear: -300,
    endYear: 56,
    color: "#fecaca", // red-200
    events: [
      { year: -300, title: "강원도 동해안 지역" },
      { year: 56, title: "고구려에 복속" }
    ]
  },
  {
    name: "진국",
    startYear: -400,
    endYear: -200,
    color: "#fecaca", // red-200
    events: [
      { year: -400, title: "한반도 남부 초기국가" },
      { year: -200, title: "마한, 진한, 변한으로 분화" }
    ]
  },
  {
    name: "마한",
    startYear: -200,
    endYear: 300,
    color: "#fecaca", // red-200
    events: [
      { year: -200, title: "54개 소국 연맹" },
      { year: 300, title: "백제에 통합" }
    ]
  },
  {
    name: "진한",
    startYear: -200,
    endYear: -57,
    color: "#fecaca", // red-200
    events: [
      { year: -200, title: "12개 소국 연맹" },
      { year: -57, title: "신라로 발전" }
    ]
  },
  {
    name: "변한",
    startYear: -200,
    endYear: 42,
    color: "#fecaca", // red-200
    events: [
      { year: -200, title: "12개 소국 연맹" },
      { year: 42, title: "가야 연맹으로 발전" }
    ]
  },
  {
    name: "가야",
    startYear: 42,
    endYear: 562,
    color: "#fed7aa", // orange-200
    events: [
      { year: 42, title: "금관가야 건국" },
      { year: 562, title: "신라에 병합" }
    ]
  },
  {
    name: "고구려",
    startYear: -37,
    endYear: 668,
    color: "#fed7aa", // orange-200
    events: [
      { year: -37, title: "주몽 건국" },
      { year: 391, title: "광개토대왕 즉위" },
      { year: 427, title: "평양 천도" },
      { year: 668, title: "나당연합군에 멸망" }
    ]
  },
  {
    name: "백제",
    startYear: -18,
    endYear: 660,
    color: "#fed7aa", // orange-200
    events: [
      { year: -18, title: "온조왕 건국" },
      { year: 346, title: "근초고왕 즉위" },
      { year: 538, title: "사비 천도" },
      { year: 660, title: "나당연합군에 멸망" }
    ]
  },
  {
    name: "신라",
    startYear: -57,
    endYear: 935,
    color: "#fed7aa", // orange-200
    events: [
      { year: -57, title: "박혁거세 건국" },
      { year: 514, title: "법흥왕 불교 공인" },
      { year: 676, title: "삼국통일" },
      { year: 935, title: "고려에 병합" }
    ]
  },
  {
    name: "발해",
    startYear: 698,
    endYear: 926,
    color: "#fef08a", // yellow-200
    events: [
      { year: 698, title: "대조영 건국" },
      { year: 926, title: "거란에 멸망" }
    ]
  },
  {
    name: "후백제",
    startYear: 892,
    endYear: 936,
    color: "#bbf7d0", // green-200
    events: [
      { year: 892, title: "견훤 건국" },
      { year: 936, title: "고려에 항복" }
    ]
  },
  {
    name: "후고구려(태봉)",
    startYear: 901,
    endYear: 918,
    color: "#bbf7d0", // green-200
    events: [
      { year: 901, title: "궁예 건국" },
      { year: 918, title: "왕건의 쿠데타" }
    ]
  },
  {
    name: "고려",
    startYear: 918,
    endYear: 1392,
    color: "#bbf7d0", // green-200
    events: [
      { year: 918, title: "왕건 건국" },
      { year: 936, title: "후삼국 통일" },
      { year: 1231, title: "몽골 침입 시작" },
      { year: 1392, title: "조선 건국으로 종료" }
    ]
  },
  {
    name: "조선",
    startYear: 1392,
    endYear: 1897,
    color: "#bfdbfe", // blue-200
    events: [
      { year: 1392, title: "이성계 건국" },
      { year: 1446, title: "훈민정음 반포" },
      { year: 1592, title: "임진왜란" },
      { year: 1897, title: "대한제국 선포" }
    ]
  },
  {
    name: "대한제국",
    startYear: 1897,
    endYear: 1910,
    color: "#bfdbfe", // blue-200
    events: [
      { year: 1897, title: "고종 황제 즉위" },
      { year: 1905, title: "을사늑약" },
      { year: 1910, title: "한일병합으로 멸망" }
    ]
  },
  {
    name: "일제강점기",
    startYear: 1910,
    endYear: 1945,
    color: "#d1d5db", // gray-300
    events: [
      { year: 1910, title: "한일병합" },
      { year: 1919, title: "3·1운동" },
      { year: 1945, title: "광복" }
    ]
  },
  {
    name: "대한민국",
    startYear: 1948,
    endYear: CURRENT_YEAR,
    color: "#c7d2fe", // indigo-200
    events: [
      { year: 1948, title: "대한민국 정부 수립" },
      { year: 1950, title: "6·25 전쟁" },
      { year: 1988, title: "서울 올림픽" },
      { year: CURRENT_YEAR, title: "현재" }
    ]
  }
];

// 타임라인 범위
export const TIME_RANGE = {
  minYear: -2333,
  maxYear: CURRENT_YEAR
};
