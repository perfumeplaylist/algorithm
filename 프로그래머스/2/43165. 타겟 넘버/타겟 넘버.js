let answer = 0;

function go(idx,sum,numbers,target){
    if(idx===numbers.length){
        if(sum===target) answer++;
        return;
    }    
    go(idx+1,sum+numbers[idx],numbers,target);
    go(idx+1,sum-numbers[idx],numbers,target);
}

function solution(numbers, target) {
    go(0,0,numbers,target);
    return answer;
}