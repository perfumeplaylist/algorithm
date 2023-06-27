const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let i = 0;
let result = "";

while (i < input.length) {
  const num = input[i].split(" ");
  const A = Number(num[0]);
  const B = Number(num[1]);
  if ((A, B === 0)) {
    break;
  }
  result += A + B + "\n";
  i++;
}

console.log(result);
