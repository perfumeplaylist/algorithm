function solution(nums) {
    let answer = [];
    let obj = {};

    // 각 숫자의 빈도를 계산
    for (let num of nums) {
        if (obj[num]) obj[num] += 1;
        else obj[num] = 1;
    }

    for (let value in obj) {
        if (!answer.includes(Number(value))) {
            answer.push(Number(value));
        }
        if (answer.length >= nums.length / 2) break;
    }

    return answer.length;
}
