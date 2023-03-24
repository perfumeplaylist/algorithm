#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
ll t, n, dp[104];
int main()
{
  cin >> t;
  dp[1] = dp[2] = dp[3] = 1;
  dp[4] = dp[5] = 2;
  while (t--)
  {
    cin >> n;
    for (int i = 6; i <= n; i++)
      dp[i] = dp[i - 1] + dp[i - 5];
    cout << dp[n] << '\n';
  }
  return 0;
}