const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let visited = new Array(100001).fill(0);
let prev = new Array(100001).fill(0);
let n,
  k,
  ret,
  v = [];

function go(here) {
  visited[here] = 1;
  prev[here] = here;
  const q = [];
  q.push(here);
  while (q.length) {
    let now = q.shift();
    if (now === k) {
      ret = visited[now] - 1;
      break;
    }
    for (let next of [now + 1, now - 1, 2 * now]) {
      if (next < 0 || next > 100000 || visited[next]) continue;
      visited[next] = 1 + visited[now];
      prev[next] = now;
      q.push(next);
    }
  }
  return;
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  [n, k] = input[0].split(" ").map(Number);
  if (n === k) {
    console.log(0);
    console.log(n);
    return 0;
  }
  if (k > 200000) {
    return 0;
  }
  go(n);
  console.log(ret);
  v.push(k);
  for (let i = k; i != n; i = prev[i]) {
    v.push(prev[i]);
  }
  v.reverse();
  console.log(v.join(" "));
});
