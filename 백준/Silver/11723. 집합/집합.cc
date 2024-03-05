#include <bits/stdc++.h>
using namespace std;
int m, n, k;
char s[11];
int main()
{
  scanf(" %d", &m);
  for (int i = 0; i < m; i++)
  {
    scanf(" %s %d", &s, &n);
    if (s[0] == 'a' && s[1] == 'd')
      k |= (1 << n);
    else if (s[0] == 'r')
      k &= ~(1 << n);
    else if (s[0] == 't')
      k ^= (1 << n);
    else if (s[0] == 'e')
      k = 0;
    else if (s[0] == 'c')
      printf("%d\n", (k & (1 << n)) == 0 ? 0 : 1);
    else if (s[0] == 'a' && s[1] == 'l')
      k = (1 << 21) - 1;
  }
  return 0;
}