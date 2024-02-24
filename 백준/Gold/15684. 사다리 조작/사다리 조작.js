const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  let ret = 987654321;
  const [n, m, h] = input[0].split(" ").map(Number);
  const visited = Array.from({ length: h }, () =>
    Array.from({ length: n - 1 }, () => false)
  );

  input.slice(1).forEach((line) => {
    const [a, b] = line.split(" ").map((num) => Number(num) - 1);
    visited[a][b] = true;
  });

  function check() {
    for (let i = 0; i < n; i++) {
      let pos = i;
      for (let j = 0; j < h; j++) {
        if (visited[j][pos]) pos++;
        else if (pos > 0 && visited[j][pos - 1]) pos--;
      }
      if (pos != i) return false;
    }
    return true;
  }

  function go(x, cnt) {
    if (cnt > 3 || cnt >= ret) return;
    if (check()) {
      ret = Math.min(ret, cnt);
      return;
    }
    for (let i = x; i < h * (n - 1); i++) {
      let row = Math.floor(i / (n - 1));
      let col = i % (n - 1);
      if (
        visited[row][col] ||
        (col > 0 && visited[row][col - 1]) ||
        (col < n - 2 && visited[row][col + 1])
      )
        continue;
      visited[row][col] = true;
      go(i + 1, cnt + 1);
      visited[row][col] = false;
    }
  }

  go(0, 0);
  console.log(ret === 987654321 ? -1 : ret);
  process.exit();
});
