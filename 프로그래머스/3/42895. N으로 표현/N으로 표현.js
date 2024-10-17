function solution(N, number) {
    const dp=Array.from({length:9},()=>new Set());
    for(let i=1;i<=8;i++){
        dp[i].add(Number(String(N).repeat(i)));
        
        for(let j=1;j<i;j++){
            for(const y of dp[j]){
                for(const x of dp[i-j]){
                    dp[i].add(y+x);
                    dp[i].add(y-x);
                    dp[i].add(y*x);
                    if(x!==0) dp[i].add(y/x);
                }
            }
        }
        
        if(dp[i].has(number)) return i;
    }
    return -1;
}