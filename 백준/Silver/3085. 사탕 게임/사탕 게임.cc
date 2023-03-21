#include <bits/stdc++.h>
using namespace std;
int n, maxCnt;
char a[51][51];

void countColumn()
{
  for (int i = 0; i < n; i++)
  {
    int cnt = 1;
    for (int j = 0; j < n; j++)
    {
      if (a[i][j] == a[i][j + 1])
        cnt++;
      else
      {
        if (cnt > maxCnt)
          maxCnt = cnt;
        cnt = 1;
      }
    }
  }
}

void countRow()
{
  for (int i = 0; i < n; i++)
  {
    int cnt = 1;
    for (int j = 0; j < n; j++)
    {
      if (a[j][i] == a[j + 1][i])
        cnt++;
      else
      {
        if (cnt > maxCnt)
          maxCnt = cnt;
        cnt = 1;
      }
    }
  }
}

int main()
{
  cin >> n;
  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
      cin >> a[i][j];
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n - 1; j++)
    {
      swap(a[i][j], a[i][j + 1]);
      countRow();
      countColumn();
      swap(a[i][j + 1], a[i][j]);

      swap(a[i][j], a[i + 1][j]);
      countRow();
      countColumn();
      swap(a[i + 1][j], a[i][j]);
    }
  }
  cout << maxCnt << '\n';
  return 0;
}