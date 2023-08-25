const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const num = [];
  const opear_array = [];
  let ret = -987654321;
  input[1].split("").forEach((item) => {
    if (item.charCodeAt(0) >= 48 && item.charCodeAt(0) <= 57) {
      num.push(Number(item));
    } else {
      opear_array.push(item);
    }
  });

  function opear(a, opear, b) {
    if (opear === "+") return a + b;
    else if (opear === "-") return a - b;
    else if (opear === "*") return a * b;
  }

  function go(start, index) {
    if (index === num.length - 1) {
      ret = Math.max(ret, start);
      return;
    }
    go(opear(start, opear_array[index], num[index + 1]), index + 1);
    if (index + 2 <= num.length - 1) {
      go(
        opear(
          start,
          opear_array[index],
          opear(num[index + 1], opear_array[index + 1], num[index + 2])
        ),
        index + 2
      );
    }
    return;
  }

  go(num[0], 0);
  console.log(ret);

  process.exit();
});
