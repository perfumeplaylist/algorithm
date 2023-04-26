const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let temp = [
  [9, 3, 1],
  [9, 1, 3],
  [3, 9, 1],
  [3, 1, 9],
  [1, 3, 9],
  [1, 9, 3],
];

let q = [];
let visited = new Array(64)
  .fill(0)
  .map(() => new Array(64).fill(0).map(() => new Array(64).fill(0)));

function go(a, b = 0, c = 0) {
  visited[a][b][c] = 1;
  q.push({ a, b, c });
  while (q.length) {
    let { a, b, c } = q.shift();
    for (let i = 0; i < 6; i++) {
      let na = Math.max(0, a - temp[i][0]);
      let nb = Math.max(0, b - temp[i][1]);
      let nc = Math.max(0, c - temp[i][2]);
      if (
        na < 0 ||
        nb < 0 ||
        nc < 0 ||
        na > 60 ||
        nb > 60 ||
        nc > 60 ||
        visited[na][nb][nc]
      )
        continue;
      visited[na][nb][nc] = 1 + visited[a][b][c];
      q.push({ a: na, b: nb, c: nc });
    }
  }
  return visited[0][0][0] - 1;
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [a, b, c] = input[1].split(" ").map(Number);
  console.log(go(a, b, c));
});
