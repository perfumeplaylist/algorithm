const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const [h, w] = input[0].split(" ").map(Number);
  const temp = input.slice(1);

  let a = Array.from({ length: h }, () => Array.from({ length: w }, () => -1));
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (temp[i][j] === "c") a[i][j] = 0;
    }
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (a[i][j] === 0) {
        while (a[i][j + 1] === -1) {
          a[i][j + 1] = a[i][j] + 1;
          j++;
        }
      }
    }
  }

  a.forEach((line) => console.log(line.join(" ")));
  process.exit();
});
