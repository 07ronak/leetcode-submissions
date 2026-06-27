/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    let ans = 1
    let map = new Map()

    for(let num of nums){
        if(!map.has(num)){
            map.set(num,0)
        }
        map.set(num,(map.get(num))+1)
    }

    for(let [num,freq] of map){
        let res = 1

        if (num === 1) {
            res = (freq % 2 === 0) ? freq - 1 : freq;
            ans = Math.max(ans, res);
            continue;
        }

        //now we are at the peak element
        while(map.has(Math.sqrt(num)) && map.get(Math.sqrt(num)) >= 2){
            res += 2
            num = Math.sqrt(num)
        }

        ans = Math.max(ans,res)
    }

    return ans
};