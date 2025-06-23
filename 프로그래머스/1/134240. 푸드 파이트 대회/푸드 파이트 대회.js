function solution(food) {
    let left = '';

    for (let i = 1; i < food.length; i++) {
        let repeat = Math.floor(food[i] / 2);
        left += String(i).repeat(repeat);
    }

    const right = [...left].reverse().join('');
    return left + '0' + right;
}
