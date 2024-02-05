const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  input.forEach((str) => {
    if (str === ".") return;
    let stk = [];
    let balanced = true; // 균형 상태를 추적하는 플래그
    for (let i = 0; i < str.length && balanced; i++) {
      let char = str[i];
      if (char === "(" || char === "[") {
        stk.push(char);
      } else if (char === ")" || char === "]") {
        if (stk.length === 0) {
          balanced = false;
          break; // 스택이 비어있으면 불균형 상태
        }
        const top = stk.pop();
        if ((char === ")" && top !== "(") || (char === "]" && top !== "[")) {
          balanced = false;
          break; // 괄호의 짝이 맞지 않으면 불균형 상태
        }
      }
    }
    if (balanced && stk.length === 0) console.log("yes");
    else console.log("no");
  });
  process.exit();
});
