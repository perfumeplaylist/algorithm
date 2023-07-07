const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let A = (B = asum = bsum = prev = 0);

function changeTime(time) {
  const min = Number(time.substring(0, 2));
  const sec = Number(time.substring(3));
  return min * 60 + sec;
}

function getWinerTime(score) {
  return changeTime(score) - changeTime(prev);
}

function printTime(sum) {
  const min = "00" + Math.floor(sum / 60);
  const sec = "00" + Math.floor(sum % 60);
  return (
    min.substring(min.length - 2, min.length) +
    ":" +
    sec.substring(sec.length - 2, sec.length)
  );
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = Number(input[0]);
  for (let i = 1; i <= n; i++) {
    const [team, score] = input[i].split(" ");
    if (A > B) asum += getWinerTime(score);
    else if (B > A) bsum += getWinerTime(score);
    team === "1" ? A++ : B++;
    prev = score;
  }
  if (A > B) asum += getWinerTime("48:00");
  else if (A < B) bsum += getWinerTime("48:00");
  console.log(printTime(asum));
  console.log(printTime(bsum));
  process.exit();
});
