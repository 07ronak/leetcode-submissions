/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b)=>a-b)

    let count = 0

    for(let cost of costs){
        
        if(cost > coins) break

        count++
        coins -= cost 
    }

    return count
};