/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {

    let j = s.length - 1;
    let i = 0;

    // Find longest palindromic prefix
    while (j >= 0) {

        if (s[i] === s[j]) {
            i++;
        }

        j--;
    }

    // Already palindrome
    if (i === s.length) {
        return s;
    }

    // Remaining suffix
    let suffix = s.substring(i);

    // Reverse suffix
    let reversed = suffix.split("").reverse().join("");

    // Recursive for remaining prefix
    return reversed +
           shortestPalindrome(s.substring(0, i)) +
           suffix;
};