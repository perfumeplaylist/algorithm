#include <bits/stdc++.h>
using namespace std;
int l, c;
char temp, a[25];
string temp1;
vector<string> v;
int main()
{
  cin >> l >> c;
  for (int i = 0; i < c; i++)
  {
    cin >> temp;
    temp1 += temp;
  }
  sort(temp1.begin(), temp1.end());
  for (int i = 0; i < temp1.size(); i++)
    a[i] = temp1[i];
  for (int i = 0; i < (1 << c); i++)
  {
    if (__builtin_popcount(i) < l || __builtin_popcount(i) > l)
      continue;
    string sum = "";
    for (int j = 0; j < c; j++)
      if (i & (1 << j))
        sum += a[j];
    int rsum = 0, lsum = 0;
    for (char s : sum)
    {
      if (s == 'a' || s == 'e' || s == 'o' || s == 'i' || s == 'u')
        rsum++;
      else
        lsum++;
    }
    if (rsum >= 1 && lsum >= 2)
      v.push_back(sum);
  }
  sort(v.begin(), v.end());
  for (auto b : v)
    cout << b << '\n';
  return 0;
}