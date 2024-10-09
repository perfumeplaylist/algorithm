function getCombinations(arr) {
    const result = new Set(); // 중복된 수를 제거하기 위해 Set 사용

    const generateCombination = (current, remaining) => {
        // 현재 조합을 숫자로 변환하여 Set에 추가
        if (current.length > 0) {
            result.add(Number(current));
        }

        // 남은 숫자를 하나씩 추가하여 조합 생성
        for (let i = 0; i < remaining.length; i++) {
            generateCombination(current + remaining[i], remaining.slice(0, i).concat(remaining.slice(i + 1)));
        }
    };

    generateCombination('', arr);
    return Array.from(result); // Set을 배열로 변환
}

function solution(numbers) {
    // 1. 문자열을 숫자 배열로 변환
    const arr = numbers.split('');
    
    // 2. 조합을 통해서 만들 수 있는 수를 모두 생성
    const combinations = getCombinations(arr);

    // 3. 소수인지 확인하는 함수 (이전에 설명한 방법 사용)
    const isPrime = (n) => {
        if (n <= 1) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    };

    // 4. 소수라면 cnt++
    let cnt = 0;
    combinations.forEach(num => {
        if (isPrime(num)) {
            cnt++;
        }
    });

    // 5. cnt를 반환
    return cnt;
}
