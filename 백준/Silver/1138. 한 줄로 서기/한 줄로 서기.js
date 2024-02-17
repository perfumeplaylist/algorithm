const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
  const n = parseInt(input[0], 10); // 사람의 수 N을 입력 받습니다.
  const info = input[1].split(" ").map(Number); // 각 사람의 정보를 입력 받습니다.
  const lineup = new Array(n).fill(0); // 최종 줄 세우기 결과를 저장할 배열, 모두 0으로 초기화

  for (let i = 0; i < n; i++) {
    let space = info[i]; // i번째 사람의 왼쪽에 빈 공간이 몇 개 필요한지
    for (let j = 0; j < n; j++) {
      if (space === 0 && lineup[j] === 0) {
        // 적절한 빈 공간을 찾았다면
        lineup[j] = i + 1; // 현재 사람을 배치하고 반복을 종료
        break;
      } else if (lineup[j] === 0) {
        space--; // 빈 공간을 하나 찾았으므로, 필요한 빈 공간의 수를 감소
      }
    }
  }

  console.log(lineup.join(" ")); // 결과 출력
  process.exit();
});
