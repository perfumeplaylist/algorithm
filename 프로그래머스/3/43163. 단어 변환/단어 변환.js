function isDiffOne(a, b) {
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diff++;
    if (diff > 1) return false;
  }
  return diff === 1;
}

function bfs(begin, target, words) {
  const visited = new Set();
  const q = [{ temp: begin, ret: 0 }];

  while (q.length) {
    const { temp, ret } = q.shift();
    if (temp === target) return ret;

    for (const word of words) {
      if (!visited.has(word) && isDiffOne(temp, word)) {
        visited.add(word);
        q.push({ temp: word, ret: ret + 1 });
      }
    }
  }

  return 0;
}

function solution(begin, target, words) {
  return bfs(begin, target, words);
}
