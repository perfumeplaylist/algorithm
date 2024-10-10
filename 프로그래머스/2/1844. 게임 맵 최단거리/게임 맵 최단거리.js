const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

function solution(maps) {
    const [n, m] = [maps.length, maps[0].length];
    const visited = Array.from({ length: n }, () => Array(m).fill(0));
    const queue = [[0, 0, 1]];  
    visited[0][0] = 1; 
    
    while (queue.length > 0) {
        const [y, x, cnt] = queue.shift();
        
        if (y === n - 1 && x === m - 1) {
            return cnt;
        }
        
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            
            if (ny >= 0 && nx >= 0 && ny < n && nx < m && !visited[ny][nx] && maps[ny][nx] === 1) {
                visited[ny][nx] = 1; // 방문 표시
                queue.push([ny, nx, cnt + 1]); // 다음 지점으로 이동
            }
        }
    }
    
    return -1;
}
