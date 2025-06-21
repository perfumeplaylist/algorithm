const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
let ret = 1234567890;

function bfs(y, x, visited, max_y, max_x, maps) {
  const q = [];
  visited[y][x] = 1;
  q.push({ y, x });

  while (q.length) {
    const { y, x } = q.shift();

    if (y === max_y && x === max_x) {
      ret = Math.min(visited[y][x], ret);
    }

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (ny < 0 || nx < 0 || ny > max_y || nx > max_x) continue;
      if (visited[ny][nx] || maps[ny][nx] === 0) continue;

      visited[ny][nx] = visited[y][x] + 1;
      q.push({ y: ny, x: nx });
    }
  }
}

function solution(maps) {
  const max_y = maps.length - 1;
  const max_x = maps[0].length - 1;
  const visited = Array.from({ length: maps.length }, () =>
    Array.from({ length: maps[0].length }, () => 0)
  );

  bfs(0, 0, visited, max_y, max_x, maps);
  return ret === 1234567890 ? -1 : ret;
}
