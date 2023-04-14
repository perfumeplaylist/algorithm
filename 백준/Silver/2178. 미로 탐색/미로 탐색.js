const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Queue {
  constructor() {
    this.data = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.data[this.rear] === undefined) return 0;
    else return this.rear - this.front + 1;
  }

  add(value) {
    if (this.size() === 0) {
      this.data["0"] = value;
    } else {
      this.rear += 1;
      this.data[this.rear] = value;
    }
  }

  popleft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.data[this.front];
      delete this.data[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.data[this.front];
      delete this.data[this.front];
      this.front += 1;
    }
    return temp;
  }
}
let input = [];
let visited = new Array(100).fill(0).map(() => new Array(100).fill(0));
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
let y, x, ny, nx, ret;

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, m] = input[0].split(" ").map(Number);
  const arr = input.slice(1).map((el) => el.split("").map(Number));
  let q = new Queue();
  y = 0;
  x = 0;
  q.add({ y, x });
  visited[y][x] = 1;
  while (q.size()) {
    const { y, x } = q.popleft();
    if (y === n - 1 && x === m - 1) {
      ret = visited[y][x];
      break;
    }
    for (let i = 0; i < 4; i++) {
      ny = y + dy[i];
      nx = x + dx[i];
      if (ny < 0 || nx < 0 || ny >= n || nx >= m || visited[ny][nx]) continue;
      if (arr[ny][nx] === 1) {
        visited[ny][nx] = 1 + visited[y][x];
        q.add({ y: ny, x: nx });
      }
    }
  }
  console.log(ret);
  return;
});
