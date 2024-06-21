#include <cstdio>
#include <algorithm>
using namespace std;
int dp[100001];
int n, k, w, v;
int main(){
    scanf("%d %d", &n, &k);
    while(n--){
        scanf("%d %d", &w, &v);
        for(int j = k; j >= w; j--){
            dp[j] = max(dp[j], dp[j - w] + v);
        }
    }
    printf("%d\n", dp[k]);
    return 0;
}
