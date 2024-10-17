#include <bits/stdc++.h>
using namespace std;
int t,w,dp[1004][2][34],b[1004];

int go(int idx,int tree,int cnt){
    if(cnt<0) return -1e9;
    if(idx==t) return 0;
    int &ret=dp[idx][tree][cnt];
    if(~ret) return ret;
    return ret=max(go(idx+1,tree^1,cnt-1),go(idx+1,tree,cnt))+(tree==b[idx]-1);
}

int main(){
    memset(dp,-1,sizeof(dp));
    cin>>t>>w;
    for(int i=0;i<t;i++) cin>>b[i];
    cout<< max(go(0,1,w-1),go(0,0,w))<<'\n';
    return 0;
}