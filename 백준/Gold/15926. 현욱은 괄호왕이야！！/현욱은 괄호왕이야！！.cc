#include <bits/stdc++.h>
using namespace std;
int n, d[200004], cnt, mx;
string s;
int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  stack<int> stk;
  cin >> n >> s;
  for (int i = 0; i < s.size(); i++)
  {
    if (s[i] == '(')
      stk.push(i);
    else if (stk.size())
    {
      d[i] = d[stk.top()] = 1;
      stk.pop();
    }
  }
  for (int i = 0; i < s.size(); i++)
  {
    if (d[i])
    {
      cnt++;
      mx = max(mx, cnt);
    }
    else
      cnt = 0;
  }
  cout << mx << '\n';
  return 0;
}