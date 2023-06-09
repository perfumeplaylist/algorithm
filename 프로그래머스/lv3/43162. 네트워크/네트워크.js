let visited;

function dfs(here,computers){
    const stk=[];
    visited[here]=1;
    stk.push(here);
    while(stk.length){
        let idx=stk.pop();
        // console.log(idx);
        // console.log('\n');
        for(let i=0;i<computers[idx].length;i++){
            if(visited[i] || !computers[idx][i]) continue;
            visited[i]=1;
            stk.push(i);
        }
    }
    return;
}

function solution(n, computers) {
    visited=Array.from({length:n},(v,i)=>0);
    let cnt=0;
    for(let i=0;i<n;i++){
        if(!visited[i]){
            dfs(i,computers);
            cnt++;
        }        
    }
    return cnt;
}