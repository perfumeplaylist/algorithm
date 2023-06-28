const fs = require("fs");

const count = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = "";
for (let i = 1; i <= Number(count[0]); i++) {
  result += +i + "\n";
}
console.log(result);
