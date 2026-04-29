/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let c1 = null
    let c2 = null
    let f1 = 0
    let f2 = 0

    for(let num of nums){
        if(c1===num){
            f1++
        } else if(c2===num){
            f2++
        } else if(f1===0){
            c1= num
            f1++
        } else if(f2===0){
            c2 = num
            f2++
        } else{
            f1--
            f2--
        }
    }

    f1 = 0
    f2 = 0
    for(let num of nums){
        if(num===c1) f1++
        if(num===c2) f2++
    }
    let result = []
    const k = Math.floor(nums.length/3)
    if(f1>k) result.push(c1)
    if(f2>k) result.push(c2)
    return result
};