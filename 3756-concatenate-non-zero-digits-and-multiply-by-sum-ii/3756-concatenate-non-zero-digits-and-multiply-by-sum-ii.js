/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function(s, queries) {
    const n = s.length
    const MOD = 1000000007

    const sum = new Array(n+1).fill(0)
    const val = new Array(n+1).fill(0)
    const len = new Array(n+1).fill(0)
    const pow10 = new Array(n+1).fill(1)

    for(let i=0; i<n; i++){
        const c = Number(s[i])

        sum[i+1] = (sum[i] + c) % MOD
        pow10[i+1] = (pow10[i] * 10) % MOD

        if(c!==0){
            len[i+1] = (len[i] + 1) % MOD
            val[i+1] = (val[i] * 10 + c) % MOD
        } else{
            len[i+1] = len[i]
            val[i+1] = val[i]
        }
    }

    let ans = []
    const MODB = BigInt(MOD)

    for(const [l,r] of queries){
        const x = (sum[r+1] - sum[l])
        const diff = (len[r+1] - len[l])
        const shift = (BigInt(val[l]) * BigInt(pow10[diff])) % MODB
        let res = ((BigInt(val[r+1])-BigInt(shift))*BigInt(x)) % MODB
        
        if(res<0) res += MODB

        ans.push(Number(res))
    }

    return ans
};