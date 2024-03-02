const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  const [n, k] = input[0].split(" ").map(Number);
  if (k < 5) {
    console.log(0);
    return;
  } else if (k === 26) {
    console.log(n);
    return;
  }

  const words = input.slice(1).map(word =>
    word.split("").reduce((acc, cur) => acc | (1 << (cur.charCodeAt(0) - 97)), 0)
  );

  const baseChars = ['a', 'n', 't', 'i', 'c'].reduce((acc, cur) => acc | (1 << (cur.charCodeAt(0) - 97)), 0);
  let maxRead = 0;

  function dfs(idx, k, learned) {
    if (k === 0 || idx === 26) {
      const readCount = words.filter(word => (word & learned) === word).length;
      maxRead = Math.max(maxRead, readCount);
      return;
    }

    if (!(baseChars & (1 << idx))) { // 'antic' 제외한 알파벳 탐색
      dfs(idx + 1, k - 1, learned | (1 << idx)); // 현재 알파벳을 배움
    }
    dfs(idx + 1, k, learned); // 현재 알파벳을 배우지 않음
  }

  dfs(0, k - 5, baseChars); // 'antic' 기본 알파벳 고려
  console.log(maxRead);
});
