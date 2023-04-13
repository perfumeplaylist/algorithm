const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let answer = 0,
  n,
  m,
  temp;

function solution() {
  if (m > 10000000) {
    console.log(0);
    return;
  }
  for (i = 0; i < n; i++)
    for (j = i + 1; j < n; j++) if (temp[i] + temp[j] === m) answer++;
  console.log(answer);
  return;
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  n = Number(input[0]);
  m = Number(input[1]);
  temp = input[2].split(" ").map(Number);
  solution();
});
