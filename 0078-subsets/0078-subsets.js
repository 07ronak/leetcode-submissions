/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];

    function backtrack(start, currSubset){
        result.push([...currSubset]);

        for(let i = start; i<nums.length; i++){
            currSubset.push(nums[i]);
            backtrack(i+1, currSubset)
            currSubset.pop()
        }
    }


    backtrack(0,[]);
    return result;
};