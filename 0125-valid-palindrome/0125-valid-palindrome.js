/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g,"")
    let l = 0
    let r = clean.length - 1

    while(r > l){
        if(clean[l]!==clean[r]) return false
        r--
        l++
    }

    return true
};