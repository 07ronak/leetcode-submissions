/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let og = [...arr]
    arr.sort((a,b)=>a-b)
    
    let map = new Map() //value->rank

    let rank = 1
    for(const val of arr){
        if(!map.has(val)){
            map.set(val,rank++)
        }
    }

    let ans = []

    for(const val of og){
        ans.push(map.get(val))
    }

    return ans
};