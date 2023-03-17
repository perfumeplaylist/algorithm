#include <bits/stdc++.h>
using namespace std;
long long dp[10004], t, n;
int main()
{
  dp[0] = 1;
  for (int i = 1; i <= 3; i++)
    for (int j = 1; j <= 10000; j++)
      if (j - i >= 0)
        dp[j] += dp[j - i];
  cin >> t;
  while (t--)
  {
    cin >> n;
    cout << dp[n] << '\n';
  }
  return 0;
}