#include <bits/stdc++.h>
using namespace std;
int n, lst[104], len;
pair<int, int> a[104];

int main()
{
  cin >> n;
  for (int i = 0; i < n; i++)
    cin >> a[i].first >> a[i].second;
  sort(a, a + n);
  for (int i = 0; i < n; i++)
  {
    auto it = lower_bound(lst, lst + len, a[i].second);
    if (!(*it))
      len++;
    *it = a[i].second;
  }
  cout << n - len << "\n";
  return 0;
}