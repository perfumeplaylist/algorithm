const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

function solution() {
  let answer = 0;
  let n = Number(input[0]);
  for (i = 1; i <= n; i++) {
    const temp = input[i];
    const stk = [];
    for (let s of temp) {
      if (stk.at(-1) === s) {
        stk.pop();
      } else {
        stk.push(s);
      }
    }
    if (stk.length === 0) answer++;
  }
  console.log(answer);
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution();
});
