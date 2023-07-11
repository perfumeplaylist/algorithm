const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function go(y, x, size) {
  let now = Number(input[y][x]);
  if (size === 1) {
    return now;
  }
  let ret = "";
  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (Number(input[i][j]) !== now) {
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
  console.log(go(1, 0, Number(input[0])));
  process.exit();
});
