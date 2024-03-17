const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const temp = ["pi", "ka", "chu"];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const a = input[0];
  let ret = "";
  for (const c of a) {
    ret += c;
    if (temp.indexOf(ret) !== -1) ret = "";
  }
  ret.length > 0 ? console.log("NO") : console.log("YES");
});
