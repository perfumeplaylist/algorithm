#include <bits/stdc++.h>
using namespace std;
queue<pair<int, int>> waterQ, swanQ, temp_swan, temp_water;
int r, c, sx, sy, day, y, x, visited[1504][1504], visited_swan[1504][1504];
char a[1504][1504];
const int dx[] = {0, 1, 0, -1};
const int dy[] = {-1, 0, 1, 0};

void qClear(queue<pair<int, int>> &q)
{
    queue<pair<int, int>> temp;
    swap(q, temp);
}

void water_melting()
{
    while (waterQ.size())
    {
        tie(y, x) = waterQ.front();
        waterQ.pop();
        for (int i = 0; i < 4; i++)
        {
            int cx = x + dx[i];
            int cy = y + dy[i];
            if (cx < 0 || cy < 0 || cx >= c || cy >= r || visited[cy][cx])
                continue;
            if (a[cy][cx] == 'X')
            {
                visited[cy][cx] = 1;
                a[cy][cx] = '.';
                temp_water.push({cy, cx});
            }
        }
    }
}

bool move_swan()
{
    while (swanQ.size())
    {
        tie(y, x) = swanQ.front();
        swanQ.pop();
        for (int i = 0; i < 4; i++)
        {
            int cx = x + dx[i];
            int cy = y + dy[i];
            if (cx < 0 || cy < 0 || cx >= c || cy >= r || visited_swan[cy][cx])
                continue;
            visited_swan[cy][cx] = 1;
            if (a[cy][cx] == '.')
                swanQ.push({cy, cx});
            if (a[cy][cx] == 'X')
                temp_swan.push({cy, cx});
            if (a[cy][cx] == 'L')
                return true;
        }
    }
    return false;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    cin >> r >> c;
    for (int i = 0; i < r; i++)
    {
        for (int j = 0; j < c; j++)
        {
            cin >> a[i][j];
            if (a[i][j] == 'L')
                sy = i, sx = j;
            if (a[i][j] == '.' || a[i][j] == 'L')
            {
                visited[i][j] = 1;
                waterQ.push({i, j});
            }
        }
    }
    visited_swan[sy][sx] = 1;
    swanQ.push({sy, sx});
    while (true)
    {
        if (move_swan())
            break;
        water_melting();
        waterQ = temp_water;
        swanQ = temp_swan;
        qClear(temp_water);
        qClear(temp_swan);
        day++;
    }
    cout << day << "\n";
    return 0;
}