const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  const [n, l] = input[0].split(" ").map(Number);
  const a = input.slice(1).map((line) => line.split(" ").map(Number));
  const b = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  let ret = 0;

  function go(arr) {
    for (let i = 0; i < n; i++) {
      let cnt = 1;
      let j;
      for (j = 0; j < n - 1; j++) {
        if (arr[i][j] === arr[i][j + 1]) cnt++;
        else if (arr[i][j] + 1 === arr[i][j + 1] && cnt >= l) cnt = 1;
        else if (arr[i][j] - 1 === arr[i][j + 1] && cnt >= 0) cnt = -l + 1;
        else break;
      }
      if (j === n - 1 && cnt >= 0) ret++;
    }
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      b[i][j] = a[j][i];
    }
  }
  go(a);
  go(b);
  console.log(ret);
  process.exit();
});
