/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a,b)=>b-a)
    const n = cost.length
    let ans = 0

    for(let i=1; i<=n; i++){
        if(i%3===0){
            continue
        } else{
            ans += cost[i-1]
        }
    }

    return ans
};