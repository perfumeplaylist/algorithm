const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let n, k;
let visited = new Array(100001).fill(0);
let cnt = new Array(100001).fill(0);

function go(here) {
  visited[here] = 1;
  cnt[here] = 1;
  const q = [];
  q.push(here);
  while (q.length) {
    let now = q.shift();
    for (let next of [now + 1, now - 1, 2 * now]) {
      if (next >= 0 && next <= 100004) {
        if (!visited[next]) {
          visited[next] = 1 + visited[now];
          cnt[next] += cnt[now];
          q.push(next);
        } else if (visited[next] === 1 + visited[now]) {
          cnt[next] += cnt[now];
        }
      }
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
    console.log(1);
    return 0;
  }
  go(n);
  console.log(visited[k] - 1);
  console.log(cnt[k]);
});
