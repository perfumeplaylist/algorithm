const fs = require("fs");

const count = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = "";

for (let i = 1; i <= count[0]; i++) {
  const line = count[i].split(" ");
  if (line.length === 2) {
    const A = parseInt(line[0]);
    const B = parseInt(line[1]);
    result += `Case #${i}: ${A} + ${B} = ${A + B}` + "\n";
  }
}
console.log(result);
