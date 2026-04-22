/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dict) {
    let set = new Set(dict)
    let len = dict[0].length
    let ans = []

    for(let q of queries){
        if(set.has(q)){
            ans.push(q)
            continue
        }

        for(let word of dict){
            let count = 0

            for(let i=0; i<len; i++){
                if(word[i]!==q[i]){
                    count++
                    if(count>2) break
                }
            }

            if(count<=2){
                ans.push(q)
                break
            }

        }
    }

    return ans
};