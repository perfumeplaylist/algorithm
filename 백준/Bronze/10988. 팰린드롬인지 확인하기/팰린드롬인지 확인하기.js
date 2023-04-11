const { reverse } = require("dns");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = "",
  temp = "";

rl.on("line", (line) => {
  input = line;
}).on("close", () => {
  temp = input.split("").reverse().join("");
  console.log(temp === input ? 1 : 0);
});
