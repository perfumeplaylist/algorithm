#include <bits/stdc++.h>
using namespace std;
int n, a[1001], ret = 1, cnt[1001], idx, prev_list[1001];
vector<int> real_;

int main()
{
  scanf("%d", &n);
  for (int i = 0; i < n; i++)
  {
    scanf("%d", &a[i]);
  }
  fill(prev_list, prev_list + 1001, -1);
  fill(cnt, cnt + 1001, 1);
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < i; j++)
    {
      if (a[j] < a[i] && cnt[i] < cnt[j] + 1)
      {
        cnt[i] = cnt[j] + 1;
        prev_list[i] = j;
        if (ret < cnt[i])
        {
          ret = cnt[i];
          idx = i;
        }
      }
    }
  }
  printf("%d\n", ret);
  int i = idx;
  for (; prev_list[i] != -1; i = prev_list[i])
  {
    real_.push_back(a[i]);
  }
  real_.push_back(a[i]);
  for (int i = real_.size() - 1; i >= 0; i--)
  {
    printf("%d ", real_[i]);
  }
  return 0;
}
