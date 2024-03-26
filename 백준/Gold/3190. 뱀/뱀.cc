#include <bits/stdc++.h>
using namespace std;
#define time tt
const int dy[] = {-1, 0, 1, 0};
const int dx[] = {0, 1, 0, -1};
deque<pair<int, int>> dq;
vector<pair<int, int>> _time;
int time, n, k, y, x, l, b, idx, a[104][104];
char c;
bool visited[104][104];
int main()
{
  cin >> n >> k;
  for (int i = 0; i < k; i++)
  {
    cin >> y >> x;
    a[--y][--x] = 1;
  }
  cin >> l;
  for (int i = 0; i < l; i++)
  {
    cin >> b >> c;
    if (c == 'D')
      _time.push_back({b, 1});
    else
      _time.push_back({b, 3});
  }
  dq.push_back({0, 0});
  int cur = 1;
  while (dq.size())
  {
    time++;
    tie(y, x) = dq.front();
    int ny = y + dy[cur];
    int nx = x + dx[cur];
    if (ny < 0 || nx < 0 || ny >= n || nx >= n || visited[ny][nx])
      break;
    if (!a[ny][nx])
    {
      visited[dq.back().first][dq.back().second] = 0;
      dq.pop_back();
    }
    else
      a[ny][nx] = 0;
    visited[ny][nx] = 1;
    dq.push_front({ny, nx});
    if (time == _time[idx].first)
    {
      cur = (cur + _time[idx].second) % 4;
      idx++;
    }
  }
  cout << time << '\n';
  return 0;
}