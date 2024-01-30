const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdin,
});

let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  const [n, m] = input[0].split(" ").map(Number);
  const j = parseInt(input[1], 10);
  const a = input.slice(2).map(Number);
  let cnt = 0,
    l = 1;
  for (let i = 0; i < j; i++) {
    const temp = a[i];
    let r = l + m - 1;
    if (temp >= l && temp <= r) continue;
    if (temp > r) {
      l += temp - r;
      cnt += temp - r;
    } else if (temp < l) {
      cnt += l - temp;
      l = temp;
    }
  }
  console.log(cnt);
  process.exit();
});
