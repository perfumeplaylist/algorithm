const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let arr = require('fs').readFileSync(path).toString().trim().split('\n')

n = +arr.shift()
arr = arr[0].split(' ').map(Number)
let temps = [
  [9, 3, 1],
  [9, 1, 3],
  [3, 9, 1],
  [3, 1, 9],
  [1, 3, 9],
  [1, 9, 3],
]
let temps2 = [
  [9, 3],
  [3, 9],
]
let min = 123456789

if (n === 3) {
  let dp = Array.from({ length: 61 }, () =>
    Array.from({ length: 61 }, () => Array(61).fill(0))
  )
  let [a, b, c] = arr
  let q = []
  q.push([a, b, c])
  dp[a][b][c] = 0
  while (q.length > 0) {
    let [a, b, c] = q.shift()

    if (a === 0 && b === 0 && c === 0) {
      console.log(dp[a][b][c])
      break
    }

    for (let t of temps) {
      let [na, nb, nc] = [a - t[0], b - t[1], c - t[2]]
      na = na < 0 ? 0 : na
      nb = nb < 0 ? 0 : nb
      nc = nc < 0 ? 0 : nc

      if (dp[na][nb][nc]) continue

      dp[na][nb][nc] = dp[a][b][c] + 1
      q.push([na, nb, nc])
    }
  }
} else if (n === 2) {
  let dp = Array.from({ length: 61 }, () => Array(61).fill(0))
  let [a, b] = arr
  let q = []
  q.push([a, b])
  dp[a][b] = 0
  while (q.length > 0) {
    let [a, b] = q.shift()

    if (a === 0 && b === 0) {
      console.log(dp[a][b])
      break
    }

    for (let t of temps) {
      let [na, nb] = [a - t[0], b - t[1]]
      na = na < 0 ? 0 : na
      nb = nb < 0 ? 0 : nb

      if (dp[na][nb]) continue

      dp[na][nb] = dp[a][b] + 1
      q.push([na, nb])
    }
  }
} else if (n === 1) {
  let [a] = arr
  if (a % 9 === 0) {
    console.log(a / 9)
  } else {
    console.log(parseInt(a / 9) + 1)
  }
}
