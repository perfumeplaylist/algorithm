#include <bits/stdc++.h>
using namespace std;
string s, temp;
int main()
{
  cin >> s >> temp;
  stack<char> stk;
  for (char c : s)
  {
    stk.push(c);
    if (stk.size() >= temp.size() && stk.top() == temp[temp.size() - 1])
    {
      string ss = "";
      for (char t : temp)
      {
        ss += stk.top();
        stk.pop();
      }
      reverse(ss.begin(), ss.end());
      if (ss != temp)
      {
        for (char s : ss)
          stk.push(s);
      }
    }
  }
  string ret = "";
  int n = stk.size();
  for (int i = 0; i < n; i++)
  {
    ret += stk.top();
    stk.pop();
  }
  if (ret.empty())
    cout << "FRULA" << '\n';
  else
  {
    reverse(ret.begin(), ret.end());
    cout << ret << "\n";
  }
  return 0;
}