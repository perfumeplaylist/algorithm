#include <bits/stdc++.h>
using namespace std;
string a, b, ret;

void go()
{
  int sum = 0;
  while (a.size() || b.size() || sum)
  {
    if (a.size())
    {
      sum += a.back() - '0';
      a.pop_back();
    }
    if (b.size())
    {
      sum += b.back() - '0';
      b.pop_back();
    }
    ret += (sum % 10) + '0';
    sum /= 10;
  }
  reverse(ret.begin(), ret.end());
  return;
}

int main()
{
  cin >> a >> b;
  go();
  cout << ret << '\n';
  return 0;
}