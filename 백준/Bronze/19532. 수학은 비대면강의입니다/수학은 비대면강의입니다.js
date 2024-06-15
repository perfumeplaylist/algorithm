const readline = require('readline');

// 입력을 받기 위한 인터페이스 설정
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
    let [a1, b1, c1, a2, b2, c2] = input[0].split(' ').map(Number);

    // 두 이차방정식을 해결하기 위해서 y를 소거하는 방법을 사용합니다.
    for (let x = -999; x <= 999; x++) {
        for (let y = -999; y <= 999; y++) {
            if (a1 * x + b1 * y === c1 && a2 * x + b2 * y === c2) {
                console.log(x, y);
                return;
            }
        }
    }
});
