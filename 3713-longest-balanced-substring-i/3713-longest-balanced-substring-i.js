var longestBalanced = function (s) {
    const n = s.length
    if(n<3) return n

    let res = 2 

    for (let i = 0; i < n; i++) {
        if(res >= (n-i)) break

        const cnt = new Array(26).fill(0);

        for (let j = i; j < n; j++) {
            let flag = true;
            const c = s.charCodeAt(j) - 97;
            let val = ++cnt[c]

            if(res >= (j-i+1)) continue

            for (const x of cnt) {
                if (x > 0 && x !== val) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                res = Math.max(res, j - i + 1);
            }
        }
    }
    return res;
};