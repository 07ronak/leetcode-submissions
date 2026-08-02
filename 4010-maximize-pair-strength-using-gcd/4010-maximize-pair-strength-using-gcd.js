/**
 * @param {number[]} nums
 * @return {number}
 */
var maxPairStrength = function (nums) {
    const n = nums.length
    let max = 0

    for(let i=0; i<n-1; i++){
        const num = nums[i]
        for(let j=i+1; j<n; j++){
            const curr = (num * nums[j]) / ((gcd(num,nums[j]))**2)
            max = Math.max(max,curr)
        }
    }

    return max
};

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}
