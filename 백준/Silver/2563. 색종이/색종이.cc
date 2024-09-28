#include <bits/stdc++.h>
using namespace std;
int n, a, b, cnt;
bool visited[101][101];
int main()
{
  cin >> n;
  for (int s = 0; s < n; s++)
  {
    cin >> a >> b;
    for (int i = b; i < b + 10; i++)
    {
      for (int j = a; j < a + 10; j++)
        visited[i][j] = 1;
    }
  }
  for (int i = 0; i < 100; i++)
  {
    for (int j = 0; j < 100; j++)
      if (visited[i][j])
        cnt++;
  }
  cout << cnt << '\n';
  return 0;
}