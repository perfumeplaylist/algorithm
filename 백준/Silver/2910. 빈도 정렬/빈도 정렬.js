const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let arr = require('fs').readFileSync(path).toString().trim().split('\n')
arr = arr[1].split(' ').map(Number)
let obj = {}
let ans = []

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] === undefined) {
    obj[arr[i]] = {
      count: 1,
      idx: i,
      value: arr[i],
    }
  } else {
    obj[arr[i]].count++
  }
}

let res = Object.values(obj)
res.sort((a, b) => b.count - a.count || a.idx - b.idx)

for (let item of res) {
  for (let i = 0; i < item.count; i++) {
    ans.push(item.value)
  }
}

console.log(ans.join(' '))
