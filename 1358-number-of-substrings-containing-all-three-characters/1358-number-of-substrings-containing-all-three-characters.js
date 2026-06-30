/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let count = new Array(3).fill(0)
    let ans = 0
    const n = s.length

    let left = 0
    
    for(let right =0; right<n; right++){
        //add the current element
        count[s.charCodeAt(right)-97]++

        while(count[0]>=1 && count[1]>=1 && count[2]>=1){
            ans += n - right

            //shift left
            count[s.charCodeAt(left)-97]--
            left++
        }
    }

    return ans
};