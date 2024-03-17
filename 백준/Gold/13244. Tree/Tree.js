const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const t = parseInt(input[0], 10);
  let a = input.slice(1);

  function go(node, idx, visited, n) {
    for (let there of node[idx]) {
      if (visited[there] || there < 0 || there >= n) continue;
      visited[there] = 1;
      go(node, there, visited, n);
    }
    return visited;
  }

  for (let i = 0; i < t; i++) {
    const n = parseInt(a[0], 10);
    const g = parseInt(a[1], 10);
    let flag = 0;
    a = a.slice(2);
    const node = Array.from({ length: n }, () => []);
    for (let j = 0; j < g; j++) {
      const [n, m] = a[j].split(" ").map((num) => parseInt(num, 10) - 1);
      node[n].push(m);
      node[m].push(n);
    }
    let visited = Array.from({ length: n }, () => 0);
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        flag++;
        visited[i] = 1;
        visited = go(node, i, visited, n);
      }
    }
    flag === 1 && g === n - 1 ? console.log("tree") : console.log("graph");
    a = a.slice(g);
  }
  process.exit();
});
