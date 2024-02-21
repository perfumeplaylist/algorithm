const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
const N = +input.shift();

let solution = (input, arr, transInput) => {
  if (transInput) {
    newInput = [];
    input
      .split(" ")
      .reverse()
      .map((char) => (char === "<" ? newInput.push(">") : newInput.push("<")));
    input = [...newInput];
  } else {
    input = input.split(" ");
  }

  idx = 0;
  foreIdx = 0;
  tmp = [];
  result = [];
  input.map((value, index) => {
    index++;
    if (value === ">") {
      result.push(...[...arr.slice(foreIdx, index).reverse()]);
      foreIdx = index;
    }
  });
  if (result.length !== N + 1) {
    result = [...result, ...arr.slice(result.length, N + 1).reverse()];
  }
  return transInput ? result.reverse().join("") : result.join("");
};

let arr = new Array(N + 1).fill().map((_, idx) => 9 - idx);
console.log(solution(input[0], arr, false));
arr = new Array(N + 1).fill().map((_, idx) => N - idx);
console.log(solution(input[0], arr, true));
