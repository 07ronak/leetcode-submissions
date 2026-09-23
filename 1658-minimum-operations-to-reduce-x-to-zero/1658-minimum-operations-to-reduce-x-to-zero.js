/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
    const n = nums.length
    const map = new Map()

    let sum = 0
    let steps = 0
    let min = Infinity

    for (let i = 0; i < n; i++) {
        sum += nums[i]

        if (sum === x) {
            steps++
            min = Math.min(min, steps)
            break
        }

        if (sum > x) {
            break
        } else {
            steps++
            map.set(sum, steps)
        }
    }

    steps = 0
    sum = 0

    for (let i = n - 1; i >= 0; i--) {
        sum += nums[i]

        if (sum === x) {
            steps++
            min = Math.min(min, steps)
            break
        }

        if (sum > x) break

        const comp = x - sum
        steps++

        if (map.has(comp)) {
            const left = map.get(comp)

            if (left + steps > n) {
                break
            } else {
                min = Math.min(min, left + steps)
            }
        }
    }

    return min === Infinity ? -1 : min
};