/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let mul = 1
    let sum = 0
    let res = 0

    while(n){
        const digit = n % 10
        if(digit!==0){
            res = digit * mul + res
            mul *= 10
            sum += digit
        }
        n = Math.floor(n/10) 
    }

    return res*sum
};