const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  const a = input.slice(1);
  a.forEach((str) => {
    let stk = [];
    let flag = 1;
    str.split("").forEach((char) => {
      if (!flag) return;
      if (char === "(") stk.push("(");
      else if (char === ")") {
        if (stk.length) stk.pop();
        else flag = 0;
      }
    });
    if (!flag || stk.length) console.log("NO");
    else console.log("YES");
  });
  process.exit();
});
