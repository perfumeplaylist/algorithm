function solution(array, commands) {
    return commands.map(([i, j, k]) => {
        // i-1 ~ j까지 자르고, 정렬 후 k번째 값 반환
        return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
    });
}
