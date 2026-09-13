/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function (img1, img2) {
    const map = new Map()
    const n = img1.length

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (img1[r][c] === 1) {
                for (let i = 0; i < n; i++) {
                    for (let j = 0; j < n; j++) {
                        if (img2[i][j] === 1) {
                            const key = `${i - r},${j - c}`
                            map.set(key, (map.get(key) || 0) + 1)
                        }
                    }
                }
            }
        }
    }

    let ans = 0

    for (const [_, freq] of map) {
        ans = Math.max(ans, freq)
    }

    return ans
};