const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const [n, m] = input[0].split(" ").map(Number);
  let ret = -987654321;
  const a = input.slice(1).map((line) => line.split("").map(Number));
  for (let s = 0; s < 1 << (n * m); s++) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      let cur = 0;
      for (let j = 0; j < m; j++) {
        let idx = i * m + j;
        if (s & (1 << idx)) {
          cur = cur * 10 + a[i][j];
        } else {
          sum += cur;
          cur = 0;
        }
      }
      sum += cur;
    }
    for (let j = 0; j < m; j++) {
      let cur = 0;
      for (let i = 0; i < n; i++) {
        let idx = i * m + j;
        if (!(s & (1 << idx))) {
          cur = cur * 10 + a[i][j];
        } else {
          sum += cur;
          cur = 0;
        }
      }
      sum += cur;
    }
    ret = Math.max(ret, sum);
  }
  console.log(ret);
  process.exit();
});
