const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const [n, m] = input[0].split(" ").map(Number);
  let visited = Array.from({ length: n }, () => Array(m).fill(0));
  const maze = input.slice(1).map((v) => v.split("").map(Number));
  
  function bfs() {
    let queue = [[0, 0]];
    visited[0][0] = 1;

    while (queue.length) {
      let [y, x] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let ny = y + dy[i];
        let nx = x + dx[i];

        if (ny >= 0 && ny < n && nx >= 0 && nx < m && !visited[ny][nx] && maze[ny][nx] === 1) {
          visited[ny][nx] = visited[y][x] + 1;
          queue.push([ny, nx]);
        }
      }
    }
  }

  bfs();

  console.log(visited[n - 1][m - 1]);
  process.exit();
});
