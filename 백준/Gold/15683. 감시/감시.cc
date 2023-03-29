#include <bits/stdc++.h>
using namespace std;
const int INF = 987654321;
const int dy[] = {-1, 0, 1, 0};
const int dx[] = {0, 1, 0, -1};

int n, m, ret = INF, a[13][13];
vector<pair<int, int>> v;

vector<pair<int, int>> extendCCTV(int here, int dir)
{
  vector<pair<int, int>> _change;
  int y = v[here].first;
  int x = v[here].second;
  if (a[y][x] == 1)
  {
    while (true)
    {
      int ny = y + dy[dir];
      int nx = x + dx[dir];
      if (ny >= 0 && nx >= 0 && ny < n && nx < m && a[ny][nx] != 6)
      {
        if (a[ny][nx] == 0)
        {
          a[ny][nx] = 8;
          _change.push_back({ny, nx});
        }
        y = ny;
        x = nx;
      }
      else
        break;
    }
  }
  else if (a[y][x] == 2)
  {
    for (int i = 0; i <= 2; i += 2)
    {
      int _y = y;
      int _x = x;
      while (true)
      {
        int ny = _y + dy[(dir + i) % 4];
        int nx = _x + dx[(dir + i) % 4];
        if (ny >= 0 && nx >= 0 && ny < n && nx < m && a[ny][nx] != 6)
        {
          if (a[ny][nx] == 0)
          {
            a[ny][nx] = 8;
            _change.push_back({ny, nx});
          }
          _y = ny;
          _x = nx;
        }
        else
          break;
      }
    }
  }
  else if (a[y][x] == 3)
  {
    for (int i = 0; i < 2; i++)
    {
      int _y = y;
      int _x = x;
      while (true)
      {
        int ny = _y + dy[(dir + i) % 4];
        int nx = _x + dx[(dir + i) % 4];
        if (ny >= 0 && nx >= 0 && ny < n && nx < m && a[ny][nx] != 6)
        {
          if (a[ny][nx] == 0)
          {
            a[ny][nx] = 8;
            _change.push_back({ny, nx});
          }
          _y = ny;
          _x = nx;
        }
        else
          break;
      }
    }
  }
  else if (a[y][x] == 4)
  {
    for (int i = 0; i < 4; i++)
    {
      if (i == 2)
        continue;
      int _y = y;
      int _x = x;
      while (true)
      {
        int ny = _y + dy[(dir + i) % 4];
        int nx = _x + dx[(dir + i) % 4];
        if (ny >= 0 && nx >= 0 && ny < n && nx < m && a[ny][nx] != 6)
        {
          if (a[ny][nx] == 0)
          {
            a[ny][nx] = 8;
            _change.push_back({ny, nx});
          }
          _y = ny;
          _x = nx;
        }
        else
          break;
      }
    }
  }
  else if (a[y][x] == 5)
  {
    for (int i = 0; i < 4; i++)
    {
      int _y = y;
      int _x = x;
      while (true)
      {
        int ny = _y + dy[(dir + i) % 4];
        int nx = _x + dx[(dir + i) % 4];
        if (ny >= 0 && nx >= 0 && ny < n && nx < m && a[ny][nx] != 6)
        {
          if (a[ny][nx] == 0)
          {
            a[ny][nx] = 8;
            _change.push_back({ny, nx});
          }
          _y = ny;
          _x = nx;
        }
        else
          break;
      }
    }
  }
  return _change;
}
void dfs(int here)
{
  if (here == v.size())
  {
    int cnt = 0;
    for (int i = 0; i < n; i++)
    {
      for (int j = 0; j < m; j++)
        if (a[i][j] == 0)
          cnt++;
    }
    ret = min(ret, cnt);
    return;
  }
  for (int i = 0; i < 4; i++)
  {
    vector<pair<int, int>> _change = extendCCTV(here, i);
    dfs(here + 1);
    for (auto b : _change)
      a[b.first][b.second] = 0;
  }
  return;
}

int main()
{
  cin >> n >> m;
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < m; j++)
    {
      cin >> a[i][j];
      if (a[i][j] != 0 && a[i][j] != 6)
        v.push_back({i, j});
    }
  }
  dfs(0);
  cout << ret << '\n';
  return 0;
}