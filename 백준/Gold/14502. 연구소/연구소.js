const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let ret = -987654321;
let ny, nx, n, m, a, vistied;
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
let wall = [],
  virus = [];

function dfs(y, x) {
  vistied[y][x] = 1;
  for (let i = 0; i < 4; i++) {
    ny = y + dy[i];
    nx = x + dx[i];
    if (
      ny < 0 ||
      nx < 0 ||
      ny >= n ||
      nx >= m ||
      vistied[ny][nx] ||
      a[ny][nx] === 1
    )
      continue;
    if (a[ny][nx] === 0) {
      dfs(ny, nx);
    }
  }
}

function go() {
  vistied = new Array(8).fill(0).map(() => new Array(8).fill(0));
  for (let i of virus) {
    vistied[i.y][i.x] = 1;
    dfs(i.y, i.x);
  }
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (a[i][j] === 0 && !vistied[i][j]) cnt++;
    }
  }
  return cnt;
}

rl.on("line", (line) => {
  input.push(line);
});
rl.on("close", () => {
  [n, m] = input[0].split(" ").map(Number);
  input.splice(0, 1);
  a = input.map((el) => el.split(" ").map(Number));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (a[i][j] === 0) wall.push({ y: i, x: j });
      else if (a[i][j] === 2) virus.push({ y: i, x: j });
    }
  }
  for (let i = 0; i < wall.length; i++) {
    for (let j = i + 1; j < wall.length; j++) {
      for (let z = j + 1; z < wall.length; z++) {
        a[wall[i].y][wall[i].x] = 1;
        a[wall[j].y][wall[j].x] = 1;
        a[wall[z].y][wall[z].x] = 1;
        // console.log(go());
        ret = Math.max(ret, go());
        a[wall[i].y][wall[i].x] = 0;
        a[wall[j].y][wall[j].x] = 0;
        a[wall[z].y][wall[z].x] = 0;
      }
    }
  }
  console.log(ret);
});
