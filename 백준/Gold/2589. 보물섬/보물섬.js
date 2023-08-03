const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let ret = -987654321;
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  let ny, nx;
  const [n, m] = input[0].split(" ").map(Number);
  let visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );
  const a = input.slice(1);

  function bfs(y, x) {
    const q = [];
    visited = Array.from({ length: 54 }, () =>
      Array.from({ length: 54 }, () => 0)
    );
    visited[y][x] = 1;
    q.push({ y, x });
    while (q.length) {
      const { y, x } = q.shift();
      for (let i = 0; i < 4; i++) {
        ny = y + dy[i];
        nx = x + dx[i];
        if (
          ny < 0 ||
          nx < 0 ||
          ny >= n ||
          nx >= m ||
          visited[ny][nx] ||
          a[ny][nx] === "W"
        )
          continue;
        visited[ny][nx] = 1 + visited[y][x];
        q.push({ y: ny, x: nx });
        ret = Math.max(ret, visited[ny][nx]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (a[i][j] === "L") {
        bfs(i, j);
      }
    }
  }
  console.log(ret - 1);
  process.exit();
});
