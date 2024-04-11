#include <bits/stdc++.h>
using namespace std;
pair<int, int> P[1000004];
int from, to, ret, n, l, r;
int main()
{
   ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
  cin >> n;
  for (int i = 0; i < n; i++)
  {
    cin >> from >> to;
    P[i] = {from, to};
  }
  sort(P, P + n);
  l = P[0].first;
  r = P[0].second;
  for (int i = 1; i < n; i++)
  {
    if (P[i].first > r)
    {
      ret += (r - l);
      l = P[i].first;
      r = P[i].second;
    }
    else if (P[i].first <= r && P[i].second >= r)
    {
      r = P[i].second;
    }
  }
  ret += (r - l);
  cout << ret << '\n';
  return 0;
}