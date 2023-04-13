const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  input.map(Number).forEach((n) => {
    let cnt = 1;
    let ret = 1;
    while (true) {
      if (cnt % n === 0) {
        console.log(ret);
        return;
      } else {
        cnt = cnt * 10 + 1;
        cnt %= n;
        ret++;
      }
    }
  });
});
