const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = 0;

for (let i = 1; i <= Number(input[0]); i++) {
  result = result + i;
}

console.log(result);
