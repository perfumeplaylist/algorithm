function solution(n, lost, reserve) {
    // 여벌이 있지만 도난당한 경우를 먼저 처리
    const filteredLost = lost.filter(student => !reserve.includes(student));
    const filteredReserve = reserve.filter(student => !lost.includes(student));
    
    // 초기 체육복을 가진 학생 수
    let answer = n - filteredLost.length;
    
    filteredLost.sort((a,b) => a - b);
    filteredReserve.sort((a,b) => a - b);
    
    filteredLost.forEach((student) => {
        const extra = filteredReserve.find(r => Math.abs(r - student) === 1);
        if (extra !== undefined) {
            // 체육복을 빌릴 수 있으면 학생 수 증가
            answer++;
            // 해당 여벌 학생을 reserve 목록에서 제거
            filteredReserve.splice(filteredReserve.indexOf(extra), 1);
        }
    });

    return answer;
}
