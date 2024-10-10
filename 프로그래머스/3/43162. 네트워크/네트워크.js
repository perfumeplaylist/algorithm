function go(idx,visited,computers){
    visited[idx]=1;
    for(let i=0;i<computers[idx].length;i++){
        if(visited[i] || !computers[idx][i]) continue;
        go(i,visited,computers);
    }
    return;
}

function solution(n, computers) {
    let answer = 0;
    const visited=Array.from({length:n},()=>0);
    for(let i=0;i<n;i++){
        if(!visited[i]){
            go(i,visited,computers);
            answer++;
        }
    }
    return answer;
}