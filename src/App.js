import React from 'react';

const KoreanHistory = () => {

  // 시대 구분 (1세기 단위)
  const centuries = [
    { year: "BC 24C", label: "BC 24C" },
    { year: "BC 23C", label: "BC 23C" },
    { year: "BC 22C", label: "BC 22C" },
    { year: "BC 21C", label: "BC 21C" },
    { year: "BC 20C", label: "BC 20C" },
    { year: "BC 19C", label: "BC 19C" },
    { year: "BC 18C", label: "BC 18C" },
    { year: "BC 17C", label: "BC 17C" },
    { year: "BC 16C", label: "BC 16C" },
    { year: "BC 15C", label: "BC 15C" },
    { year: "BC 14C", label: "BC 14C" },
    { year: "BC 13C", label: "BC 13C" },
    { year: "BC 12C", label: "BC 12C" },
    { year: "BC 11C", label: "BC 11C" },
    { year: "BC 10C", label: "BC 10C" },
    { year: "BC 9C", label: "BC 9C" },
    { year: "BC 8C", label: "BC 8C" },
    { year: "BC 7C", label: "BC 7C" },
    { year: "BC 6C", label: "BC 6C" },
    { year: "BC 5C", label: "BC 5C" },
    { year: "BC 4C", label: "BC 4C" },
    { year: "BC 3C", label: "BC 3C" },
    { year: "BC 2C", label: "BC 2C" },
    { year: "BC 1C", label: "BC 1C" },
    { year: "1C", label: "1C" },
    { year: "2C", label: "2C" },
    { year: "3C", label: "3C" },
    { year: "4C", label: "4C" },
    { year: "5C", label: "5C" },
    { year: "6C", label: "6C" },
    { year: "7C", label: "7C" },
    { year: "8C", label: "8C" },
    { year: "9C", label: "9C" },
    { year: "10C", label: "10C" },
    { year: "11C", label: "11C" },
    { year: "12C", label: "12C" },
    { year: "13C", label: "13C" },
    { year: "14C", label: "14C" },
    { year: "15C", label: "15C" },
    { year: "16C", label: "16C" },
    { year: "17C", label: "17C" },
    { year: "18C", label: "18C" },
    { year: "19C", label: "19C" },
    { year: "20C", label: "20C" },
    { year: "21C", label: "21C" }
  ];

  const states = [
    {
      name: "고조선",
      color: "bg-red-200",
      periods: [
        { start: 0, end: 22, event: "단군왕검 건국\n(BC 2333)" },
        { start: 10, end: 22, event: "청동기 문화\n8조법" },
        { start: 22, end: 22, event: "한나라 침입\n멸망 (BC 108)" }
      ]
    },
    {
      name: "부여",
      color: "bg-red-200",
      periods: [
        { start: 22, end: 28, event: "만주 송화강\n5부족 연맹" },
        { start: 24, end: 28, event: "농경·목축 발달" },
        { start: 28, end: 28, event: "고구려 흡수\n(494)" }
      ]
    },
    {
      name: "옥저",
      color: "bg-red-200",
      periods: [
        { start: 21, end: 24, event: "함경도 동해안\n동옥저·북옥저" },
        { start: 23, end: 24, event: "민며느리제\n골장제" },
        { start: 24, end: 24, event: "고구려 복속\n(56)" }
      ]
    },
    {
      name: "동예",
      color: "bg-red-200",
      periods: [
        { start: 21, end: 24, event: "강원도 동해안\n어로·수렵" },
        { start: 23, end: 24, event: "무천 제천행사\n단궁·과하마" },
        { start: 24, end: 24, event: "고구려 복속\n(56)" }
      ]
    },
    {
      name: "진국",
      color: "bg-red-200",
      periods: [
        { start: 20, end: 22, event: "한반도 남부\n초기국가" },
        { start: 21, end: 22, event: "철기문화 발달" }
      ]
    },
    {
      name: "마한",
      color: "bg-red-200",
      periods: [
        { start: 22, end: 24, event: "54개 소국\n충청·전라도\n철기문화·벼농사" },
        { start: 25, end: 26, event: "백제에\n점차 통합", color: "bg-red-100" }
      ]
    },
    {
      name: "진한",
      color: "bg-red-200",
      periods: [
        { start: 22, end: 23, event: "12개 소국\n경상북도" },
        { start: 23, end: 23, event: "사로국이\n신라로 발전" }
      ]
    },
    {
      name: "변한",
      color: "bg-red-200",
      periods: [
        { start: 22, end: 24, event: "12개 소국\n경상남도" },
        { start: 24, end: 24, event: "가야 연맹으로\n발전" }
      ]
    },
    {
      name: "가야",
      color: "bg-orange-200",
      periods: [
        { start: 24, end: 29, event: "금관가야 건국\n(42)" },
        { start: 26, end: 29, event: "6가야 연맹\n철기 생산" },
        { start: 28, end: 29, event: "가야금 제작\n(우륵)" },
        { start: 29, end: 29, event: "신라에 병합\n(562)" }
      ]
    },
    {
      name: "고구려",
      color: "bg-orange-200",
      periods: [
        { start: 23, end: 27, event: "주몽 건국\n(BC 37)" },
        { start: 27, end: 29, event: "광개토대왕\n장수왕 전성기" },
        { start: 29, end: 30, event: "평양 천도\n수·당 항쟁" },
        { start: 30, end: 30, event: "나당연합군\n멸망 (668)" }
      ]
    },
    {
      name: "백제",
      color: "bg-orange-200",
      periods: [
        { start: 23, end: 27, event: "온조왕 건국\n(BC 18)" },
        { start: 27, end: 29, event: "근초고왕 전성\n일본 교류" },
        { start: 29, end: 30, event: "사비 천도\n성왕 전사" },
        { start: 30, end: 30, event: "나당연합군\n멸망 (660)" }
      ]
    },
    {
      name: "신라",
      color: "bg-orange-200",
      periods: [
        { start: 23, end: 28, event: "박혁거세 건국\n(BC 57)" },
        { start: 28, end: 30, event: "법흥왕 불교공인\n진흥왕 영토확장" },
        { start: 30, end: 30, event: "화랑도\n삼국통일 (676)" },
        { start: 30, end: 33, event: "통일신라\n석굴암·불국사" },
        { start: 33, end: 33, event: "후삼국 혼란\n고려에 병합 (935)" }
      ]
    },
    {
      name: "발해",
      color: "bg-yellow-200",
      periods: [
        { start: 30, end: 32, event: "대조영 건국\n(698)" },
        { start: 31, end: 33, event: "해동성국\n문왕·선왕 전성기" },
        { start: 33, end: 33, event: "거란 침입\n멸망 (926)" }
      ]
    },
    {
      name: "후백제",
      color: "bg-green-200",
      periods: [
        { start: 32, end: 33, event: "견훤 건국\n전주 (892)" },
        { start: 33, end: 33, event: "왕건에게\n항복 (936)" }
      ]
    },
    {
      name: "후고구려(태봉)",
      color: "bg-green-200",
      periods: [
        { start: 33, end: 33, event: "궁예 건국 (901)\n왕건의 쿠데타 (918)" }
      ]
    },
    {
      name: "고려",
      color: "bg-green-200",
      periods: [
        { start: 33, end: 34, event: "왕건 건국\n(918)\n후삼국 통일" },
        { start: 34, end: 35, event: "광종 개혁\n성종 통치체제" },
        { start: 35, end: 36, event: "거란·여진 격퇴\n문벌귀족사회" },
        { start: 36, end: 37, event: "몽골 침입\n팔만대장경" },
        { start: 37, end: 37, event: "원 간섭기\n공민왕 개혁\n이성계 등장" }
      ]
    },
    {
      name: "조선",
      color: "bg-blue-200",
      periods: [
        { start: 37, end: 38, event: "이성계 건국\n(1392)\n한양 천도" },
        { start: 38, end: 39, event: "세종대왕\n훈민정음 (1446)" },
        { start: 39, end: 40, event: "사림파 성장\n사화 발생" },
        { start: 40, end: 41, event: "임진왜란\n(1592-1598)" },
        { start: 41, end: 42, event: "병자호란\n(1636-1637)" },
        { start: 42, end: 43, event: "숙종·영조·정조\n문예부흥" },
        { start: 43, end: 43, event: "세도정치\n민란·개화정책\n을사늑약" }
      ]
    },
    {
      name: "일제강점기",
      color: "bg-gray-300",
      periods: [
        { start: 43, end: 43, event: "한일병합 (1910)\n3·1운동 (1919)\n광복 (1945)" }
      ]
    },
    {
      name: "대한민국",
      color: "bg-indigo-200",
      periods: [
        { start: 43, end: 44, event: "정부수립 (1948)\n6·25전쟁\n산업화·민주화\nIMF극복" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          한국사 연표 (테이블)
        </h1>
        <p className="text-center text-gray-600 mb-6">
          BC 24C부터 현재까지 (BC = Before Christ, C = Century)
        </p>

        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                <th className="border border-gray-300 p-3 text-left font-bold sticky left-0 bg-indigo-600 z-10 min-w-[120px]">
                  국가/시대
                </th>
                {centuries.map((century, idx) => (
                  <th 
                    key={idx} 
                    className="border border-gray-300 p-2 text-center font-semibold text-sm min-w-[80px]"
                  >
                    {century.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {states.map((state, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-gray-50 transition-colors">
                  <td className={`border border-gray-300 p-3 font-bold ${state.color} sticky left-0 z-10`}>
                    {state.name}
                  </td>
                  {centuries.map((century, colIdx) => {
                    const event = state.periods.find(
                      p => colIdx >= p.start && colIdx <= p.end
                    );
                    const eventAtThisCol = state.periods.find(p => p.start === colIdx);
                    
                    // period에 color가 있으면 사용, 없으면 state의 기본 color 사용
                    const cellColor = event?.color || (event ? state.color : '');
                    
                    return (
                      <td
                        key={colIdx}
                        className={`border border-gray-300 p-2 text-center text-xs ${cellColor}`}
                      >
                        {eventAtThisCol && (
                          <div className="font-semibold whitespace-pre-line">
                            {eventAtThisCol.event}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            📖 읽는 법
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• 각 행은 국가를 나타냅니다</li>
            <li>• 각 칸은 1세기를 나타냅니다</li>
            <li>• 색칠된 칸은 해당 국가가 존재했던 시기입니다</li>
            <li>• 주요 사건은 해당 시기에 표기되어 있습니다</li>
            <li>• 테이블이 크므로 좌우로 스크롤하여 확인하세요</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KoreanHistory;