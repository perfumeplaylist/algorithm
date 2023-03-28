#include <bits/stdc++.h>
using namespace std;
int want, n, m, sum, num, a[1004], b[1004], psuma[2008], psumb[2008];

map<int, int> aCnt, bCnt;

void go(int n, int psum[], map<int, int> &_map)
{
  for (int interval = 1; interval <= n; interval++)
  {
    for (int start = interval; start <= n + interval - 1; start++)
    {
      int sum = psum[start] - psum[start - interval];
      _map[sum]++;
      if (interval == n)
        break;
    }
  }
  return;
}

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  cin >> want >> n >> m;
  for (int i = 1; i <= n; i++)
  {
    cin >> num;
    a[i] = num;
    psuma[i] = psuma[i - 1] + a[i];
  }
  for (int i = n + 1; i <= 2 * n; i++)
    psuma[i] = psuma[i - 1] + a[i - n];
  for (int i = 1; i <= m; i++)
  {
    cin >> num;
    b[i] = num;
    psumb[i] = psumb[i - 1] + b[i];
  }
  for (int i = m + 1; i <= 2 * m; i++)
    psumb[i] = psumb[i - 1] + b[i - m];
  go(n, psuma, aCnt);
  go(m, psumb, bCnt);
  for (int i = 1; i < want; i++)
    sum += aCnt[want - i] * bCnt[i];
  sum += aCnt[want];
  sum += bCnt[want];
  cout << sum << '\n';
  return 0;
}