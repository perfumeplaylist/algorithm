const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let n = Number(input[0]);
  let i = 666;
  for (; ; i++) {
    if (i.toString().search("666") !== -1) n--;
    if (n === 0) break;
  }
  console.log(i);
});
