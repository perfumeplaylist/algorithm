const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = parseInt(input[0], 10);
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    const temp = input[i];
    let stk = [];
    for (let k = 0; k < temp.length; k++) {
      if (stk.length) {
        if (stk[stk.length - 1] === temp[k]) {
          stk.pop();
        } else {
          stk.push(temp[k]);
        }
      } else {
        stk.push(temp[k]);
      }
    }
    if (!stk.length) cnt++;
  }
  console.log(cnt);
  process.exit();
});
