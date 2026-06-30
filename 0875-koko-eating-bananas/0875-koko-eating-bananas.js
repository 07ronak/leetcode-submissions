/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 0 
    let right = Math.max(...piles)

    while(right>left){
        const mid = left + Math.floor((right-left)/2)

        let count = 0

        for(let b of piles){
            count += Math.ceil(b/mid)
        }

        if(count<=h){
            right = mid
        } else{
            left = mid + 1
        }
    }

    return right
};