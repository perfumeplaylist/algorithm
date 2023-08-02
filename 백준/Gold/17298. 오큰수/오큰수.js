const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = Number(input[0]);
  const ret = Array.from({ length: n }, () => -1);
  const arr = input[1].split(" ").map(Number);
  const stk = [];
  let num = "";
  for (let i = 0; i < n; i++) {
    let temp = arr[i];
    while (stk.length && arr[stk[stk.length - 1]] < temp) {
      ret[stk[stk.length - 1]] = temp;
      stk.pop();
    }
    stk.push(i);
  }
  for (let i = 0; i < n; i++) {
    num += ret[i] + " ";
  }
  console.log(num);
  process.exit();
});
