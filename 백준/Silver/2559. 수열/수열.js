const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let mx = Number.MIN_SAFE_INTEGER;

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [n,m] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  let psum = [0];
  for (i = 1; i <= n; i++) psum[i] = arr[i - 1] + psum[i - 1];
  for (i = m; i <= n; i++) mx = Math.max(mx, psum[i] - psum[i - m]);
  console.log(mx);
});
