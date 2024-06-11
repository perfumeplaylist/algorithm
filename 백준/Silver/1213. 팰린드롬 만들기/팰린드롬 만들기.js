const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const a = new Array(26).fill(0);
  let flag = 0;
  let ok = 0;
  let ret = "";
  let mid = "";
  input[0].split("").forEach((v) => a[v.charCodeAt(0) - 65]++);
  for (let i = 25; i >= 0; i--) {
    const temp = String.fromCharCode(i + 65);
    let num = a[i];
    if (num % 2 !== 0) {
      mid = temp;
      num--;
      flag++;
    }
    if (flag >= 2) {
      ok = 1;
      break;
    }
    for (let j = 0; j < num; j += 2) {
      ret = temp + ret;
      ret += temp;
    }
  }
  if (ok) {
    console.log("I'm Sorry Hansoo");
    return;
  } else if (mid) {
    const prev = ret.slice(0, ret.length / 2);
    const next = ret.slice(ret.length / 2);
    const temp = prev + mid + next;
    console.log(temp);
    return;
  } else console.log(ret);
  return;
});
