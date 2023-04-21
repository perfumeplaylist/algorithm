const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let n, ret2, ret5, ret;

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const t = Number(input[0]);
  for (let i = 1; i <= t; i++) {
    n = Number(input[i]);
    ret2 = 0;
    ret5 = 0;
    ret = 0;
    for (let j = 2; j <= n; j *= 2) ret2 += Math.floor(n / j);
    for (let k = 5; k <= n; k *= 5) ret5 += Math.floor(n / k);
    ret = Math.min(ret2, ret5);
    console.log(ret);
  }
});
