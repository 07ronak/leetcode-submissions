/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
    const n = nums.length
    let count = 0

    let totalEven = 0
    let totalOdd = 0

    for(let i=0; i<n; i++){
        if(i&1){
            totalOdd += nums[i]
        } else{
            totalEven += nums[i]
        }
    }

    let leftEven = 0
    let leftOdd = 0

    for(let i=0; i<n; i++){
        let rightEven;
        let rightOdd;

        if(i&1){
            rightEven = totalEven - leftEven
            rightOdd = totalOdd - leftOdd - nums[i]
        } else{
            rightEven = totalEven - leftEven - nums[i]
            rightOdd = totalOdd - leftOdd
        }

        const newEven = leftEven + rightOdd
        const newOdd = leftOdd + rightEven

        if(newEven === newOdd){
            count++
        }

        if(i&1){
            leftOdd += nums[i]
        } else{
            leftEven += nums[i]
        }
    }

    return count
};