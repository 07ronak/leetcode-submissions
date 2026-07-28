/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function (s) {
    const n = s.length
    let odd = false

    if (n & 1) {
        odd = true
    }

    const count = new Array(26).fill(0)

    for (const c of s) {
        count[(c.charCodeAt(0)) - 97]++
    }

    let str = ""

    for (let i = 0; i < 26; i++) {
        str += (String.fromCharCode(i + 97)).repeat(Math.floor(count[i]/2))
    }

    const half = str

    if(odd){
        str += s[Math.floor(n/2)]
    }

    str += half.split("").reverse("").join("")

    return str
};