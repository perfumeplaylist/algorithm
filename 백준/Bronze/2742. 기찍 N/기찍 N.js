const fs = require("fs");

const count = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = "";
for (let i = count[0]; i > 0; i--) {
  result += +i + "\n";
}

console.log(result);
