#include <bits/stdc++.h>
using namespace std;
int n, m, a, b, acnt, bcnt;
map<int, int> mp;
int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  cin >> n >> m;
  for (int i = 0; i < n; i++)
  {
    cin >> a;
    mp[a] = 1;
  }
  for (int i = 0; i < m; i++)
  {
    cin >> b;
    if (mp[b] == 0)
      bcnt++;
    else
      mp[b]--;
  }
  for (auto m : mp)
  {
    if (m.second == 0)
      continue;
    acnt++;
  }
  cout << acnt + bcnt << '\n';

  return 0;
}