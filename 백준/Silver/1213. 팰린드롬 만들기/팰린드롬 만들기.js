const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function solution() {
  let ret = "",
    mid = "",
    flag = 0,
    cnt = 0;
  let num = new Array(26).fill(0);

  for (let a of input) for (let s of a) num[s.charCodeAt(0) - 65]++;

  for (i = 25; i >= 0; i--) {
    if (num[i]) {
      if (num[i] % 2 !== 0) {
        mid = String.fromCodePoint(i + 65);
        cnt++;
        num[i]--;
      }
      if (cnt == 2) {
        flag = 1;
        break;
      }
      for (j = 0; j < num[i]; j += 2) {
        ret = String.fromCodePoint(i + 65) + ret;
        ret += String.fromCodePoint(i + 65);
      }
    }
  }
  if (flag) {
    console.log("I'm Sorry Hansoo");
    return;
  } else if (mid) {
    const temp = ret.split("");
    temp.splice(ret.length / 2, 0, mid);
    console.log(temp.join(""));
  } else console.log(ret);
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution();
});
