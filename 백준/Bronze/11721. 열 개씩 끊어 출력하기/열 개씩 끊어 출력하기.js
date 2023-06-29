const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let start = 0;
  let temp = input[0];
  while (start < temp.length) {
    console.log(temp.substring(start, start + 10));
    start += 10;
  }
  process.exit();
});
