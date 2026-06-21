/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let maxCost = Math.max(...costs)

    let freq = new Array(maxCost+1).fill(0)

    for(let cost of costs){
        freq[cost]++
    }

    let count = 0

    for(let p=1; p<=maxCost; p++){
        if(freq[p]===0) continue

        let canBuy = Math.min(freq[p],Math.floor(coins/p))

        count += canBuy
        coins -= canBuy * p

        if(p > coins) break
    }

    return count
};