const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, k] = input[0].split(" ").map(Number);
  const temp = input[1].split(" ").map(Number);
  const prev = Array.from({ length: temp.length }, () => 0);
  let ret = -987654321;
  for (let i = 1; i <= n; i++) prev[i] = temp[i - 1] + prev[i - 1];
  for (let i = k; i <= n; i++) ret = Math.max(ret, prev[i] - prev[i - k]);
  console.log(ret);
  process.exit();
});
