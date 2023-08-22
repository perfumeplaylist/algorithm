const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, l, r] = input[0].split(" ");
  let day = 0;
  let visited = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, i) => 0)
  );
  let ret = 0;
  let flag = 0;

  const a = input.slice(1).map((item) => item.split(" ").map(Number));

  const dfs = (y, x, temp) => {
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (ny < 0 || ny >= n || nx < 0 || nx >= n || visited[ny][nx]) continue;
      if (
        Math.abs(a[ny][nx] - a[y][x]) >= l &&
        Math.abs(a[ny][nx] - a[y][x]) <= r
      ) {
        ret += a[ny][nx];
        visited[ny][nx] = 1;
        temp.push({ y: ny, x: nx });
        dfs(ny, nx, temp);
      }
    }
  };

  while (true) {
    flag = 0;
    visited = Array.from({ length: n }, (_, i) =>
      Array.from({ length: n }, (_, i) => 0)
    );

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!visited[i][j]) {
          visited[i][j] = 1;
          ret = a[i][j];
          let temp = [{ y: i, x: j }];
          dfs(i, j, temp);
          if (temp.length === 1) continue;

          for (const { y, x } of temp) {
            a[y][x] = Math.floor(ret / temp.length);
            flag = 1;
          }
        }
      }
    }

    if (!flag) break;
    day++;
  }
  console.log(day);
});
