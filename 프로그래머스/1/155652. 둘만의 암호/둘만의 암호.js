function solution(s, skip, index) {
    const skipSet = new Set(skip.split(""));
    let ret = "";

    for (let ch of s) {
        let count = 0;
        let code = ch.charCodeAt(0);

        while (count < index) {
            code++;
            if (code > 122) code = 97; 

            if (!skipSet.has(String.fromCharCode(code))) {
                count++;
            }
        }

        ret += String.fromCharCode(code);
    }

    return ret;
}
