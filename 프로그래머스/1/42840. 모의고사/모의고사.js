const score = {
    1: [1, 2, 3, 4, 5],
    2: [2, 1, 2, 3, 2, 4, 2, 5],
    3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
};

function solution(answers) {
    let maxCnt = -987654321;
    const result = [];
    
    for (const [key, value] of Object.entries(score)) {
        // 각 수포자의 답안을 주기적으로 순환하면서 정답 개수를 계산
        const correctCount = answers.filter((answer, idx) => answer === value[idx % value.length]).length;

        // 현재까지의 최대 정답 개수보다 크면 result 초기화 후 갱신
        if (correctCount > maxCnt) {
            maxCnt = correctCount;
            result.length = 0; // 기존에 저장된 값을 지우고
            result.push(Number(key)); // 새로운 최대값에 해당하는 사람 추가
        } else if (correctCount === maxCnt) {
            result.push(Number(key)); // 최대값과 동일하면 해당 사람 추가
        }
    }

    // 가장 많이 맞춘 사람들을 반환 (오름차순 정렬)
    return result.sort((a, b) => a - b);
}
