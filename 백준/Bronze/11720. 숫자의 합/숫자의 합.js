const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  console.log(
    input[1]
      .split("")
      .map(Number)
      .reduce((pre, cur) => pre + cur, 0)
  );
  process.exit();
});
