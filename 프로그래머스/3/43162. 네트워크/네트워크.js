function dfs(here,visited,a){
    visited[here]=1;
    for(const there of a[here]){
        if(visited[there]) continue;
        dfs(there,visited,a);
    }
}

function solution(n, computers) {
    let cnt=0;
    const visited=Array(computers.length);
    const list=Array.from({length:computers.length},()=>[]);
    
    for(let i=0;i<n;i++){
        for(let j=0;j<computers[i].length;j++){
            if(i!==j && computers[i][j]){
                list[i].push(j);
            }
        }
    }
    for(let i=0;i<n;i++){
            if(!visited[i]){
                dfs(i,visited,list)
                cnt++;
            }
    }
    return cnt;
}