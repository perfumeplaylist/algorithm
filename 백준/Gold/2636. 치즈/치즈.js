const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let cheeze = [];
let n,
  m,
  day = 0,
  cnt,
  flag = 0,
  a,
  ny,
  nx,
  visited;
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

function dfs(y, x) {
  visited[y][x] = 1;
  for (let i = 0; i < 4; i++) {
    ny = y + dy[i];
    nx = x + dx[i];
    if (ny < 0 || nx < 0 || ny >= n || nx >= m || visited[ny][nx]) continue;
    if (a[ny][nx] === 0) dfs(ny, nx);
    else if (a[ny][nx] === 1) {
      visited[ny][nx] = 1;
      cheeze.push({ y: ny, x: nx });
    }
  }
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  [n, m] = input[0].split(" ").map(Number);
  input.splice(0, 1);
  a = input.map((el) => el.split(" ").map(Number));
  while (true) {
    day++;
    cnt = 0;
    flag = 0;
    visited = new Array(100).fill(0).map(() => new Array(100).fill(0));
    cheeze = [];
    dfs(0, 0);
    for (let i of cheeze) {
      a[i.y][i.x] = 0;
      cnt++;
    }
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
  console.log(day);
  console.log(cnt);
});
