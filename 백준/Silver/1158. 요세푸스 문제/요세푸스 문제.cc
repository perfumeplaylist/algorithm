#include <bits/stdc++.h>
using namespace std;
int n, m, tmp;
queue<int> q;
int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  cin >> m >> n;
  for (int i = 1; i <= m; i++)
    q.push(i);
  cout << "<";
  while (q.size() > 1)
  {
    for (int i = 0; i < n - 1; i++)
    {
      tmp = q.front();
      q.push(tmp);
      q.pop();
    }
    tmp = q.front();
    cout << tmp << ", ";
    q.pop();
  }
  tmp = q.front();
  cout << tmp << ">\n";
  return 0;
}