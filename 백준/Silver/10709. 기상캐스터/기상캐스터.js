const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, m] = input[0].split(" ").map(Number);
  let a = new Array(n).fill(-1).map(() => new Array(m).fill(-1));
  let visited = new Array(n).fill(0).map(() => new Array(m).fill(0));
  input.splice(0, 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) if (input[i][j] === "c") a[i][j] = 0;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (a[i][j] === 0 && !visited[i][j]) {
        while (a[i][j + 1] === -1) {
          if (j === m - 1) break;
          else {
            a[i][j + 1] = a[i][j] + 1;
            visited[i][j] = 1;
            j++;
          }
        }
      }
    }
  }
  let ret = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) ret += a[i][j] + " ";
    ret += "\n";
  }
  console.log(ret);
});
