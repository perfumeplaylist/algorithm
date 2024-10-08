function solution(numbers) {
    const answer = numbers.map((value)=>new String(value)).sort((a,b)=>(b+a)-(a+b)).join("");
    
    return answer[0]==='0' ?'0':answer;
}