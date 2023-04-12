const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution() {
  const t = Number(input[0]);
  for (i = 0; i < t; i++) {
    let mp = new Map();
    let n = Number(input[1]);
    let sum = 1;
    for (j = 2; j < n + 2; j++) {
      const tag = input[j].split(" ")[1];
      if (mp.get(tag) !== undefined) mp.set(tag, mp.get(tag) + 1);
      else mp.set(tag, 1);
    }
    for (const value of mp.values()) sum *= value + 1;
    input.splice(1, n + 1);
    console.log(sum - 1);
  }
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution();
});
