#include <bits/stdc++.h>
using namespace std;
const int INF = 987654321;
int n, a[24][24], mn = INF;

int go(vector<int> b, vector<int> c)
{
  int temp = 0, temp1 = 0;
  for (int i = 0; i < n / 2; i++)
  {
    for (int j = 0; j < n / 2; j++)
    {
      if (i == j)
        continue;
      temp += a[b[i]][b[j]];
      temp1 += a[c[i]][c[j]];
    }
  }
  return abs(temp - temp1);
}

int main()
{
  cin >> n;
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n; j++)
      cin >> a[i][j];
  }
  for (int i = 0; i < (1 << n); i++)
  {
    vector<int> start, link;
    if (__builtin_popcount(i) != n / 2)
      continue;
    for (int j = 0; j < n; j++)
    {
      if (i & (1 << j))
        start.push_back(j);
      else
        link.push_back(j);
    }
    mn = min(mn, go(start, link));
  }
  cout << mn << '\n';
  return 0;
}