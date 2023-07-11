const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, m] = input[0].split(" ").map(Number);
  input = input.slice(2).map(Number);
  let left = 1;
  let right;
  let cnt = 0;
  input.forEach((value) => {
    right = left + m - 1;
    if (left <= value && right >= value) return;
    else {
      if (right < value) {
        left += value - right;
        cnt += value - right;
      } else if (left > value) {
        cnt += left - value;
        left = value;
      }
    }
  });
  console.log(cnt);
  process.exit();
});
