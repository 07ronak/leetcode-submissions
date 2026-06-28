/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    let ans = 0

    arr.sort((a,b)=>a-b)

    for(let num of arr){
        ans = Math.min(++ans,num)
    }

    return ans
};