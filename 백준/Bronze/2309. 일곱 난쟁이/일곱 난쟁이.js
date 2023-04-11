const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let sum = 0;

function solution(input) {
  let a, b;
  let answer = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (sum - input[i] - input[j] === 100) {
        a = i;
        b = j;
        break;
      }
    }
  }
  for (let i = 0; i < input.length; i++) {
    if (i === a || i === b) continue;
    answer.push(input[i]);
  }
  answer.sort((a, b) => a - b);
  answer.forEach((el) => console.log(`${el}`));
}

rl.on("line", (line) => {
  input.push(Number(line));
  sum += Number(line);
}).on("close", () => {
  solution(input);
  process.exit();
});
