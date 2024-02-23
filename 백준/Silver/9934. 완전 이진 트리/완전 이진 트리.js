const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  function go(l, r, idx) {
    if (idx === n - 1) {
      ret[idx].push(a[l]);
      return;
    }
    let mid = Math.floor((l + r) / 2);
    ret[idx].push(a[mid]);
    go(l, mid - 1, idx + 1);
    go(mid + 1, r, idx + 1);
    return;
  }
  const n = parseInt(input[0], 10);
  const a = input[1].split(" ").map(Number);
  let ret = Array.from({ length: n }, () => new Array(0));
  go(0, a.length, 0);
  for (let i = 0; i < n; i++) {
    console.log(ret[i].join(" "));
  }
  process.exit();
});
