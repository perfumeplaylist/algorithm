#include <bits/stdc++.h>
using namespace std;
int n;
double a[10004], maxSum, mx;
int main()
{
  scanf("%d", &n);
  for (int i = 0; i < n; i++)
    scanf("%lf", &a[i]);
  double ret = a[0];
  for (int i = 1; i < n; i++)
  {
    if (a[i] > ret * a[i])
      ret = a[i];
    else
      ret *= a[i];
    mx = max(mx, ret);
  }
  printf("%.3lf", mx + 0.00001);
  return 0;
}