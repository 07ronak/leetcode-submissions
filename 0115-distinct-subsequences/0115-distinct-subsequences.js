/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const n = s.length;
    const m = t.length;

    if(m>n) return 0

    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    for(let r=0; r<=n; r++){
        dp[r][0] = 1 
    }

    for(let i=1; i<=n; i++){
        for(let j=1; j<=m; j++){
            if(s[i-1]===t[j-1]){
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
            } else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    return dp[n][m]
};