#include <bits/stdc++.h>
using namespace std;
int n, cnt, e, d, temp;
vector<pair<int, int>> v;
int main()
{
  cin >> n;
  for (int i = 0; i < n; i++)
  {
    cin >> e >> d;
    v.push_back({e, d});
  }
  sort(v.begin(), v.end());
  temp = v[0].first + v[0].second;
  for (int i = 1; i < n; i++)
  {
    if (temp > v[i].first)
      temp += v[i].second;
    else
      temp = (v[i].first + v[i].second);
  }
  cout << temp << '\n';
  return 0;
}