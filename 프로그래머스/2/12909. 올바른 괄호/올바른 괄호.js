function solution(s){
    const stk=[];
    
    let flag=0;
    
    for(const ch of s){
        if(ch==='(') stk.push(ch);
        else{
            if(stk.length) stk.pop();
            else{
                flag=1;
                break;
            }
        }
    }
    
    if(flag || stk.length) return false;

    return true;
}