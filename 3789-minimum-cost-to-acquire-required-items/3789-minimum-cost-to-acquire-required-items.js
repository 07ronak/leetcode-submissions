/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function(cost1, cost2, costBoth, need1, need2) {
    let cost = (need1*cost1) + (need2*cost2)

    let maxNeed = Math.max(need1,need2)
    cost = Math.min(maxNeed*costBoth,cost)
    
    let minNeed = Math.min(need1, need2)
    cost = Math.min(cost, (need1-minNeed)*cost1 + (need2-minNeed)*cost2 + minNeed*costBoth)

    return cost
};