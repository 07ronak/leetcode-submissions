/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    const n = nums.length
    let map = new Map()
    let res = new Array(n).fill(0)

    for(let i=0; i<n; i++){
        const num = nums[i]
        if(!map.has(num)){
            map.set(num,[])
        }
        map.get(num).push(i)
    }

    for(let [_,arr] of map){
        let len = arr.length

        if(len<=1) continue

        let sum = 0
        for(let j=0; j<len; j++){
            res[arr[j]] += (arr[j] * j) - sum
            sum += arr[j]
        }

        sum = 0
        for(let j=len-1; j>=0; j--){
            res[arr[j]] += sum - (arr[j] * (len-j-1))
            sum += arr[j]
        }
    }

    return res
};