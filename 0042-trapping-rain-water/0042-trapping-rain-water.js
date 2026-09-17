/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let stack = []
    const n = height.length
    let ans = 0

    for (let i = 0; i < n; i++) {
        const curr = height[i]

        while (stack.length && curr >= height[stack[stack.length - 1]]) {
            const midH = height[stack.pop()]

            if (stack.length && height[stack[stack.length - 1]] > midH) {
                const hans = Math.min(curr, height[stack[stack.length - 1]]) - midH
                ans += (hans * (i - stack[stack.length - 1] - 1))

            }
        }

        stack.push(i)
    }


    return ans
};