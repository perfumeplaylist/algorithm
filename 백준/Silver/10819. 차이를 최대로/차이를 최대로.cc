#include <bits/stdc++.h>
using namespace std;
const int INF = -987654321;
int a[13], temp[13], n, ret = INF;
bool visited[13];
void dfs(int idx)
{
  if (idx == n)
  {
    int sum = 0;
    for (int i = 0; i < n - 1; i++)
      sum += abs(temp[i] - temp[i + 1]);
    ret = max(ret, sum);
    return;
  }
  for (int i = 0; i < n; i++)
  {
    if (!visited[i])
    {
      visited[i] = 1;
      temp[idx] = a[i];
      dfs(idx + 1);
      visited[i] = 0;
    }
  }
}
int main()
{
  cin >> n;
  for (int i = 0; i < n; i++)
    cin >> a[i];
  dfs(0);
  cout << ret << '\n';
  return 0;
}