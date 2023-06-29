const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = Number(input[0]);
const numbers = input[1].split(" ").map((num) => Number(num));

let max = numbers[0];
let min = numbers[0];

if (count === numbers.length) {
  for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
    if (min > numbers[i]) {
      min = numbers[i];
    }
  }
}

console.log(min, max);
