function solution(tickets) {
    const ticketMap = new Map();
    const route = [];

    // 1. 티켓을 Map으로 저장 (사전순 정렬 포함)
    for (const [from, to] of tickets) {
        if (!ticketMap.has(from)) ticketMap.set(from, []);
        ticketMap.get(from).push(to);
    }

    // 사전순 정렬
    for (const [key, value] of ticketMap) {
        ticketMap.set(key, value.sort());
    }

    const totalTickets = tickets.length;
    const result = [];

    function dfs(current, path) {
        if (path.length === totalTickets + 1) {
            result.push([...path]);
            return true; // 경로 찾으면 바로 리턴
        }

        const destinations = ticketMap.get(current);
        if (!destinations || destinations.length === 0) return false;

        for (let i = 0; i < destinations.length; i++) {
            const next = destinations[i];

            // 티켓 사용
            destinations.splice(i, 1);
            path.push(next);

            if (dfs(next, path)) return true;

            // 백트래킹
            path.pop();
            destinations.splice(i, 0, next);
        }

        return false;
    }

    dfs("ICN", ["ICN"]);
    return result[0];
}
