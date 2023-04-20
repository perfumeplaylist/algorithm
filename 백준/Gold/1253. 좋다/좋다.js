const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line)) //
  .on("close", () => {
    let cnt = 0;
    input.splice(0, 1);
    const arr = input[0].split(" ").map(Number);
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i];
      let s = 0;
      let e = arr.length - 1;
      while (s < e) {
        if (arr[s] + arr[e] > temp) e--;
        else if (arr[s] + arr[e] < temp) s++;
        else if (arr[s] + arr[e] === temp) {
          if (s != i && e != i) {
            cnt++;
            break;
          } else if (s === i) s++;
          else if (e === i) e--;
        }
      }
    }
    console.log(cnt);
  });
