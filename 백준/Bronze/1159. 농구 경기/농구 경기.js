const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name = new Array(26).fill(0);
let ret = "",
  input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  for (i = 1; i < input.length; i++) name[input[i].charCodeAt(0) - 97]++;
  for (i = 0; i < 26; i++) if (name[i] >= 5) ret += String.fromCharCode(i + 97);
  console.log(ret !== "" ? ret : "PREDAJA");
});
