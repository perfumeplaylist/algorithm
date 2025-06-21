function solution(numbers, target) {
    let ret = 0;

    function dfs(idx, sum) {
        if (idx === numbers.length) {
            if (sum === target) ret++;
            return;
        }

        dfs(idx + 1, sum + numbers[idx]);
        dfs(idx + 1, sum - numbers[idx]);
    }

    dfs(0, 0);

    return ret;
}
