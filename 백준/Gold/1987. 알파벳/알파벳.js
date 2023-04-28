const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const INF = -987654321;
let input = [];
let n,
  a,
  m,
  mx = INF;

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
function go(y, x, cnt, now) {
  mx = Math.max(mx, cnt);
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
    let next = 1 << (a[ny][nx].charCodeAt(0) - 65);
    if (now & next) continue;
    else go(ny, nx, cnt + 1, now | next);
  }
  return;
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  [n, m] = input[0].split(" ").map(Number);
  a = input.slice(1);
  let now = 1 << (a[0][0].charCodeAt(0) - 65);
  go(0, 0, 1, now);
  console.log(mx);
});
