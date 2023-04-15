const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let cnt = 0,
  n,
  m,
  k,
  ny,
  nx;
let ret = [];
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

const arr = new Array(104).fill(0).map(() => new Array(104).fill(0));
const visited = new Array(104).fill(0).map(() => new Array(104).fill(0));

function dfs(y, x) {
  visited[y][x] = 1;
  let ret = 1;
  for (let i = 0; i < 4; i++) {
    ny = y + dy[i];
    nx = x + dx[i];
    if (
      ny < 0 ||
      nx < 0 ||
      ny >= n ||
      nx >= m ||
      visited[ny][nx] ||
      arr[ny][nx]
    )
      continue;
    ret += dfs(ny, nx);
  }
  return ret;
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  [n, m, k] = input[0].split(" ").map(Number);
  const a = input.slice(1, input.length).map((el) => el.split(" ").map(Number));
  for (let h = 0; h < k; h++) {
    const [lx, ly, rx, ry] = a[h];
    for (let i = ly; i < ry; i++) {
      for (let j = lx; j < rx; j++) arr[i][j] = 1;
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!arr[i][j] && !visited[i][j]) {
        cnt++;
        ret.push(dfs(i, j));
      }
    }
  }
  console.log(cnt);
  console.log(ret.sort((a, b) => a - b).join(" "));
});
