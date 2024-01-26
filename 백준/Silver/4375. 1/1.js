const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  const num = input.map(Number);
  for (let n of num) {
    let cnt = 1,
      ret = 1;
    while (true) {
      if (ret % n === 0) {
        break;
      }
      ret = ret * 10 + 1;
      ret %= n;
      cnt++;
    }
    console.log(cnt);
  }

  process.exit();
});
