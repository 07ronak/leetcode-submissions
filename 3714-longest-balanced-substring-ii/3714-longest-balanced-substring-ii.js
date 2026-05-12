/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    const n = s.length
    if(n<3) return n

    let maxLen = 1
    //case 1: count single letters only
    let streak = 1
    for(let i=1; i<n; i++){
        if(s[i]===s[i-1]){
            streak++
        } else{
            streak = 1
        }
        maxLen = Math.max(maxLen, streak)
    }
    if(maxLen===n) return maxLen

    //case 2: double characters
    const pairs = [['a','b'],['a','c'],['b','c']]
    for(let [c1,c2] of pairs){
        let balance = 0
        let map = new Map([[0,-1]])

        for(let i=0; i<n; i++){
            const char = s[i]
            if(char===c1) balance++
            else if(char===c2) balance--
            else{
                balance = 0
                map.clear()
                //map.set(0,i)
            }

            if(map.has(balance)){
                maxLen = Math.max(maxLen, i-map.get(balance))
            } else{
                map.set(balance,i)
            }
        }
        //console.log(map)
    }
    if(maxLen===n) return maxLen

    //case 3: all three character considered
    let c = [0,0,0];
    let map = new Map([["0,0",-1]])
    for(let i=0; i<n; i++){
        const char = s[i]
        if(char==="a") c[0]++
        else if(char==="b") c[1]++
        else c[2]++

        let key =`${c[0]-c[1]},${c[0]-c[2]}`

        if(map.has(key)){
            maxLen = Math.max(maxLen, i-map.get(key))
        } else{
            map.set(key,i)
        }
    }

    return maxLen
};