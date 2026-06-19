/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<=1) return x

    let max = 1
    let left = 1
    let right = x

    while(right>=left){
        const mid = Math.floor((left+right)/2)
        const val = mid*mid

        if(val===x){
            return mid
        }

        if(val < x){
            max = Math.max(max,mid)
            left = mid +1
        } else{
            right = mid -1
        }
    }

    return max
};