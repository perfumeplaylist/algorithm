const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const temp = input.map((value) => value.split(" ").map(Number));
  const [n, m] = temp[0];
  const ret = {};
  let retString = "";
  for (let i = 0; i < n; i++) {
    if (ret[temp[1][i]]) ret[temp[1][i]].cnt++;
    else {
      ret[temp[1][i]] = { cnt: 1, i };
    }
  }
  const tempObj = JSON.parse(JSON.stringify(ret));
  const tempArray = [];
  for (const obj in tempObj) tempArray.push({ key: obj, value: tempObj[obj] });
  tempArray.sort((a, b) => {
    if (a.value.cnt === b.value.cnt) return a.value.i > b.value.i ? 1 : -1;
    return a.value.cnt > b.value.cnt ? -1 : 1;
  });
  for (const arr of tempArray) {
    const {
      key,
      value: { cnt },
    } = arr;
    for (let i = 0; i < cnt; i++) retString += key + " ";
  }
  console.log(retString);
});
