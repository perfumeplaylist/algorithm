// 방향 배열 (위, 오른쪽, 아래, 왼쪽)
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

// 2차원 배열 탐색 (DFS)
function dfs(grid, x, y, value, visited) {
    const n = grid.length;
    const shape = [];
    const stack = [[x, y]];
    visited[x][y] = true;
    shape.push([x, y]);

    while (stack.length > 0) {
        const [curX, curY] = stack.pop();

        for (let [dx, dy] of directions) {
            const nx = curX + dx;
            const ny = curY + dy;

            if (nx >= 0 && ny >= 0 && nx < n && ny < n && grid[nx][ny] === value && !visited[nx][ny]) {
                stack.push([nx, ny]);
                visited[nx][ny] = true;
                shape.push([nx, ny]);
            }
        }
    }
    
    return shape;
}


function areShapesEqual(shape1, shape2) {
    if (shape1.length !== shape2.length) return false;
    for (let i = 0; i < shape1.length; i++) {
        if (shape1[i][0] !== shape2[i][0] || shape1[i][1] !== shape2[i][1]) return false;
    }
    return true;
}


function normalize(shape) {
    const minX = Math.min(...shape.map(([x, y]) => x));
    const minY = Math.min(...shape.map(([x, y]) => y));
    return shape.map(([x, y]) => [x - minX, y - minY]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}

function rotate(arr){
    return arr.map(([x,y])=>[-y,x]);    
}

function solution(game_board, table) {
    const n = game_board.length;
    const visitedBoard = Array.from({ length: n }, () => Array(n).fill(false));
    const visitedTable = Array.from({ length: n }, () => Array(n).fill(false));
    const emptySpaces = [];
    const puzzlePieces = [];
    
        // 빈 공간 찾기
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!visitedBoard[i][j] && game_board[i][j] === 0) {
                emptySpaces.push(normalize(dfs(game_board, i, j, 0, visitedBoard)));
            }
        }
    }

    // 퍼즐 조각 찾기
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!visitedTable[i][j] && table[i][j] === 1) {
                puzzlePieces.push(normalize(dfs(table, i, j, 1, visitedTable)));
            }
        }
    }
    
    console.log("emptySpaces:",emptySpaces);
    console.log("puzzlePieces:",puzzlePieces);
    
    let totalFilled = 0;
    
    // 빈 공간에 맞는 퍼즐 조각을 찾아서 채우기
    for (let emptySpace of emptySpaces) {
        for (let i = 0; i < puzzlePieces.length; i++) {
            let piece = puzzlePieces[i];
            if (piece === null) continue;  // 이미 사용된 퍼즐 조각은 건너뜀

            for (let r = 0; r < 4; r++) {  // 회전하면서 맞는지 확인
                if (areShapesEqual(emptySpace, piece)) {
                    totalFilled += piece.length;
                    puzzlePieces[i] = null;  // 퍼즐 조각 사용 완료
                    break;
                }
                piece = normalize(rotate(piece));  // 90도 회전
            }

            if (puzzlePieces[i] === null) break;  // 맞는 조각을 찾으면 다음 빈 공간으로
        }
    }

    return totalFilled;
    
}