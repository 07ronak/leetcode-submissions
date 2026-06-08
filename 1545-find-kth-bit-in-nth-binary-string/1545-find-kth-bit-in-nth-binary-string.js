var findKthBit = function(n, k) {

    function solve(n, k){
        if(n === 1) return '0'

        let mid = 1 << (n-1)

        if(k === mid) return '1'

        if(k < mid) return solve(n-1, k)

        let bit = solve(n-1, (1<<n) - k)
        return bit === '0' ? '1' : '0'
    }

    return solve(n, k)
};