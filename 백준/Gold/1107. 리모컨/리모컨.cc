#include <bits/stdc++.h>
using namespace std;
int n, a, btn, temp;
bool che[14];

bool check(int i)
{
  string temp = to_string(i);
  for (int i = 0; i < temp.size(); i++)
  {
    if (che[temp[i] - 48])
      return 0;
  }
  return 1;
}

int main()
{
  cin >> n >> a;
  for (int i = 0; i < a; i++)
  {
    cin >> btn;
    che[btn] = 1;
  }
  int ret = abs(n - 100);
  for (int i = 0; i <= 1000000; i++)
  {
    if (check(i))
    {
      temp = abs(n - i) + to_string(i).length();
      ret = min(ret, temp);
    }
  }
  cout << ret << '\n';
  return 0;
}