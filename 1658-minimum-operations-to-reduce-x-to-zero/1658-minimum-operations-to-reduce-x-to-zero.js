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

    // Store prefix sums
    for (let i = 0; i < n; i++) {
        sum += nums[i]
        steps++

        if (sum > x) break

        map.set(sum, steps)

        if (sum === x) {
            min = steps
            break
        }
    }

    // Check suffix + prefix combinations
    sum = 0
    steps = 0

    for (let i = n - 1; i >= 0; i--) {
        sum += nums[i]
        steps++

        if (sum > x) break

        if (sum === x) {
            min = Math.min(min, steps)
            break
        }

        const prefixSteps = map.get(x - sum)

        if (prefixSteps !== undefined && prefixSteps + steps <= n) {
            min = Math.min(min, prefixSteps + steps)
        }
    }

    return min === Infinity ? -1 : min
}

