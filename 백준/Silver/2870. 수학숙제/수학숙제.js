const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdin,
});

let input = [];
let answer = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  const lines = input.slice(1);

  for (const line of lines) {
    const numbers = line.match(/\d+/g);
    if (numbers) {
      answer.push(...numbers);
    }
  }

  console.log(
    answer
      .map(BigInt)
      .sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        if (a === b) return 0;
      })
      .join("\n")
  );
  process.exit();
});
