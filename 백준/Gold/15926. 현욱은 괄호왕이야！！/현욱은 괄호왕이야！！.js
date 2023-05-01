const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let mx = 0;
let dp = new Array(200004).fill(0);

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = Number(input[0]);
  const a = input.slice(1)[0].split("");
  let stk = [];
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] === "(") stk.push(i);
    else {
      if (stk.length) {
        dp[i] = dp[stk.pop()] = 1;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (dp[i]) {
      cnt++;
      mx = Math.max(mx, cnt);
    } else cnt = 0;
  }
  console.log(mx);
});
