const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let asum = 0,
  bsum = 0,
  A = 0,
  B = 0,
  psum;

function printTime(sum) {
  const min = "00" + Math.floor(sum / 60);
  const sec = "00" + Math.floor(sum % 60);
  return (
    min.substring(min.length - 2, min.length) +
    ":" +
    sec.substring(sec.length - 2, sec.length)
  );
}

function changeInt(time) {
  const min = Number(time.substring(0, 2));
  const sec = Number(time.substring(3));
  return min * 60 + sec;
}

function getTime(time) {
  return changeInt(time) - changeInt(psum);
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = Number(input[0]);
  for (let i = 1; i <= n; i++) {
    const [team, time] = input[i].split(" ");
    if (A > B) asum += getTime(time);
    else if (A < B) bsum += getTime(time);
    team === "1" ? A++ : B++;
    psum = time;
  }
  if (A > B) asum += getTime("48:00");
  else if (A < B) bsum += getTime("48:00");
  console.log(printTime(asum));
  console.log(printTime(bsum));
});
