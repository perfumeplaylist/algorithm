const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let visited = new Array(10).fill(0);
let n,
  opear,
  ret = [];

function customSort(a, b) {
  if (a.length === b.length) {
    return a > b;
  }
  return a.length > b.length;
}
function temp(prev, opear, curv) {
  if (opear === ">") return prev > curv;
  else if (opear === "<") return prev < curv;
}

function go(idx, prev) {
  if (idx === opear.length + 1) {
    ret.push(prev);
    return;
  }
  for (let i = 0; i <= 9; i++) {
    if (visited[i]) continue;
    if (idx === 0 || temp(prev[idx - 1], opear[idx - 1], i)) {
      visited[i] = 1;
      go(idx + 1, prev + i.toString());
      visited[i] = 0;
    }
  }
  return;
}
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  n = Number(input[0]);
  opear = input.slice(1)[0].split(" ");
  go(0, "");
  ret.sort((a, b) => customSort(a, b));
  console.log(ret[ret.length - 1]);
  console.log(ret[0]);
});
