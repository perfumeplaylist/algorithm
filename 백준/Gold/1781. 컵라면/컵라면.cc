#include <bits/stdc++.h>
using namespace std;
priority_queue<int, vector<int>, greater<int>> pq;
int n, ret, s, e;
vector<pair<int, int>> v;
int main()
{
  cin >> n;
  for (int i = 0; i < n; i++)
  {
    cin >> s >> e;
    v.push_back({s, e});
  }
  sort(v.begin(), v.end());
  for (int i = 0; i < n; i++)
  {
    pq.push(v[i].second);
    if (pq.size() > v[i].first)
      pq.pop();
  }
  while (pq.size())
  {
    ret += pq.top();
    pq.pop();
  }
  cout << ret << '\n';
  return 0;
}