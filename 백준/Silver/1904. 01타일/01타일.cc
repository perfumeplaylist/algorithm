#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
ll n, dp[1000004];
int main()
{
  cin >> n;
  dp[1] = 1;
  dp[2] = 2;
  for (int i = 3; i <= n; i++)
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
  cout << dp[n] << '\n';
  return 0;
}