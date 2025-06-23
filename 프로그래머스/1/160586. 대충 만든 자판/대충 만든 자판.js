function solution(keymap, targets) {
    const answer = [];

    targets.forEach((target) => {
        let ret = 0;
        let impossible = false;

        for (let ch of target) {
            let minPress = Infinity;
            for (let key of keymap) {
                const idx = key.indexOf(ch);
                if (idx !== -1) minPress = Math.min(minPress, idx + 1);
            }
            if (minPress === Infinity) {
                impossible = true;
                break;
            }
            ret += minPress;
        }

        answer.push(impossible ? -1 : ret);
    });

    return answer;
}
