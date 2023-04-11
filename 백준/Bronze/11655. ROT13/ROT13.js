const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [],
  ret = "";
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  input[0].split("").map((el) => {
    const temp = el.charCodeAt(0);
    // console.log(temp);
    if (temp >= 65 && temp <= 90) {
      if (temp + 13 > 90) ret += String.fromCharCode(temp + 13 - 26);
      else ret += String.fromCharCode(temp + 13);
    } else if (temp >= 97 && temp <= 122) {
      if (temp + 13 > 122) ret += String.fromCharCode(temp + 13 - 26);
      else ret += String.fromCharCode(temp + 13);
    } else ret += String.fromCharCode(temp);
  });
  console.log(ret);
});
