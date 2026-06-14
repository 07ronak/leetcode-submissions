/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n===0) return 1
    if(x===0) return 0
    if(n===1) return x
    if(x===-1){
        if(n&1) return -1
        return 1
    }

    const helper = (x,n) =>{
        if(n===0) return 1

        const half = helper(x,Math.floor(n/2))

        if(n&1){
            return half*half*x
        }

        return half*half
    }

    const res = helper(x,Math.abs(n))

    return n>0 ? res : 1/res 
};