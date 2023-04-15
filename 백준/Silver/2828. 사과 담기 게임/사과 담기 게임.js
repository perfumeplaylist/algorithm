const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let temp,
  ret = 0;
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, m] = input[0].split(" ").map(Number);
  const a = input.slice(1, input.length).map(Number);
  let l = 1,
    r;
  const j = input.length;
  for (let i = 1; i <= j; i++) {
    r = l + m - 1;
    temp = a[i];
    // console.log(temp, l, r, ret);
    if (l <= temp && r >= temp) continue;
    else {
      if (temp > r) {
        l += temp - r;
        ret += temp - r;
      } else if (temp < l) {
        ret += l - temp;
        l = temp;
      }
    }
  }
  console.log(ret);
});
