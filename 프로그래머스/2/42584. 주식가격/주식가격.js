// 현재 가격과 prices의 마지막 가격 비교
function solution(prices) {
    const answer = [];
    const n=prices.length;
    const stk=[];
    for(let i=0;i<prices.length;i++){
        while(stk.length && prices[i] < prices[stk[stk.length-1]]){
            const j=stk.pop();
            answer[j]=i-j;
        }
        stk.push(i);
    }
    while(stk.length){
        const j=stk.pop();
        answer[j]=n-1-j;
    }
    return answer;
}