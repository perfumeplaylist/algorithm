{
  const fs = require("fs");
  const input =
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString().trim()
      : fs.readFileSync("bigStone/input.txt").toString().trim();

  const [N, ...arr] = input.split("\n").map(Number);
  console.log(
    arr
      .map((v) => {
        let fCnt = 0;
        for (let i = 5; i <= v; i *= 5) {
          fCnt += Math.floor(v / i);
        }
        return fCnt;
      })
      .join("\n")
  );
}
