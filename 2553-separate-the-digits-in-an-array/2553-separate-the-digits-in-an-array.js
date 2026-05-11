/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let ans = []
    const n = nums.length

    for(let i=n-1; i>=0; i--){
        let num = nums[i]
        
        if(num<10){
            ans.push(num)
            continue
        }

        while(num){
            ans.push(num % 10)
            num = Math.floor(num/10)
        }
    }
    
    return ans.reverse()
};