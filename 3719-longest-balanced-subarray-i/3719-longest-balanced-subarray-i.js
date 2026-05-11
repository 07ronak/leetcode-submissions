/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    const n = nums.length
    if(n===1) return 0

    let max = 0

    for(let i=0; i<n; i++){
        if(max >= (n-i)) break

        let odd = new Set()
        let even = new Set()

        for(let j=i; j<n; j++){
            const len = j - i + 1
            let num = nums[j]
            if(num&1){
                odd.add(num)
            } else{
                even.add(num)
            }

            if(max >= len) continue

            if(even.size===odd.size){
                max = len
            }
        }
    }

    return max
};