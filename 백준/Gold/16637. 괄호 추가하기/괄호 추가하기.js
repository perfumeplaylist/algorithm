const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let num = [],
  opear = [];

let mx = -987654321;

function oper(a, b, c) {
  if (b === "+") return a + c;
  else if (b === "-") return a - c;
  else if (b === "*") return a * c;
}

function go(idx, ret) {
  if (idx === num.length - 1) {
    mx = Math.max(mx, ret);
    return;
  }
  go(idx + 1, oper(ret, opear[idx], num[idx + 1]));
  if (idx + 2 < num.length) {
    const temp = oper(num[idx + 1], opear[idx + 1], num[idx + 2]);
    go(idx + 2, oper(ret, opear[idx], temp));
  }
  return;
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = Number(input[0]);
  const a = input[1].split("");
  for (let i = 0; i < n; i++) {
    if (a[i] >= 0 && a[i] <= 9) num.push(Number(a[i]));
    else opear.push(a[i]);
  }
  go(0, num[0]);
  console.log(mx);
});
