#include <bits/stdc++.h>
using namespace std;
int n, a[100004], x, cnt, l, r;
int main()
{
  cin >> n;
  for (int i = 1; i <= n; i++)
    cin >> a[i];
  cin >> x;
  sort(a, a + (n + 1));
  l = 1;
  r = n;
  while (true)
  {
    if (l == r || l > r)
      break;
    if (a[l] + a[r] == x)
    {
      cnt++;
      r--;
    }
    else if (a[l] + a[r] > x)
      r--;
    else if (a[l] + a[r] < x)
      l++;
  }
  cout << cnt << '\n';
  return 0;
}