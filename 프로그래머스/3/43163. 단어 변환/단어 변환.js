function canTransform(word1,word2){
    let diffCnt=0;
    for(let i=0;i<word1.length;i++){
        if(word1[i]!==word2[i]) diffCnt++;
        if(diffCnt>1) return false;
    }
    return diffCnt===1;
}

function solution(begin, target, words) {
    let answer = 987654321;
    const isIncludeWords=words.indexOf(target);
    if(isIncludeWords===-1) return 0;
    const stk=[];
    const visited={};
    visited[begin]=1;
    stk.push({word:begin,cnt:0});
    while(stk.length){
        const {word,cnt}=stk.shift();
        if(word===target){
            answer=Math.min(cnt,answer);
            continue;
        }
        for(const w of words){
            let tempCnt=0;
            if(canTransform(w,word) && !visited[w]){
                visited[w]=1;
                stk.push({word:w,cnt:cnt+1})
            }
        }
    }
    return answer
}