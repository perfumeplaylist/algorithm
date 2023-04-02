#include <bits/stdc++.h>
using namespace std;
int n, a[20][20], temp[20][20][3], ret;

bool check(int y, int x, int dir)
{
  if (dir == 0 || dir == 2)
  {
    if (!a[y][x])
      return true;
  }
  else if (dir == 1)
  {
    if (a[y][x] == 0 && a[y - 1][x] == 0 && a[y][x - 1] == 0)
      return true;
  }
  return false;
}

int main()
{
  cin >> n;
  for (int i = 1; i <= n; i++)
    for (int j = 1; j <= n; j++)
      cin >> a[i][j];
  temp[1][2][0] = 1;
  for (int i = 1; i <= n; i++)
  {
    for (int j = 1; j <= n; j++)
    {
      if (check(i, j + 1, 0))
        temp[i][j + 1][0] += temp[i][j][0];
      if (check(i + 1, j + 1, 1))
        temp[i + 1][j + 1][1] += temp[i][j][0];

      if (check(i + 1, j, 2))
        temp[i + 1][j][2] += temp[i][j][2];
      if (check(i + 1, j + 1, 1))
        temp[i + 1][j + 1][1] += temp[i][j][2];

      if (check(i, j + 1, 0))
        temp[i][j + 1][0] += temp[i][j][1];
      if (check(i + 1, j, 2))
        temp[i + 1][j][2] += temp[i][j][1];
      if (check(i + 1, j + 1, 1))
        temp[i + 1][j + 1][1] += temp[i][j][1];
    }
  }
  ret += temp[n][n][0] + temp[n][n][1] + temp[n][n][2];
  cout << ret << '\n';
  return 0;
}