import React, { useEffect, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { historyData, TIME_RANGE } from '../data/historyData';

const Timeline = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // 타임라인 영역 너비 측정 (최소 배율 계산용)
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // SVG 설정
  const TIMELINE_HEIGHT = 60; // 각 국가 바의 높이
  const MARGIN_LEFT = 200; // 국가명 공간
  const MARGIN_TOP = 80; // 상단 여백 (시간축 표시용)
  const MARGIN_RIGHT = 50;
  const MARGIN_BOTTOM = 50;

  // 전체 년도 범위
  const totalYears = TIME_RANGE.maxYear - TIME_RANGE.minYear;

  // SVG 전체 크기 (픽셀 단위, 년도당 2픽셀로 시작)
  const PIXELS_PER_YEAR = 2;
  const timelineWidth = totalYears * PIXELS_PER_YEAR;
  const timelineHeight = historyData.length * TIMELINE_HEIGHT;

  const svgWidth = MARGIN_LEFT + timelineWidth + MARGIN_RIGHT;
  const svgHeight = MARGIN_TOP + timelineHeight + MARGIN_BOTTOM;

  // 최소 배율: 그래프 전체가 화면 너비에 맞는 배율
  const MAX_SCALE = 5;
  const minScale = containerWidth > 0 ? Math.min(containerWidth / svgWidth, 1) : 1;

  // 년도를 X 좌표로 변환
  const yearToX = (year) => {
    return MARGIN_LEFT + ((year - TIME_RANGE.minYear) / totalYears) * timelineWidth;
  };

  // BC/AD 표시 함수
  const formatYear = (year) => {
    if (year < 0) {
      return `BC ${Math.abs(year)}`;
    }
    return `AD ${year}`;
  };

  // 시간축 눈금 생성 (100년 단위)
  const generateTimeMarkers = () => {
    const markers = [];
    const interval = 100; // 100년 단위

    let year = Math.ceil(TIME_RANGE.minYear / interval) * interval;
    while (year <= TIME_RANGE.maxYear) {
      markers.push(year);
      year += interval;
    }

    return markers;
  };

  const timeMarkers = generateTimeMarkers();

  // 마우스 이동 핸들러
  const handleMouseMove = (e, state) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setHoveredState(state);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-full mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          역사 타임라인
        </h1>
        <p className="text-center text-gray-600 mb-6">
          {formatYear(TIME_RANGE.minYear)} ~ {formatYear(TIME_RANGE.maxYear)} | 마우스 휠로 확대/축소 | 드래그로 이동
        </p>

        {/* 컨트롤 안내 */}
        <div className="mb-4 p-4 bg-white rounded-lg shadow-md text-center">
          <p className="text-sm text-gray-700">
            🖱️ <strong>확대/축소:</strong> 마우스 휠 |
            👆 <strong>이동:</strong> 드래그 |
            📍 <strong>상세정보:</strong> 바에 마우스 올리기
          </p>
        </div>

        {/* 타임라인 영역 */}
        <div className="bg-white rounded-lg shadow-lg" ref={containerRef} style={{ width: '100%', height: '700px', overflow: 'hidden' }}>
          <TransformWrapper
            initialScale={1}
            minScale={minScale}
            maxScale={MAX_SCALE}
            centerOnInit={false}
            limitToBounds={true}
            wheel={{
              step: 0.001,
              disabled: false
            }}
            panning={{
              disabled: false,
              velocityDisabled: false
            }}
          >
            <TransformComponent
              wrapperStyle={{
                width: '100%',
                height: '100%'
              }}
            >
              <svg
                width={svgWidth}
                height={svgHeight}
                style={{ display: 'block' }}
              >
                {/* 배경 그리드 (수직선 - 100년 단위) */}
                {timeMarkers.map((year) => (
                  <line
                    key={`grid-${year}`}
                    x1={yearToX(year)}
                    y1={MARGIN_TOP}
                    x2={yearToX(year)}
                    y2={MARGIN_TOP + timelineHeight}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                  />
                ))}

                {/* 시간축 상단 */}
                <line
                  x1={MARGIN_LEFT}
                  y1={MARGIN_TOP - 10}
                  x2={MARGIN_LEFT + timelineWidth}
                  y2={MARGIN_TOP - 10}
                  stroke="#374151"
                  strokeWidth="2"
                />

                {/* 시간축 눈금 및 라벨 */}
                {timeMarkers.map((year) => (
                  <g key={`marker-${year}`}>
                    {/* 눈금 */}
                    <line
                      x1={yearToX(year)}
                      y1={MARGIN_TOP - 10}
                      x2={yearToX(year)}
                      y2={MARGIN_TOP - 5}
                      stroke="#374151"
                      strokeWidth="2"
                    />
                    {/* 년도 표시 */}
                    <text
                      x={yearToX(year)}
                      y={MARGIN_TOP - 15}
                      textAnchor="middle"
                      fontSize="12"
                      fill="#374151"
                      fontWeight="600"
                    >
                      {formatYear(year)}
                    </text>
                  </g>
                ))}

                {/* 국가별 타임라인 바 */}
                {historyData.map((state, index) => {
                  const y = MARGIN_TOP + index * TIMELINE_HEIGHT;
                  const x1 = yearToX(state.startYear);
                  const x2 = yearToX(state.endYear);
                  const barWidth = x2 - x1;

                  return (
                    <g key={state.name}>
                      {/* 국가명 배경 */}
                      <rect
                        x={0}
                        y={y}
                        width={MARGIN_LEFT - 10}
                        height={TIMELINE_HEIGHT}
                        fill="#f9fafb"
                        stroke="#e5e7eb"
                        strokeWidth="1"
                      />

                      {/* 국가명 */}
                      <text
                        x={MARGIN_LEFT - 20}
                        y={y + TIMELINE_HEIGHT / 2}
                        textAnchor="end"
                        dominantBaseline="middle"
                        fontSize="14"
                        fontWeight="bold"
                        fill="#1f2937"
                      >
                        {state.name}
                      </text>

                      {/* 타임라인 바 */}
                      <rect
                        x={x1}
                        y={y + 10}
                        width={barWidth}
                        height={TIMELINE_HEIGHT - 20}
                        fill={state.color}
                        stroke="#374151"
                        strokeWidth="1"
                        rx="4"
                        onMouseEnter={(e) => handleMouseMove(e, state)}
                        onMouseMove={(e) => handleMouseMove(e, state)}
                        onMouseLeave={() => setHoveredState(null)}
                        style={{ cursor: 'pointer' }}
                        opacity={hoveredState === state ? 1 : 0.85}
                      />

                      {/* 국가명을 바 위에도 표시 (바가 충분히 길 경우) */}
                      {barWidth > 100 && (
                        <text
                          x={x1 + barWidth / 2}
                          y={y + TIMELINE_HEIGHT / 2}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontSize="12"
                          fontWeight="600"
                          fill="#1f2937"
                          pointerEvents="none"
                        >
                          {state.name}
                        </text>
                      )}

                      {/* 시작/종료 년도 표시 */}
                      {barWidth > 200 && (
                        <>
                          <text
                            x={x1 + 5}
                            y={y + TIMELINE_HEIGHT - 15}
                            fontSize="10"
                            fill="#4b5563"
                            pointerEvents="none"
                          >
                            {formatYear(state.startYear)}
                          </text>
                          <text
                            x={x2 - 5}
                            y={y + TIMELINE_HEIGHT - 15}
                            textAnchor="end"
                            fontSize="10"
                            fill="#4b5563"
                            pointerEvents="none"
                          >
                            {formatYear(state.endYear)}
                          </text>
                        </>
                      )}
                    </g>
                  );
                })}
              </svg>
            </TransformComponent>
          </TransformWrapper>
        </div>

        {/* 툴팁 (hover 시 상세 정보 표시) */}
        {hoveredState && (
          <div
            className="fixed bg-white border-2 border-gray-300 rounded-lg shadow-xl p-4 pointer-events-none z-50"
            style={{
              left: `${mousePosition.x + 20}px`,
              top: `${mousePosition.y + 20}px`,
              maxWidth: '300px'
            }}
          >
            <h3 className="font-bold text-lg mb-2 text-gray-800">
              {hoveredState.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              <strong>존속 기간:</strong>{' '}
              {formatYear(hoveredState.startYear)} ~ {formatYear(hoveredState.endYear)}
              <br />
              <strong>기간:</strong> {hoveredState.endYear - hoveredState.startYear}년
            </p>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <p className="text-sm font-semibold text-gray-700 mb-1">주요 사건:</p>
              <ul className="text-xs text-gray-600 space-y-1">
                {hoveredState.events.map((event, idx) => (
                  <li key={idx}>
                    • {formatYear(event.year)}: {event.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 안내 정보 */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            사용 가이드
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• 각 수평 바는 국가의 존속 기간을 나타냅니다</li>
            <li>• 색상은 시대별로 구분되어 있습니다</li>
            <li>• 마우스 휠을 사용하여 확대/축소할 수 있습니다</li>
            <li>• 드래그하여 타임라인을 이동할 수 있습니다</li>
            <li>• 바에 마우스를 올리면 상세 정보를 볼 수 있습니다</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
