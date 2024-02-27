const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const n = parseInt(input[0], 10);
  const a = input
    .slice(1)
    .map((line) => line.split("").map((c) => (c === "T" ? 1 : 0)));
  let ret = Infinity;

  function countFlips(mask) {
    let totalFlips = 0;
    for (let col = 0; col < n; col++) {
      let colFlips = 0;
      for (let row = 0; row < n; row++) {
        // 현재 동전 상태가 뒤집혔는지 확인
        let current = a[row][col] ^ ((mask >> row) & 1);
        colFlips += current;
      }
      // 해당 열에서 더 적은 쪽을 선택
      totalFlips += Math.min(colFlips, n - colFlips);
    }
    return totalFlips;
  }

  for (let mask = 0; mask < 1 << n; mask++) {
    ret = Math.min(ret, countFlips(mask));
  }

  console.log(ret);
  process.exit();
});
