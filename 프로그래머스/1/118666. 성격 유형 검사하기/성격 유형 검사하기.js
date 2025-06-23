const choice_score={
    1:3,
    2:2,
    3:1,
    4:0,
    5:1,
    6:2,
    7:3
};

const socre={
    R:0,
    T:0,C:0,F:0,J:0,M:0,A:0,N:0
};

function solution(survey, choices) {
    let ret = '';
        let stk=[];
    survey.forEach((sur,idx)=>{
        const [s,e]=sur;
        const current=choices[idx];
        if(current===4) return;
        else if(current>4) socre[e]+=choice_score[current];
        else socre[s]+=choice_score[current];
    })
    for(const [key,value] of Object.entries(socre)) {
        if(stk.length){
            const [temp,temp_v]=stk.pop();
            console.log(key,value);
            console.log(temp,temp_v);
            if(value === temp_v){
                ret+=[key,temp].sort((a,b)=> a.localeCompare(b))[0];
            }
            else if(value > temp_v) ret+=key;
            else ret+=temp;
        }else{
            stk.push([key,value]);
        }
    }
    console.log(ret)
    return ret;
}