const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const n = parseInt(input[0], 10);
  const a = input.slice(1).map((line) => line.split("").map(Number));

  function go(y, x, size) {
    if (size === 1) return a[y][x];
    let prev = a[y][x];
    let ret = "";
    for (let i = y; i < y + size; i++) {
      for (let j = x; j < x + size; j++) {
        if (prev !== a[i][j]) {
          ret += "(";
          ret += go(y, x, size / 2);
          ret += go(y, x + size / 2, size / 2);
          ret += go(y + size / 2, x, size / 2);
          ret += go(y + size / 2, x + size / 2, size / 2);
          ret += ")";
          return ret;
        }
        prev = a[i][j];
      }
    }
    return String(a[y][x]);
  }

  console.log(go(0, 0, n));
  process.exit();
});
