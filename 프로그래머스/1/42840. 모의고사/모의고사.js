const score = {
    1: [1, 2, 3, 4, 5],
    2: [2, 1, 2, 3, 2, 4, 2, 5],
    3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
};

function solution(answers) {
    // 각 패턴의 정답 개수를 저장할 배열
    let counts = [0, 0, 0];
    
    // 각 사람의 패턴을 순환하면서 정답을 맞춘 개수 계산
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === score[1][i % score[1].length]) counts[0]++;
        if (answers[i] === score[2][i % score[2].length]) counts[1]++;
        if (answers[i] === score[3][i % score[3].length]) counts[2]++;
    }

    // 가장 많이 맞춘 정답 개수를 구함
    const maxCount = Math.max(...counts);

    // 가장 많이 맞춘 사람(들)을 반환 (1번, 2번, 3번 순서)
    return counts
        .map((count, idx) => (count === maxCount ? idx + 1 : null)) // 가장 많이 맞춘 사람만 필터링
        .filter((person) => person !== null) // null 값 제거
        .sort((a, b) => a - b); // 오름차순 정렬
}
