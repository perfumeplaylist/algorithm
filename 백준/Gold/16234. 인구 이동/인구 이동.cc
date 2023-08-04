#include <bits/stdc++.h>
using namespace std;
int n, l, r, a[54][54], visited[54][54], cnt, sum;
vector<pair<int, int>> v;
const int dx[4] = {0, 1, 0, -1};
const int dy[4] = {-1, 0, 1, 0};

void dfs(int y, int x, vector<pair<int, int>> &v)
{
    for (int i = 0; i < 4; i++)
    {
        int cx = x + dx[i];
        int cy = y + dy[i];
        if (cx < 0 || cy < 0 || cx >= n || cy >= n || visited[cy][cx])
            continue;
        if (abs(a[cy][cx] - a[y][x]) >= l && abs(a[cy][cx] - a[y][x]) <= r)
        {
            visited[cy][cx] = 1;
            v.push_back({cy, cx});
            sum += a[cy][cx];
            dfs(cy, cx, v);
        }
    }
}

int main()
{
    cin >> n >> l >> r;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
            cin >> a[i][j];
    }
    while (true)
    {
        bool flag = 0;
        fill(&visited[0][0], &visited[0][0] + 54 * 54, 0);
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (!visited[i][j])
                {
                    v.clear();
                    visited[i][j] = 1;
                    v.push_back({i, j});
                    sum = a[i][j];
                    dfs(i, j, v);
                    if (v.size() == 1)
                        continue;
                    for (pair<int, int> p : v)
                    {
                        a[p.first][p.second] = sum / v.size();
                        flag = 1;
                    }
                }
            }
        }
        if (!flag)
            break;
        cnt++;
    }
    cout << cnt << '\n';
    return 0;
}