#include <bits/stdc++.h>
using namespace std;
string s;
int main()
{
  cin >> s;
  bool flag = true;
  for (int i = 0; i < s.size(); i++)
  {
    if (s.substr(i, 2) == "pi" || s.substr(i, 2) == "ka")
      i += 1;
    else if (s.substr(i, 3) == "chu")
      i += 2;
    else
    {
      flag = false;
      break;
    }
  }
  if (!flag)
    cout << "NO" << '\n';
  else
    cout << "YES" << '\n';
  return 0;
}