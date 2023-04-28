const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const x = Number(input[0]);
  let a = 64;
  let cnt = 0;
  for (let i = 1; i <= a; i *= 2) {
    if (x & i) cnt++;
  }
  console.log(cnt);
});
