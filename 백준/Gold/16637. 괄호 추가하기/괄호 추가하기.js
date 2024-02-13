const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input/16637.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const arr = input[1].split("");

function solution(N, arr) {
  let answer = -Infinity;

  const cal = (num1, num2, op) => {
    switch (op) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      default:
        return 0;
    }
  };

  const choice = (idx, val) => {
    let flag = false;

    if (idx >= N - 1) {
      if (val > answer) answer = val;
      return;
    }

    if (idx >= N - 3) flag = true;

    let result1 = cal(Number(val), Number(arr[idx + 2]), arr[idx + 1]);
    choice(idx + 2, result1);

    if (!flag) {
      let temp = cal(Number(arr[idx + 2]), Number(arr[idx + 4]), arr[idx + 3]);
      let result2 = cal(Number(val), temp, arr[idx + 1]);
      choice(idx + 4, result2);
    }
  };

  choice(0, arr[0]);

  return answer;
}

console.log(solution(N, arr));
