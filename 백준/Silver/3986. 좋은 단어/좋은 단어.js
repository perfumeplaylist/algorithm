const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  const t = Number(input[0]);
  const a = input.slice(1).map((v) => v.split(""));
  let cnt = 0;
  for (const temp of a) {
    let stk = [];
    let i = 0;
    for (const t of temp) {
      if (i === 0 || stk[stk.length - 1] !== t) stk.push(t);
      else stk.pop();
      i++;
    }
    if (!stk.length) cnt++;
  }
  console.log(cnt);
  process.exit();
});
