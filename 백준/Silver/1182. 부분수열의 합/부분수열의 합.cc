#include <bits/stdc++.h>
using namespace std;
int n, s, a[24], cnt;
int main()
{
  cin >> n >> s;
  for (int i = 0; i < n; i++)
    cin >> a[i];
  for (int i = 1; i <= (1 << n) - 1; i++)
  {
    int sum = 0;
    for (int j = 0; j < n; j++)
    {
      if (i & (1 << j))
        sum += a[j];
    }
    if (sum == s)
      cnt++;
  }
  cout << cnt << '\n';
  return 0;
}