const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ret = [];
rl.on("line", (line) => {
  ret.push(line);
}).on("close", () => {
  console.log(ret.map(Number).reduce((pre, cur) => pre + cur, 0));
  process.exit();
});
