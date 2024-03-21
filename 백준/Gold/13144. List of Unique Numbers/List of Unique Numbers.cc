#include <bits/stdc++.h>
using namespace std;
long long ret, a[100004], cnt[100004], n, s, e;
int main()
{
  scanf("%lld", &n);
  for (int i = 0; i < n; i++)
    scanf("%lld", a + i);
  while (e < n)
  {
    if (!cnt[a[e]])
    {
      cnt[a[e]]++;
      e++;
    }
    else
    {
      ret += (e - s);
      cnt[a[s]]--;
      s++;
    }
  }
  ret += (long long)(e - s) * (e - s + 1) / 2;
  cout << ret << '\n';
  return 0;
}