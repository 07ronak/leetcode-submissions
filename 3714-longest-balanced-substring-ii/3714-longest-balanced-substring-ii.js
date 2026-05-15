/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    const n = s.length
    if(n<3) return n

    let maxLen = 2

    //case 1: single char
    let streak = 1

    for(let i=1; i<n; i++){
        if(s[i]===s[i-1]){
            streak++
        } else{
            streak = 1
        }
        maxLen = Math.max(maxLen,streak)
    }

    if(maxLen===n) return n

    //case 2: double chars
    let pairs = [["a","b"],["b","c"],["c","a"]]
    for(let [c1,c2] of pairs){
        let map = new Map([[0,-1]])
        let balance = 0

        for(let i=0; i<n; i++){
            const c = s[i]

            if(c===c1){
                balance++
            } else if(c===c2){
                balance--
            } else{
                balance = 0
                map = new Map()
            }

            if(map.has(balance)){
                maxLen = Math.max(maxLen, i - map.get(balance))
            } else{
                map.set(balance,i)
            }
        }
    }
    if(maxLen===n) return n

    //case 3: all 3 chars
    let count = [0,0,0]
    let map = new Map([["0,0",-1]])
    for(let i=0; i<n; i++){
        const c = s[i]

        if(c==="a") count[0]++
        else if(c==="b") count[1]++
        else count[2]++

        let key = `${count[0]-count[1]},${count[0]-count[2]}`

        if(map.has(key)){
            maxLen = Math.max(maxLen, i - map.get(key))
        } else{
            map.set(key,i)
        }
    }

    return maxLen
};