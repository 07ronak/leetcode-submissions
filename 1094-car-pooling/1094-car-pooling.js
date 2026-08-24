/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    const n = trips.length

    const from = []
    for (let i = 0; i < n; i++) {
        from.push([trips[i][0], trips[i][1]])
    }
    from.sort((a, b) => a[1] - b[1])

    const to = []
    for (let i = 0; i < n; i++) {
        to.push([trips[i][0], trips[i][2]])
    }
    to.sort((a, b) => a[1] - b[1])

    let start = from[0][1]
    let stop = to[n - 1][1]
    let sitting = 0
    let i = 0
    let j = 0

    while (start <= stop) {
        //remove all that that have reached thier destination
        while (j < n && to[j][1] <= start) {
            sitting -= to[j][0]
            j++
        }

        //add all that are now suppose to begin thier journey
        while (i < n && from[i][1] <= start) {
            sitting += from[i][0]

            if (sitting > capacity) return false
            i++
        }

        start++
    }

    return true
};