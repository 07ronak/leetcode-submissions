/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    const set = new Set()

    for(let num of arr1){
        while(num>0){
            set.add(num)
            num = Math.floor(num/10)
        }
    }

    let maxLen = 0

    for(let num of arr2){
        while(num>0){
            if(set.has(num)){
                maxLen = Math.max(maxLen, num.toString().length)
                break
            }
            num = Math.floor(num/10)
        }
    }

    return maxLen
};