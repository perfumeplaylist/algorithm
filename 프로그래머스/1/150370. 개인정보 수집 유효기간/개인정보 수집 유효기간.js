function solution(today, terms, privacies) {
    const answer = [];
    const termMap = {};
    const [ty, tm, td] = today.split('.').map(Number);

    const todayTotal = ty * 12 * 28 + tm * 28 + td;

    terms.forEach(term => {
        const [type, month] = term.split(" ");
        termMap[type] = Number(month);
    });

    privacies.forEach((privacy, idx) => {
        const [dateStr, type] = privacy.split(" ");
        let [y, m, d] = dateStr.split('.').map(Number);

        m += termMap[type];
        y += Math.floor((m - 1) / 12);
        m = ((m - 1) % 12) + 1;
        d -= 1;
        if (d === 0) {
            d = 28;
            m -= 1;
            if (m === 0) {
                m = 12;
                y -= 1;
            }
        }

        const expiryTotal = y * 12 * 28 + m * 28 + d;

        if (todayTotal > expiryTotal) {
            answer.push(idx + 1); // 1-based index
        }
    });

    return answer;
}
