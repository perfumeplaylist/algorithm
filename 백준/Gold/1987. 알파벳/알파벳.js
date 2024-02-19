const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

rl.on("line", (line) => input.push(line)).on("close", () => {
  let ret = -987654321;

  function go(y, x, visited, cnt) {
    ret = Math.max(ret, cnt);
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
      let next = a[ny][nx].charCodeAt(0) - 65;
      if (!visited[next]) {
        visited[next] = 1;
        go(ny, nx, visited, cnt + 1);
        visited[next] = 0;
      }
    }
  }

  const [n, m] = input[0].split(" ").map(Number);
  const a = input.slice(1).map((line) => line.split(""));
  let visited = Array.from({ length: 25 }, () => 0);
  visited[a[0][0].charCodeAt(0) - 65] = 1;
  go(0, 0, visited, 1);
  console.log(ret);
  process.exit();
});
