/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    const n = mountainArr.length()
    
    let left = 0
    let right = n-1

    while(right>left){
        const mid = Math.floor((left+right)/2)

        if(mountainArr.get(mid)>mountainArr.get(mid+1)){
            right = mid
        } else{
            left = mid + 1
        }
    }

    const peak = right
    if(target===mountainArr.get(peak)) return peak
    
    //first in the left half
    left = 0
    right = peak -1

    while(right>=left){
        const mid = Math.floor((left+right)/2)
        const val = mountainArr.get(mid)

        if(val===target){
            return mid
        }

        if(val>target){
            right = mid - 1
        } else{
            left = mid + 1
        }
    }

    //search right
    left = peak + 1
    right = n -1

    while(right>=left){
        const mid = Math.floor((left+right)/2)
        const val = mountainArr.get(mid)

        if(val===target){
            return mid
        }

        if(val>target){
            left = mid + 1
        } else{
            right = mid - 1 
        }
    }

    return -1
};