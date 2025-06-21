const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

function solution(rectangle, characterX, characterY, itemX, itemY) {
  const SIZE = 101;
  const board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
  const visited = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));

  // 1. 사각형 영역 채우기 (2배 확장)
  for (const [x1, y1, x2, y2] of rectangle) {
    for (let y = y1 * 2; y <= y2 * 2; y++) {
      for (let x = x1 * 2; x <= x2 * 2; x++) {
        board[y][x] = 1;
      }
    }
  }

  // 2. 사각형 내부 지우기 (테두리만 남김)
  for (const [x1, y1, x2, y2] of rectangle) {
    for (let y = y1 * 2 + 1; y < y2 * 2; y++) {
      for (let x = x1 * 2 + 1; x < x2 * 2; x++) {
        board[y][x] = 0;
      }
    }
  }

console.log(board)
  // 3. BFS 시작
  const q = [];
  q.push({ y: characterY * 2, x: characterX * 2, dist: 0 });
  visited[characterY * 2][characterX * 2] = true;

  while (q.length) {
    const { y, x, dist } = q.shift();

    if (y === itemY * 2 && x === itemX * 2) {
      return dist / 2; // 2배 확장했으니 다시 나눠줌
    }

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny < 0 || nx < 0 || ny >= SIZE || nx >= SIZE) continue;
      if (!visited[ny][nx] && board[ny][nx] === 1) {
        visited[ny][nx] = true;
        q.push({ y: ny, x: nx, dist: dist + 1 });
      }
    }
  }

  return -1; // 도달 못했을 경우
}
