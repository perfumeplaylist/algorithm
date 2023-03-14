#include <bits/stdc++.h>
using namespace std;
int n, a[13];

void comb(int start, vector<int> v)
{
  if (v.size() == 6)
  {
    for (int i = 0; i < 6; i++)
      cout << v[i] << " ";
    cout << "\n";
    return;
  }
  for (int i = start + 1; i < n; i++)
  {
    v.push_back(a[i]);
    comb(i, v);
    v.pop_back();
  }
  return;
}

int main()
{
  while (true)
  {
    cin >> n;
    if (n == 0)
      break;
    for (int i = 0; i < n; i++)
      cin >> a[i];
    vector<int> v;
    comb(-1, v);
    cout << '\n';
  }
  return 0;
}