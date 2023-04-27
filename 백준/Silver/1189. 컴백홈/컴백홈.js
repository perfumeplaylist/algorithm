const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let r,
  c,
  k,
  a,
  visited = new Array(9).fill(0).map(() => new Array(9).fill(0));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

function go(y, x) {
  if (y === 0 && x === c - 1) {
    if (visited[y][x] === k) return 1;
    return 0;
  }
  let ret = 0;
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (
      ny < 0 ||
      nx < 0 ||
      ny >= r ||
      nx >= c ||
      visited[ny][nx] ||
      a[ny][nx] === "T"
    )
      continue;
    visited[ny][nx] = visited[y][x] + 1;
    ret += go(ny, nx);
    visited[ny][nx] = 0;
  }
  return ret;
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  [r, c, k] = input[0].split(" ").map(Number);
  a = input.slice(1).map((el) => el.split(" ").join(""));
  visited[r - 1][0] = 1;
  console.log(go(r - 1, 0));
});
