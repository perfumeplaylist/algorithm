const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let k = Number(input[0]);
  const a = input.slice(1).map(Number);
  const ret = [];
  while (k > 0) {
    const temp = a.shift();
    if (temp === 0) {
      if (ret.length) ret.pop();
    } else {
      ret.push(temp);
    }
    k--;
  }
  console.log(
    ret.reduce((prev, cur) => {
      return prev + cur;
    }, 0)
  );
});
