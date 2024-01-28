const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const n = parseInt(input[0], 10);
  const a = input.slice(1).map((line) => line.split(" ").map(Number));
  let mx = -987654321;
  let visited = [];

  function go(y, x, i, visited) {
    visited[y][x] = 1;
    for (let k = 0; k < 4; k++) {
      let ny = y + dy[k];
      let nx = x + dx[k];
      if (ny < 0 || nx < 0 || ny >= n || nx >= n || visited[ny][nx]) continue;
      if (a[ny][nx] > i) {
        go(ny, nx, i, visited);
      }
    }
  }

  for (let i = 0; i <= 100; i++) {
    visited = Array.from({ length: n }, () => Array(n).fill(0));
    let cnt = 0;
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        if (a[y][x] > i && !visited[y][x]) {
          cnt++;
          go(y, x, i, visited);
        }
      }
    }
    mx = Math.max(mx, cnt);
  }

  console.log(mx);
  process.exit();
});
