#include <bits/stdc++.h>
using namespace std;
int a, b, c, n, m, dist[1004][1004];
vector<pair<int, int>> v[1004];
bool visited[1004];

int go(int here, int b)
{
  queue<pair<int, int>> q;
  visited[here] = 1;
  q.push({here, 0});
  while (q.size())
  {
    int now = q.front().first;
    int cost = q.front().second;
    q.pop();
    if (now == b)
      return cost;
    for (auto next : v[now])
    {
      if (visited[next.first])
        continue;
      visited[next.first] = 1;
      q.push({next.first, next.second + cost});
    }
  }
}

int main()
{
  cin >> n >> m;
  for (int i = 0; i < n - 1; i++)
  {
    cin >> a >> b >> c;
    v[a].push_back({b, c});
    v[b].push_back({a, c});
  }
  for (int i = 0; i < m; i++)
  {
    memset(visited, 0, sizeof(visited));
    cin >> a >> b;
    cout << go(a, b) << '\n';
  }
  return 0;
}