const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  // 입력된 데이터가 충분한지 확인
  if (input.length < 2) {
    console.log("0");
    process.exit();
  }

  const [n, m] = input[0].split(" ").map(Number);
  // 책이 없는 경우 바로 0 출력 후 종료
  if (n === 0) {
    console.log("0");
    process.exit();
  }

  const a = input[1].split(" ").map(Number);

  let current = 0;
  let boxCnt = 1;
  for (let i = 0; i < n; i++) {
    if (current + a[i] > m) {
      boxCnt++;
      current = a[i];
    } else {
      current += a[i];
    }
  }

  console.log(boxCnt);
  process.exit();
});
