/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let min = Infinity
    for(let num of nums){
        min = Math.min(min,sumDig(num))
    }
    return min
};

function sumDig(num){
    let sum = 0
    while(num){
        sum += (num%10)
        num = Math.floor(num/10)
    }
    return sum
}