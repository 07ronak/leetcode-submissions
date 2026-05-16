var countPrimeSetBits = function(left, right) {
    const primes = 665772 // bitmask for primes up to 20

    let total = 0

    for (let i = left; i <= right; i++) {
        let bits = 0
        let n = i
        while (n) {
            n &= (n - 1)
            bits++
        }
        if ((1 << bits) & primes) total++
    }

    return total
};