/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let perms = [[]]

    for(const num of nums){
        let new_perms = []
        for(let p of perms){
            for(let i=0; i<=p.length; i++){
                const copy = [...p]
                copy.splice(i,0,num)
                new_perms.push(copy)
            }
        }
        perms = new_perms
    }

    return perms
};