/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 0
    let right = n

    while(right>=left){
        const mid = Math.floor((left+right)/2)

        const val = guess(mid)

        if(val===0) return mid

        if(val>0){
            left = mid +1
        } else{
            right = mid - 1
        }
    }
};