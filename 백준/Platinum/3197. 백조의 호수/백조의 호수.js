// 3197
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  let [info, ...matrix] = input.split("\n");

  const [N, M] = info.split(" ").map(Number);
  matrix = matrix.map((v) => v.split(""));

  let waterQ = [];
  let swanQ = [];

  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  const visitedSwan = Array.from({ length: N }, () => new Array(M).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] !== "X") {
        visited[i][j] = 1;
        waterQ.push([i, j]);
      }
      if (matrix[i][j] === "L") swanQ.push([i, j]);
    }
  }

  const dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0];

  let days = 1;

  swanQ.pop();
  visitedSwan[swanQ[0][0]][swanQ[0][1]] = true;

  while (true) {
    let flag = false;
    const swanTmp = [];
    const waterTmp = [];

    while (waterQ.length > 0) {
      const [y, x] = waterQ.pop();

      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (nx < 0 || nx >= M || ny < 0 || ny >= N || visited[ny][nx]) continue;
        if (matrix[ny][nx] === "X") {
          visited[ny][nx] = 1;
          waterTmp.push([ny, nx]);
          matrix[ny][nx] = ".";
        }
      }
    }

    while (swanQ.length > 0) {
      const [y, x] = swanQ.pop();

      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (nx < 0 || nx >= M || ny < 0 || ny >= N || visitedSwan[ny][nx])
          continue;
        visitedSwan[ny][nx] = true;
        if (matrix[ny][nx] == ".") swanQ.push([ny, nx]);
        else if (matrix[ny][nx] == "X") swanTmp.push([ny, nx]);
        else if (matrix[ny][nx] == "L") {
          flag = true;
          break;
        }
      }
    }
    if (flag) {
      break;
    }

    swanQ = swanTmp;
    waterQ = waterTmp;
    days++;
  }

  console.log(days);
}
