#include <bits/stdc++.h>
using namespace std;

int n, m, visited[200004], ret;
bool flag = 0;

void go(int n)
{
  queue<int> q;
  visited[n] = 1;
  q.push(n);
  while (q.size())
  {
    int now = q.front();
    if (now == m)
    {
      ret = visited[now] - 1;
      break;
    }
    q.pop();
    for (int next : {now + 1, now - 1, 2 * now})
    {
      if (visited[next] || next < 0 || next > 100001)
        continue;
      visited[next] = 1 + visited[now];
      q.push(next);
    }
  }
}

int main()
{
  cin >> n >> m;
  go(n);
  cout << ret << '\n';
  return 0;
}