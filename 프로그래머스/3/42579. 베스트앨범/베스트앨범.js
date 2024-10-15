function solution(genres, plays) {
    const answer = [];
    const obj={};
    const retObj={};
    const newGenres=genres.map((gen,idx)=>({gen,idx}));
    const newPlays=plays.map((play,idx)=>({play,idx}));
    for(const {idx,gen} of newGenres){
        obj[idx]={
            gen
        }
    }
    for(const {idx,play} of newPlays){
        obj[idx]={
            ...obj[idx],
            play
        }
    }
    for(let i=0;i<newPlays.length;i++){
        const {gen,play}=obj[i];
        if(retObj[gen]){
            const cnt=retObj[gen].cnt+play;
            const value=[...retObj[gen].value,{play,idx:i}].sort((a,b)=>{
                if(a.play===b.play) return a.idx-b.idx;
                return b.play-a.play;
            })
            retObj[gen]={cnt,value};
        }
        else{
             retObj[gen]={cnt:play,value:[{play,idx:i}]}
        }
    }
    const sortRet=[];
    for(const key of Object.keys(retObj)){
        sortRet.push(retObj[key]);
    }
    const ret=sortRet.sort((a,b)=>b.cnt-a.cnt).map((v)=>{
        const {cnt,value}=v;
        const filterValue=value.map(({play,idx})=>idx).slice(0,2)
        return {cnt,value:filterValue}
    });
    for(const value of ret){
        // console.log(...value.value)
        answer.push(...value.value)
    }
    return answer;
}