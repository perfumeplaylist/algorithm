#include <bits/stdc++.h>
using namespace std;
int n, m, a[13];
vector<int> v;
set<vector<int>> ret;
int main()
{
  cin >> n >> m;
  for (int i = 0; i < n; i++)
    a[i] = i + 1;
  do
  {
    v.clear();
    for (int i = 0; i < m; i++)
      v.push_back(a[i]);
    ret.insert(v);
  } while (next_permutation(a, a + n));
  for (auto r : ret)
  {
    for (auto a : r)
      cout << a << ' ';
    cout << '\n';
  }
  return 0;
}