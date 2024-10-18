#include <bits/stdc++.h>
using namespace std;
int n;
double a;

int main()
{
  scanf("%d", &n);
  priority_queue<double, vector<double>, greater<double>> pq;
  for (int i = 0; i < n; i++)
  {
    scanf("%lf", &a);
    pq.push(a);
  }
  for (int i = 0; i < 7; i++)
  {
    printf("%.3f\n", pq.top());
    pq.pop();
  }
  return 0;
}