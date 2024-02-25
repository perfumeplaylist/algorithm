const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
rl.on("line", (line) => input.push(line)).on("close", () => {
  const [r, c, k] = input[0].split(" ").map(Number);
  const a = input.slice(1).map((line) => line.split(""));
  const visited = Array.from({ length: r }, () =>
    Array.from({ length: c }, () => 0)
  );
  let ret = 0;
  function go(y, x, cnt, visited) {
    if (y === 0 && x === c - 1) {
      if (cnt === k - 1) ret++;
      return;
    }
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (ny < 0 || nx < 0 || ny >= r || nx >= c) continue;
      if (visited[ny][nx] || a[ny][nx] === "T") continue;
      visited[ny][nx] = 1;
      go(ny, nx, cnt + 1, visited);
      visited[ny][nx] = 0;
    }
  }
  visited[r - 1][0] = 1;
  go(r - 1, 0, 0, visited);
  console.log(ret);
  process.exit();
});
