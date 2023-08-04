
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
    .shift()
    .split(" ")
    .map((item) => +item);

let result = 1;
let start = 0;
let width = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        start = +input[i][j]; // 직사각형 왼쪽위에 꼭지점을 시작점으로 잡는다.
        for (let k = j + 1; k < M; k++) {
            if (+input[i][k] === start) { // start 기준점과 같은 숫자가 있으면
                width = k - j + 1; // 너비를 구한다
                if (
                    i + width - 1 < N && // 기준점 너비의 세로길이가 N보다 작고
                    start === +input[i + width - 1][j] && // 기준점 숫자와 왼쪽 아래 꼭지점의 숫자와 같고
                    input[i + width - 1][j] === input[i + width - 1][k] && // 왼쪽 아래와 오른쪽의 꼭지점 숫자가 같고
                    width * width > result // 너비 * 너비의 값이 result보다 크면
                ) {
                    result = width * width; // result에 width * width 값을 재할당한다
                }
            }
        }
    }
}

console.log(result);
