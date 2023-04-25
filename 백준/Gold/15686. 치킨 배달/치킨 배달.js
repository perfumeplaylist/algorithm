const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let chicken = [],
  chickenList = [],
  home = [];

let n,
  m,
  a,
  ret2 = 987654321;

function comb(start, temp) {
  if (temp.length === m) {
    chickenList.push(temp.slice());
    return;
  }
  for (let i = start + 1; i < chicken.length; i++) {
    temp.push(i);
    comb(i, temp);
    temp.pop();
  }
  return;
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  [n, m] = input[0].split(" ").map(Number);
  input.splice(0, 1);
  a = input.map((el) => el.split(" ").map(Number));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (a[i][j] === 2) chicken.push({ y: i, x: j });
      else if (a[i][j] === 1) home.push({ y: i, x: j });
    }
  }
  let temp = [];
  comb(-1, temp);
  for (let _chicken of chickenList) {
    let ret = 0;
    for (let _home of home) {
      let mn = 987654321;
      for (let ch of _chicken) {
        // console.log(ch);
        let dist =
          Math.abs(_home.y - chicken[ch].y) + Math.abs(_home.x - chicken[ch].x);
        mn = Math.min(mn, dist);
      }
      ret += mn;
    }
    ret2 = Math.min(ret2, ret);
  }
  console.log(ret2);
});
