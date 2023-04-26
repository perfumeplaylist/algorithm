const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let n,
  m,
  mx = -987654321;
let visited = new Array(26).fill(0);
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

function go(y, x, cnt) {
  mx = Math.max(mx, cnt);
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
    let next = input[ny][nx].charCodeAt(0) - 65;
    if (visited[next] === 0) {
      visited[next] = 1;
      go(ny, nx, cnt + 1);
      visited[next] = 0;
    }
  }
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  [n, m] = input[0].split(" ").map(Number);
  input.splice(0, 1);
  // console.log(input[0][0].charCodeAt(0));
  let now = input[0][0].charCodeAt(0) - 65;
  visited[now] = 1;
  go(0, 0, 1);
  console.log(mx);
});
