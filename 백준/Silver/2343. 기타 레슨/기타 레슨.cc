#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
ll n, m, a[100004], ret, psum, lo, hi, mid;

bool check(int mid)
{
  for (int i = 0; i < n; i++)
    if (mid < a[i])
      return false;
  int temp = mid;
  int cnt = 0;
  for (int i = 0; i < n; i++)
  {
    if (mid - a[i] < 0)
    {
      mid = temp;
      cnt++;
    }
    mid -= a[i];
  }
  if (temp != mid)
    cnt++;
  return cnt <= m;
}
int main()
{
  cin >> n >> m;
  for (int i = 0; i < n; i++)
  {
    cin >> a[i];
    psum += a[i];
  }
  lo = 0;
  hi = psum;
  while (lo <= hi)
  {
    mid = (lo + hi) / 2;
    if (check(mid))
    {
      hi = mid - 1;
      ret = mid;
    }
    else
      lo = mid + 1;
  }
  cout << ret << '\n';
  return 0;
}