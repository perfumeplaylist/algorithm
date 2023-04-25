const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let stk = [];
let ret = new Array(1000000).fill(-1);
let p = "";
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = Number(input[0]);
  const a = input[1].split(" ").map(Number);
  for (let i = 0; i < n; i++) {
    let temp = a[i];
    while (stk.length && a[stk[stk.length - 1]] < temp) {
      ret[stk[stk.length - 1]] = temp;
      stk.pop();
    }
    stk.push(i);
  }
  for (let i = 0; i < n; i++) {
    p += ret[i] + " ";
  }
  console.log(p);
});
