# 데이터 구조 명세

## Country 객체

```javascript
{
  name: string,        // 국가명 (예: "고조선")
  startYear: number,   // 시작 년도 (음수 = BC, 예: -2333)
  endYear: number,     // 종료 년도 (예: -108)
  color: string,       // Tailwind 색상 클래스 (예: "bg-red-200")
  events: Event[]      // 주요 사건 배열
}
```

## Event 객체

```javascript
{
  year: number,        // 사건 발생 년도
  title: string        // 사건 설명
}
```

## 예시

```javascript
{
  name: "고조선",
  startYear: -2333,
  endYear: -108,
  color: "bg-red-200",
  events: [
    { year: -2333, title: "단군왕검 건국" },
    { year: -108, title: "한나라 침입으로 멸망" }
  ]
}
```
