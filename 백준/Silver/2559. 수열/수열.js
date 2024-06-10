const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input.shift().split(' ').map(Number)
const temps = input[0].split(' ').map(Number)
let curr = temps.slice(0, K).reduce((acc, value) => {
    return acc + value
}, 0)

let max = curr
for (let i = K; i < N; i++) {
  curr = curr - temps[i - K] + temps[i]
  max = Math.max(max, curr)
}

console.log(max)