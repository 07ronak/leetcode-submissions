/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<=1) return x

    let left = 1
    let right = x
    let ans = 1

    while(right>=left){
        const mid = left + Math.floor((right-left)/2)
        const val = mid * mid

        if(val===x) return mid

        if(val<x){
            ans = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return ans
};