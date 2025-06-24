function getRank(number){
    console.log(number)
    return number >=2 ? 7 -number : 6;     
}

function solution(lottos, win_nums) {
   const zeroCount=lottos.filter((lo)=>lo===0).length;
  const matchCount = lottos.filter((n) => win_nums.includes(n)).length;
    
    const maxCount=zeroCount+matchCount;
    const minCount=matchCount;
    
    return [getRank(maxCount),getRank(minCount)]
    
}