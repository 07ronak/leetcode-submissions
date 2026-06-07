/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0
    const n = s.length
    let fm = {}
    let ans = 1
    let max = 1

    for(let right = 0; right<n; right++){
        let char = s[right]
        fm[char] = (fm[char] ||0) +1

        max = Math.max(max, fm[char])
        let windowLen = right-left+1

        if(windowLen - max <= k){
            ans = Math.max(ans, windowLen)
        } else{
            fm[s[left]]--
            left++
        }
        //console.log(fm)
    }

    return ans
};