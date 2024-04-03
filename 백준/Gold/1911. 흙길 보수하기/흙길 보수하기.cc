#include <bits/stdc++.h>
using namespace std;
int n, l, ret, d, a, b;
vector<pair<int, int>> v;
int main()
{
  cin >> n >> l;
  for (int i = 0; i < n; i++)
  {
    cin >> a >> b;
    v.push_back({a, b});
  }
  sort(v.begin(), v.end());
  int idx = 0;
  for (int i = 0; i < n; i++)
  {
    if (v[i].second <= idx)
      continue;
    if (v[i].first > idx)
    {
      d = (v[i].second - v[i].first) / l + ((v[i].second - v[i].first) % l ? 1 : 0);
      idx = v[i].first + d * l;
    }
    else
    {
      d = (v[i].second - idx) / l + ((v[i].second - idx) % l ? 1 : 0);
      idx = idx + d * l;
    }
    ret += d;
  }
  cout << ret << '\n';
  return 0;
}