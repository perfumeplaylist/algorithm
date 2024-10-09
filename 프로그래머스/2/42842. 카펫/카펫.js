function solution(brown, yellow) {
    const area=brown+yellow;
    for(let h=1;h<=area;h++){
        if(area%h===0){
            const w=area/h;
            if(2*(w+h)-4===brown) return [w,h];
        }
    }
}