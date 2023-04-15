const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [],
  a;

function go(y, x, size) {
  if (size === 1) return a[y][x];
  let ret = "";
  let now = a[y][x];
  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (a[i][j] !== now) {
        ret += "(";
        ret += go(y, x, size / 2);
        ret += go(y, x + size / 2, size / 2);
        ret += go(y + size / 2, x, size / 2);
        ret += go(y + size / 2, x + size / 2, size / 2);
        ret += ")";
        return ret;
      }
    }
  }
  return now;
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = Number(input[0]);
  a = input.slice(1, input.length);
  console.log(go(0, 0, n));
});
