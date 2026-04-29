/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let ans = 0
    let bCount = 0

    for(let c of s){
        if(c==="b"){
            bCount++
        } else if(bCount && c==="a"){
            ans++
            bCount--
        }
    }

    return ans
};