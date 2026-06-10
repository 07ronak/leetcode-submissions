/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const n = strs.length
    
    let common = strs[0]
    let max = common.length
    //console.log(max)
    
    for(let i=1; i<n; i++){
        let streak = 0
        for(let j=0; j<Math.min(strs[i].length, common.length); j++){
            if(strs[i][j] === common[j]) {
                streak++
            } else {
                break
            }
        }
        max = Math.min(max,streak)
    }
    //console.log(max)
    return common.substring(0,max)
};