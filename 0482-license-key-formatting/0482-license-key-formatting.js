/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    if(s==="-") return ""
    const n = s.length

    let ans = []
    
    let idx = 0
    for(let i=n-1; i>=0; i--){
        if(s[i]==="-") continue

        ans.push(s[i].toUpperCase())
        idx++

        if(idx%k===0){
            ans.push("-")
        }
    }

    while(ans[ans.length-1]==="-"){
        ans.pop()
    }

    return ans.reverse().join("")
};