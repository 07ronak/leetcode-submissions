var minOperations = function(grid, x) {
    let arr = []
    const rem = grid[0][0] % x

    for (let row of grid) {
        for (let val of row) {
            if (val % x !== rem) return -1
            arr.push(val)
        }
    }

    arr.sort((a,b)=>a-b)

    const mid = arr[Math.floor(arr.length / 2)]

    let count = 0
    for (let val of arr) {
        count += Math.abs(mid - val) / x
    }

    return count
};