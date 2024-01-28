const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const [n, m, k] = input[0].split(" ").map(Number);
  const a = Array.from({ length: n }, () => Array(m).fill(0));
  let visited = Array.from({ length: n }, () => Array(m).fill(0));
  const temp = input.slice(1).map((line) => line.split(" ").map(Number));
  let ret = [];
  let cnt = 0;

  function go(y, x) {
    let cnt = 1;
    visited[y][x] = 1;
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (ny < 0 || nx < 0 || ny >= n || nx >= m || visited[ny][nx]) continue;
      if (!a[ny][nx]) {
        cnt += go(ny, nx);
      }
    }
    return cnt;
  }

  for (let i = 0; i < k; i++) {
    const [lx, ly, rx, ry] = temp[i];
    for (let y = ly; y < ry; y++) {
      for (let x = lx; x < rx; x++) a[y][x] = 1;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && !a[i][j]) {
        cnt++;
        ret.push(go(i, j));
      }
    }
  }

  console.log(cnt);
  console.log(ret.sort((a, b) => a - b).join(" "));
  process.exit();
});
