const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [],
  ny,
  nx;

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

function dfs(y, x, visited, n, m, b) {
  visited[y][x] = 1;
  for (let i = 0; i < 4; i++) {
    ny = y + dy[i];
    nx = x + dx[i];
    if (ny < 0 || nx < 0 || ny > n || nx > m || visited[ny][nx]) continue;
    if (b[ny][nx] === 1) dfs(ny, nx, visited, n, m, b);
  }
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const a = Number(input[0]);
  for (let t = 0; t < a; t++) {
    const [n, m, k] = input[1].split(" ").map(Number);
    const visited = new Array(100).fill(0).map(() => new Array(100).fill(0));
    const b = new Array(100).fill(0).map(() => new Array(100).fill(0));
    let ret = 0;
    for (let i = 2; i < k + 2; i++) {
      const [x, y] = input[i].split(" ").map(Number);
      b[x][y] = 1;
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (b[i][j] === 1 && !visited[i][j]) {
          dfs(i, j, visited, n, m, b);
          ret++;
        }
      }
    }
    console.log(ret);
    input.splice(0, k + 1);
  }
});
