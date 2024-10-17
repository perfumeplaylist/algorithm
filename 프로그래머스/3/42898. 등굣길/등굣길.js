function solution(m, n, puddles) {
    const dp = Array.from({ length: n }, () => Array(m).fill(0));  // DP 배열 초기화
    dp[0][0] = 1;  // 출발점 초기화

    // 물웅덩이 표시
    for (const [x, y] of puddles) {
        dp[y - 1][x - 1] = -1;  // 물웅덩이를 -1로 표시
    }

    // DP 배열 채우기
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            if (dp[y][x] === -1) {  // 물웅덩이면 경로 수는 0
                dp[y][x] = 0;
                continue;
            }

            if (y > 0) dp[y][x] += dp[y - 1][x];  // 위쪽에서 오는 경로 추가
            if (x > 0) dp[y][x] += dp[y][x - 1];  // 왼쪽에서 오는 경로 추가

            dp[y][x] %= 1000000007;  // 결과 값이 너무 커질 수 있으므로 나머지 계산
        }
    }

    return dp[n - 1][m - 1];  // 도착점까지의 경로 수 반환
}
