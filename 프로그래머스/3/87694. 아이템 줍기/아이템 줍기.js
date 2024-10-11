const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function solution(rectangle, characterX, characterY, itemX, itemY) {
    const map = Array.from({ length: 101 }, () => Array(101).fill(0));
    const visited = Array.from({ length: 101 }, () => Array(101).fill(0));
    
    // 좌표 2배로 확장 (처리 편의를 위해)
    rectangle.forEach(([x1, y1, x2, y2]) => {
        for (let i = 2 * x1; i <= 2 * x2; i++) {
            for (let j = 2 * y1; j <= 2 * y2; j++) {
                map[i][j] = 1; // 테두리나 내부를 1로 설정
            }
        }
    });
    
    // 내부는 0으로 처리 (경계선만 남기기 위해)
    rectangle.forEach(([x1, y1, x2, y2]) => {
        for (let i = 2 * x1 + 1; i < 2 * x2; i++) {
            for (let j = 2 * y1 + 1; j < 2 * y2; j++) {
                map[i][j] = 0; // 내부는 다시 0으로 설정
            }
        }
    });
    
    // BFS 탐색
    const queue = [[2 * characterX, 2 * characterY, 0]]; 
    visited[2 * characterX][2 * characterY] = 1;
    
    while (queue.length) {
        const [x, y, cnt] = queue.shift();
        
        if (x === 2 * itemX && y === 2 * itemY) {
            return cnt / 2; 
        }
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (nx >= 0 && ny >= 0 && nx <= 100 && ny <= 100 && !visited[nx][ny] && map[nx][ny] === 1) {
                visited[nx][ny] = 1;
                queue.push([nx, ny, cnt + 1]);
            }
        }
    }
    
    return -1; // 만약 목표 지점에 도달하지 못할 경우 (예외 상황)
}
