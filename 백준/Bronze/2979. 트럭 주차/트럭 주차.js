const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const time = new Array(100).fill(0);
let input = [];
let a,
  b,
  c,
  temp,
  s,
  e,
  sum = 0;

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  temp = input[0].split(" ").map((el) => Number(el));
  a = temp[0];
  b = temp[1];
  c = temp[2];
  for (let i = 1; i < input.length; i++) {
    temp = input[i].split(" ").map((el) => Number(el));
    s = temp[0];
    e = temp[1];
    for (j = s; j < e; j++) time[j]++;
  }
  for (i = 1; i <= 100; i++) {
    switch (time[i]) {
      case 1:
        sum += 1 * a;
        break;
      case 2:
        sum += 2 * b;
        break;
      case 3:
        sum += 3 * c;
        break;
    }
  }
  console.log(sum);
  process.exit();
});
