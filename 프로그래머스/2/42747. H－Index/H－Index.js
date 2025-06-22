function solution(citations) {
  citations.sort((a, b) => b - a); // 내림차순 정렬
  let h = 0;
  while (h < citations.length && citations[h] > h) {
    h++;
  }
  return h;
}
