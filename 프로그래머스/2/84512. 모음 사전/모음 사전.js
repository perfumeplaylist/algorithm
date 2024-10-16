function solution(word) {
    let answer = 0;
    const vowel=[ 'A', 'E', 'I', 'O', 'U'];
    const position_weights = [781, 156, 31, 6, 1];
    for(let i=0;i<word.length;i++){
        const idx=vowel.indexOf(word[i]);
        answer+=idx*position_weights[i]+1;
    }
    return answer;
}