#include <bits/stdc++.h>

using namespace std;

bool check(string temp){
    int cnt=0;
    for(char a:temp){
        if(a=='(') cnt++;
        else cnt--;
        if(cnt<0) return false;
    }
    return cnt==0;
}


string go(string temp){
    if(check(temp)) return temp;
    int i,cnt1=0,cnt2=0;
    for(i=0;i<temp.size();i++){
        if(temp[i]=='(') cnt1++;
        else cnt2++;
        if(cnt1==cnt2) break;
    }
    string u=temp.substr(0,i+1);
    string v=temp.substr(i+1,temp.size()-(i+1));
    if(check(u)) return u+go(v);
    else{
        string ret="";
        ret+="(";
        ret+=go(v);
        ret+=")";
        u=u.substr(1,u.size()-2);
        for(int i=0;i<u.size();i++){
            if(u[i]=='(') ret+=")";
            else ret+="(";
        }
        return ret;
    }
}

string solution(string p) {
    string answer = go(p);
    return answer;
}