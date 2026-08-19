/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
    const map = new Map()

    for (const [row, seat] of reservedSeats) {
        if (!map.has(row)) {
            map.set(row, new Set())
        }
        map.get(row).add(seat)
    }

    const arr = map.values()
    let count = (n - map.size) * 2

    for (const set of arr) {

        const left = !(set.has(2) || set.has(3) || set.has(4) || set.has(5))
        const right = !(set.has(6) || set.has(7) || set.has(8) || set.has(9))
        const center = !(set.has(4) || set.has(5) || set.has(6) || set.has(7))

        if (left && right) {
            count += 2
        } else if (left || right || center) {
            count += 1
        }
    }

    return count
};