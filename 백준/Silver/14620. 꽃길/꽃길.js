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
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );
  let ret = 987654321;

  function check(y, x, visited) {
    if (visited[y][x] !== 0) return false;
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (ny < 0 || nx < 0 || ny >= n || nx >= n) return false;
      if (visited[ny][nx] !== 0) return false;
    }
    return true;
  }

  function plant_seed(y, x, visited) {
    visited[y][x] = 1;
    let sum = a[y][x];
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      visited[ny][nx] = 1;
      sum += a[ny][nx];
    }
    return sum;
  }

  function reset_seed(y, x, visited) {
    visited[y][x] = 0;
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      visited[ny][nx] = 0;
    }
  }

  function go(cost, cnt, visited) {
    if (cost >= ret) return;
    if (cnt === 3) {
      ret = Math.min(ret, cost);
      return;
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (check(i, j, visited)) {
          const cur_cost = plant_seed(i, j, visited);
          go(cost + cur_cost, cnt + 1, visited);
          reset_seed(i, j, visited);
        }
      }
    }
  }

  go(0, 0, visited);
  console.log(ret);
  process.exit();
});
