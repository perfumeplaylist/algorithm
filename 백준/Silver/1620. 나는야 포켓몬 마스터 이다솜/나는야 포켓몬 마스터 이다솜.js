const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let mp = new Map();
let mp1 = new Map();

function solution() {
  const [n, m] = input[0].split(" ").map(Number);
  for (i = 1; i <= n; i++) {
    mp.set(i, input[i]);
    mp1.set(input[i], i);
  }
  for (i = n + 1; i <= n + m; i++) {
    if (isNaN(input[i])) {
      console.log(mp1.get(input[i]));
    } else console.log(mp.get(Number(input[i])));
  }
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution();
});
