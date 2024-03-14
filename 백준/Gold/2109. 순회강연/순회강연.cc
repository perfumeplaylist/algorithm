#include <bits/stdc++.h>
using namespace std;
priority_queue<int, vector<int>, greater<int>> pq;
int n, d, p, ret;
vector<pair<int, int>> v;
int main()
{
  cin >> n;
  for (int i = 0; i < n; i++)
  {
    cin >> d >> p;
    v.push_back({p, d});
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