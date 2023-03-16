#include <bits/stdc++.h>
using namespace std;
const int INF = 987654321;
int n, a[24][24], ret = INF, cnt;

int go(vector<int> start, vector<int> link)
{
  int temp = 0, temp2 = 0;
  for (int i = 0; i < start.size(); i++)
  {
    for (int j = 0; j < start.size(); j++)
    {
      if (i == j)
        continue;
      temp += a[start[i]][start[j]];
    }
  }
  for (int i = 0; i < link.size(); i++)
  {
    for (int j = 0; j < link.size(); j++)
    {
      if (i == j)
        continue;
      temp2 += a[link[i]][link[j]];
    }
  }
  int mn = abs(temp - temp2);
  return mn;
}

int main()
{
  cin >> n;
  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
      cin >> a[i][j];
  for (int i = 1; i < (1 << n); i++)
  {
    vector<int> start, link;
    for (int j = 0; j < n; j++)
    {
      if (i & (1 << j))
        start.push_back(j);
      else
        link.push_back(j);
    }
    if (!start.size() || !link.size())
      continue;
    ret = min(ret, go(start, link));
  }
  cout << ret << '\n';
  return 0;
}