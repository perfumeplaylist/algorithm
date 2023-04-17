const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [],
  temp;

function check(temp) {
  if (
    temp === "a" ||
    temp === "e" ||
    temp === "i" ||
    temp === "o" ||
    temp === "u"
  )
    return true;
  return false;
}

rl.on("line", (line) => input.push(line)).on("close", () => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "end") break;
    let acnt = 0,
      bcnt = 0,
      bflag = 0,
      flag = 0,
      prev = "";
    for (let j = 0; j < input[i].length; j++) {
      temp = input[i][j];
      if (check(temp)) {
        bflag = 1;
        acnt += 1;
        bcnt = 0;
      } else {
        acnt = 0;
        bcnt += 1;
      }
      if (acnt === 3 || bcnt === 3) {
        flag = 1;
        break;
      }
      if (j >= 1 && prev === temp && temp !== "e" && temp !== "o") {
        flag = 1;
        break;
      }
      if (flag) break;
      prev = temp;
    }
    if (bflag && !flag) console.log(`<${input[i]}> is acceptable.`);
    else console.log(`<${input[i]}> is not acceptable.`);
  }
});
