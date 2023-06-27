const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const ret = input[0]
    .split(" ")
    .map(Number)
    .reduce((pre, cur) => pre + cur, 0);
  console.log(ret);
  process.exit();
});
