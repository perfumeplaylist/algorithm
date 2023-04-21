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
  for (let i = 1; i <= n; i++) {
    let stk = [];
    const temp = input[i];
    let flag = 0;
    for (let t of temp) {
      if (t === "(") stk.push(t);
      else {
        if (stk.length) stk.pop();
        else {
          flag = 1;
          break;
        }
      }
    }
    if (flag || stk.length) console.log("NO");
    else console.log("YES");
  }
});
