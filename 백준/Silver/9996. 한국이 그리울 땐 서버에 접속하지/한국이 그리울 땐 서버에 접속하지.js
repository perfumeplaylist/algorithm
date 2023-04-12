const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let idx = input[1].indexOf("*");
  let prev = input[1].slice(0, idx);
  let next = input[1].slice(idx + 1);
  for (let i = 2; i < input.length; i++) {
    let temp = input[i];
    if (prev.length + next.length > temp.length) {
      console.log("NE");
      continue;
    }
    if (
      temp.slice(0, prev.length) === prev &&
      temp.slice(Math.abs(temp.length - next.length)) === next
    )
      console.log("DA");
    else console.log("NE");
  }
});
