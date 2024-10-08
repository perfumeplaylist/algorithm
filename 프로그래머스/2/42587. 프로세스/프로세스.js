function solution(priorities, location) {
    // 문서의 중요도와 위치를 함께 저장하는 큐 생성
    let queue = priorities.map((value, idx) => ({ value, idx }));
    let order = 0;  // 몇 번째로 인쇄되는지 기록할 변수

    while (queue.length > 0) {
        // 큐에서 첫 번째 문서를 꺼냄
        let current = queue.shift();
        
        // 남아있는 큐 중 현재 문서보다 중요도가 높은 문서가 있는지 확인
        if (queue.some(doc => doc.value > current.value)) {
            // 중요도가 더 높은 문서가 있으면 현재 문서를 다시 맨 뒤로 보냄
            queue.push(current);
        } else {
            // 중요도가 가장 높은 문서일 경우 인쇄됨
            order++;  // 인쇄 순서를 증가시킴
            if (current.idx === location) {
                return order;  // 요청한 문서의 인쇄 순서 반환
            }
        }
    }
}
