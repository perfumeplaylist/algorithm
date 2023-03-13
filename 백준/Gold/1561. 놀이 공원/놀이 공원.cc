#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
const ll MAX = 60000000004;
ll n, m, lo = 1, hi = MAX, mid, ret, cnt, temp;
int a[10004];

bool check(ll mid)
{
  ll cnt = m;
  for (ll i = 0; i < m; i++)
    cnt += mid / a[i];
  return cnt >= n;
}

int main()
{
  cin >> n >> m;
  for (ll i = 0; i < m; i++)
    cin >> a[i];
  if (n <= m)
  {
    cout << n << "\n";
    return 0;
  }
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
  temp = m;
  for (ll i = 0; i < m; i++)
    temp += ((ret - 1) / a[i]);
  for (ll i = 0; i < m; i++)
  {
    if (ret % a[i] == 0)
      temp++;
    if (temp == n)
    {
      cout << i + 1 << '\n';
      return 0;
    }
  }
  return 0;
}