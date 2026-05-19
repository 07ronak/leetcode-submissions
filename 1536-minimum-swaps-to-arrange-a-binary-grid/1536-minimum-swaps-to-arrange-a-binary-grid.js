var minSwaps = function(grid) {
    const n = grid.length
    let arr = new Array(n).fill(0)

    for(let i=0; i<n; i++){
        let count = 0
        for(let j=n-1; j>=0; j--){
            if(grid[i][j] === 0) count++
            else break
        }
        arr[i] = count
    }

    let swap = 0

    for(let i=0; i<n; i++){
        let req = n - i - 1

        if(arr[i] >= req) continue

        let j = i + 1
        while(j < n && arr[j] < req) j++

        if(j === n) return -1

        while(j > i){
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            j--
            swap++
        }
    }

    return swap
};