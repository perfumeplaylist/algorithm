#include <bits/stdc++.h>
using namespace std;
int n,num,a[10000004],len;
pair<int,int> ans[10000004];
stack<int> stk;
int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    cin>>n;
    for(int i=0;i<n;i++){
        cin>>num;
        auto lower_pos=lower_bound(a,a+len,num);
        int pos=(int)(lower_bound(a,a+len,num)-a);
        if(*lower_pos==0) len++;
        *lower_pos=num;
        ans[i].first=pos;
        ans[i].second=num;
    }
    cout<< len<<'\n';
    for(int i=n-1;i>=0;i--){
        if(ans[i].first==len-1){
            stk.push(ans[i].second);
            len--;
        }
    }
    while(stk.size()){
        cout<<stk.top()<<" ";
        stk.pop();
    }
    return 0;
}