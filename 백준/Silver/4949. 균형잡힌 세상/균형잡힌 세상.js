const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  for (let i = 0; i < input.length; i++) {
    const temp = input[i];
    if (temp === ".") break;
    let stk = [];
    let flag = 0;
    for (let j = 0; j < temp.length; j++) {
      let t = temp[j];
      if (t === "(" || t === "[") stk.push(t);
      else if (t === ")" || t === "]") {
        if (stk.length) {
          const temp1 = stk[stk.length - 1];
          if ((temp1 === "(" && t === ")") || (temp1 === "[" && t === "]"))
            stk.pop();
          else {
            flag = 1;
            break;
          }
        } else {
          flag = 1;
          break;
        }
      }
      if (flag) break;
    }
    if (flag || stk.length) console.log("no");
    else console.log("yes");
  }
});
