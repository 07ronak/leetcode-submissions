var rotatedDigits = function(n) {
    const change = new Set([2,5,6,9]);
    const valid = new Set([0,1,2,5,6,8,9]);

    let count = 0;

    for (let i = 1; i <= n; i++) {
        let num = i;
        let diff = false;

        while (num > 0) {
            let digit = num % 10;

            if (!valid.has(digit)) {
                diff = false;
                break;
            }

            if (change.has(digit)) diff = true;

            num = Math.floor(num / 10);
        }

        if (num === 0 && diff) count++;
    }

    return count;
};