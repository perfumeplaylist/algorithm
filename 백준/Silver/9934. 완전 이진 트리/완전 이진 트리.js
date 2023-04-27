const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let a,
  n,
  ret = new Array(10).fill(0).map(() => new Array(0));

function go(s, e, level) {
  if (level === n - 1) {
    ret[level].push(a[s]);
    return;
  }
  let mid = Math.floor((s + e) / 2);
  ret[level].push(a[mid]);
  go(s, mid - 1, level + 1);
  go(mid + 1, e, level + 1);
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  n = Number(input[0]);
  a = input.slice(1)[0].split(" ");
  go(0, a.length, 0);
  for (let i = 0; i < n; i++) {
    console.log(ret[i].join(" "));
  }
});
