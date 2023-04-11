const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let temp = new Array(26).fill(0);
let answer = "";
rl.on("line", (line) => {
  for (let i = 0; i < line.length; i++) {
    const idx = line.charCodeAt(i);
    temp[idx - 97]++;
  }
}).on("close", () => {
  console.log(temp.join(" "));
  process.exit();
});
