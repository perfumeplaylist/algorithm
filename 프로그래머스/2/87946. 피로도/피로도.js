let answer = -1;

function comb(arr,temp,k){
    if(!arr.length){
        answer=Math.max(answer,go(temp,k));
    }   
    for(let i=0;i<arr.length;i++){
        const newArr=arr.filter((value)=>value!==arr[i]);
        comb(newArr,temp.concat([arr[i]]),k);
    }
}

function go(temp,k){
    let tempK=k;
    let cnt=0;
    for(const [a,b] of temp){
        if(a<=tempK){
            tempK-=b;
            cnt++;
        }
    }
    return cnt;
}

function solution(k, dungeons) {
    comb(dungeons,[],k);
    return answer;
}