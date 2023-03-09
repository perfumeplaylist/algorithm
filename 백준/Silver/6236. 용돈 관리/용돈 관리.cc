#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
int n, m, ret, a[100004];

bool check(ll mid)
{
  int cnt = 1;
  int sum = mid;
  for (int i = 0; i < n; i++)
  {
    if (mid - a[i] >= 0)
      mid -= a[i];
    else
    {
      mid = sum;
      cnt++;
      if (a[i] > mid)
        return false;
      else
        mid -= a[i];
    }
  }
  return cnt <= m;
}

int main()
{
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  cin >> n >> m;
  for (int i = 0; i < n; i++)
    cin >> a[i];
  ll lo = 1, hi = 1000000004, mid;
  while (lo <= hi)
  {
    mid = (lo + hi) / 2;
    if (check(mid))
    {
      ret = mid;
      hi = mid - 1;
    }
    else
      lo = mid + 1;
  }
  cout << ret << "\n";
  return 0;
}