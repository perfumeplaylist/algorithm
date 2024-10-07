function solution(phone_book) {
    var answer = true;
    const temp=[...phone_book].sort();
    for(let i=0;i<temp.length-1;i++){
        if(temp[i+1].startsWith(temp[i])){
            answer=false;
            break;
        }
    }
    return answer;
}