/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
    const count = new Array(n).fill(0)
    const free = new Array(n).fill(0)
    meetings.sort((a, b) => a[0] - b[0])

    for (const [st, end] of meetings) {
        let idx = -1
        let found = false
        let min = Infinity

        for (let i = 0; i < n; i++) {
            if (free[i] <= st) {
                idx = i
                found = true
                break
            } else {
                if (free[i] < min) {
                    idx = i
                    min = free[i]
                }
            }
        }

        if (found) {
            free[idx] = end
            count[idx]++
            continue
        }

        free[idx] += end-st
        count[idx]++
    }

    let ans = 0
    let max = count[0]

    for (let i = 1; i < n; i++) {
        if (count[i] > max) {
            max = count[i]
            ans = i
        }
    }

    return ans
};