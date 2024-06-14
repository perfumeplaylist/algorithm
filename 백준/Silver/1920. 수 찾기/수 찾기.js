const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    // Parse the input
    const N = parseInt(input[0]);
    const A = input[1].split(' ').map(Number);
    const M = parseInt(input[2]);
    const B = input[3].split(' ').map(Number);

    // Sort array A for binary search
    A.sort((a, b) => a - b);

    // Function to perform binary search
    const binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                return true;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    };

    // Check for each number in B if it exists in A
    const result = B.map(num => (binarySearch(A, num) ? 1 : 0));

    // Print the result
    console.log(result.join('\n'));
});
