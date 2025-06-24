function solution(players, callings) {
    const indexMap=new Map();
    for(let i=0;i<players.length;i++){
        indexMap.set(players[i],i);
    }
    for(const call of callings){
        const currentIndex=indexMap.get(call);
        const prevIndex=currentIndex-1;
         const frontPlayer = players[prevIndex];
        
        [players[prevIndex],players[currentIndex]]=[players[currentIndex],players[prevIndex]];
        
        indexMap.set(call,prevIndex);
        indexMap.set(frontPlayer,currentIndex);
    }
    return players;
}