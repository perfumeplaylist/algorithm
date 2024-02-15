// 14497
{
  const fs = require("fs");
  const filePath =
    process.platform === "linux" ? "/dev/stdin" : "bigStone/input.txt";
  const input = fs.readFileSync(filePath).toString().trim();

  const [info, points, ...arr] = input.split("\n");
  const [N, M] = info.split(" ").map(Number);
  const [y1, x1, y2, x2] = points.split(" ").map((v) => Number(v) - 1);
  const matrix = arr.map((v) => v.split(""));

  const dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0];

  let cnt = 0;

  let q = [[y1, x1]];
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  visited[y1][x1] = true;

  while (matrix[y2][x2] === "#") {
    const tmp = [];
    while (q.length > 0) {
      const [y, x] = q.shift();

      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];

        if (nx >= 0 && nx < M && ny >= 0 && ny < N && !visited[ny][nx]) {
          visited[ny][nx] = true;
          if (matrix[ny][nx] === "#") {
            matrix[ny][nx] = "0";
            break;
          } else if (matrix[ny][nx] === "1") {
            matrix[ny][nx] = "0";
            tmp.push([ny, nx]);
          } else {
            q.push([ny, nx]);
          }
        }
      }
    }

    q = tmp;
    cnt++;
  }
  console.log(cnt);
}
