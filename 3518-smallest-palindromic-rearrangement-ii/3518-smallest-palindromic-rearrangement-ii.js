/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestPalindrome = function (s, k) {
    const m = Math.floor(s.length / 2);
    const freq = Array(26).fill(0);

    // Count characters in the first half
    for (let i = 0; i < m; i++) {
        freq[s.charCodeAt(i) - 97]++;
    }

    // Calculate factorial using BigInt
    const factorial = (n) => {
        let result = 1n;
        for (let i = 2; i <= n; i++) {
            result *= BigInt(i);
        }
        return result;
    };

    // Number of unique permutations of the first half
    let ways = factorial(m);

    for (const count of freq) {
        ways /= factorial(count);
    }

    // Convert k to BigInt for exact comparison
    k = BigInt(k);

    if (k > ways) {
        return "";
    }

    // Build the k-th lexicographically smallest first half
    let half = "";

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < 26; j++) {
            if (freq[j] === 0) continue;

            // P(c | ways)
            const t = (ways * BigInt(freq[j])) / BigInt(m - i);

            if (k <= t) {
                // Choose this character
                half += String.fromCharCode(97 + j);
                freq[j]--;

                // Update number of permutations
                ways = t;
                break;
            }

            // Skip all permutations starting with this character
            k -= t;
        }
    }

    // Middle character for odd-length strings
    const mid = s.length % 2 === 1 ? s[m] : "";

    // Reverse the first half
    const reversedHalf = half.split("").reverse().join("");

    return half + mid + reversedHalf;
};