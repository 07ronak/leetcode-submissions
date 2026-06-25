const countMajoritySubarrays = (A, k) => {
    let prefix = 0;
    let less = 0;   // # previous prefix sums < current prefix
    let res = 0;

    const freq = new Map();
    freq.set(0, 1); // initial prefix sum

    for (const x of A) {
        if (x === k) {
            // prefix goes from p -> p+1
            less += freq.get(prefix) || 0;
            prefix++;
        } else {
            // prefix goes from p -> p-1
            less -= freq.get(prefix - 1) || 0;
            prefix--;
        }

        res += less;
        freq.set(prefix, (freq.get(prefix) || 0) + 1);
    }

    return res;
};