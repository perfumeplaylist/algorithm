function solution(people, limit) {
    people.sort((a, b) => a - b); // 몸무게 오름차순 정렬
    let light = 0;  // 가벼운 사람의 인덱스
    let heavy = people.length - 1;  // 무거운 사람의 인덱스
    let answer = 0;
    
    while (light <= heavy) {
        // 가장 가벼운 사람과 가장 무거운 사람을 동시에 태울 수 있다면
        if (people[light] + people[heavy] <= limit) {
            light++;  // 가벼운 사람 태움
        }
        // 무거운 사람은 항상 태움
        heavy--;
        answer++;  // 보트 하나 사용
    }
    
    return answer;
}
