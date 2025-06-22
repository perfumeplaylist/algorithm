function solution(array, commands) {
    const answer = [];
    for(const command of commands){
        const [i,j,k]=command;
        const temp=[]
        for(let a=i-1;a<=j-1;a++){
            temp.push(array[a]);
        }
        temp.sort((a,b)=>a-b);
        answer.push(temp[k-1]);
    }
    return answer;
}