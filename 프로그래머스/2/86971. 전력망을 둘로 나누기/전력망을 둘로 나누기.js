function dfs(here,visited,adj){
    let ret=1;
    for(const there of adj[here]){
        if(visited[there]) continue;
        visited[there]=1;
        ret+=dfs(there,visited,adj);
    }
    
    return ret;
}

function solution(n, wires) {
    let answer = 987654321;
    const adj=Array.from({length:n},()=>[]);
    wires.forEach((value)=>{
        const [a,b]=value;
        adj[a-1].push(b-1);
        adj[b-1].push(a-1);
    });
    for(const [a,b] of wires){
        const visited=Array.from({length:n},()=>0);
        visited[a-1]=1;
        visited[b-1]=1;
        const temp1=dfs(a-1,visited,adj)-1;
        const temp2=dfs(b-1,visited,adj)-1;
        answer=Math.min(answer,Math.abs(temp1-temp2));
    }
    
    return answer;
}