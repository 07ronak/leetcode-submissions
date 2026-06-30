/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let total = 0
    let max = 0

    for(const w of weights){
        total += w
        max = Math.max(max, w)
    }

    let left = max
    let right = total

    while(right>left){
        const mid = left + Math.floor((right-left)/2)

        let count = 1
        let sum = 0

        for(const w of weights){
            sum += w

            if(sum>mid){
                sum = w
                count++
            }
        }

        if(count<=days){
            right = mid
        } else{
            left = mid + 1
        }
    }

    return right
};