const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

rl.on("line", (line) => input.push(line)).on("close", () => {
  function go(y, x, cheese, visited) {
    visited[y][x] = 1;
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (ny < 0 || nx < 0 || ny >= n || nx >= m || visited[ny][nx]) continue;
      if (a[ny][nx] === 1) {
        cheese.push({ y: ny, x: nx });
        visited[ny][nx] = 1;
      }
      if (a[ny][nx] === 0) {
        go(ny, nx, cheese, visited);
      }
    }
  }

  const [n, m] = input[0].split(" ").map(Number);
  const a = input.slice(1).map((line) => line.split(" ").map(Number));
  let flag = 0;
  let prev = 0;
  let cnt = 0;
  while (true) {
    flag = 0;
    let cheese = [];
    let visited = Array.from({ length: n }, () =>
      Array.from({ length: m }, () => 0)
    );
    go(0, 0, cheese, visited);
    if (!cheese.length) break;
    for (const { y, x } of cheese) a[y][x] = 0;
    cnt++;
    prev = cheese.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (a[i][j] === 1) {
          flag = 1;
          break;
        }
      }
    }
    if (!flag) break;
  }
  console.log(cnt);
  console.log(prev);
  process.exit();
});
