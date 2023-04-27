const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let n,
  a,
  visited = new Array(14).fill(0).map(() => new Array(10).fill(0));
let mn = 987654321;

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

function clearFlower(y, x) {
  visited[y][x] = 0;
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    visited[ny][nx] = 0;
  }
  return;
}

function getCoast(y, x) {
  let ret = a[y][x];
  visited[y][x] = 1;
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    ret += a[ny][nx];
    visited[ny][nx] = 1;
  }
  return ret;
}

function checkFlower(y, x) {
  if (visited[y][x]) return false;
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (ny < 0 || nx < 0 || ny >= n || nx >= n || visited[ny][nx]) return false;
  }
  return true;
}

function getFlower(coast, cnt) {
  if (cnt === 3) {
    mn = Math.min(mn, coast);
    return;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (checkFlower(i, j)) {
        getFlower(coast + getCoast(i, j), cnt + 1);
        clearFlower(i, j);
      }
    }
  }
}
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  n = input[0].split(" ").map(Number);
  a = input.slice(1).map((el) => el.split(" ").map((el) => Number(el)));
  getFlower(0, 0);
  console.log(mn);
});
