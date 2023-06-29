const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = input[0].split(" ");
  const month = parseInt(n[0]);
  let date = parseInt(n[1]);
  const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  if (month === 1) {
  } else if (month === 2) {
    date = date + 31;
  } else if (month <= 7) {
    date = date + (month - 1) * 30 + Math.ceil((month - 1) / 2) - 2;
  } else {
    date = date + (month - 1) * 30 + Math.ceil(month / 2) - 2;
  }

  console.log(dayList[date % 7]);

  process.exit();
});
