#include <bits/stdc++.h>
using namespace std;
int n, s, e;
vector<pair<int, int>> v;
int main()
{
  cin >> n;
  for (int i = 0; i < n; i++)
  {
    cin >> s >> e;
    v.push_back({e, s});
  }
  sort(v.begin(), v.end());
  e = v[0].first;
  s = v[0].second;
  int cnt = 1;
  for (int i = 1; i <= n; i++)
  {
    if (v[i].second < e)
      continue;
    s = v[i].second;
    e = v[i].first;
    cnt++;
  }
  cout << cnt << '\n';
  return 0;
}