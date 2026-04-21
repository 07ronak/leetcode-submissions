/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    const n = nums1.length
    const m = nums2.length

    let dp = Array.from({length: n}, ()=> new Array(m).fill(0))

    dp[0][0] = nums1[0] * nums2[0];

    // first row
    for (let j = 1; j < m; j++) {
        dp[0][j] = Math.max(dp[0][j - 1], nums1[0] * nums2[j]);
    }

    // first column
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], nums1[i] * nums2[0]);
    }

    for(let i=1; i<n; i++){
        for(let j=1; j<m; j++){
            let dot = nums1[i] * nums2[j]
            dp[i][j] = Math.max(dot, dot+dp[i-1][j-1], dp[i-1][j],dp[i][j-1])
        }
    }

    return dp[n-1][m-1]
};