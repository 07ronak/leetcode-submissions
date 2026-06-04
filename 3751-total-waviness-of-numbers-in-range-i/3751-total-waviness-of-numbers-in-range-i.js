/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    let peaks = 0
    let valleys = 0

    for(let i=num1; i<=num2; i++){
        let str = i.toString()
        const n = str.length

        for(let j=1; j<n-1; j++){
            if(str[j]>str[j-1] && str[j]>str[j+1]){
                peaks++
                continue
            }

            if(str[j]<str[j-1] && str[j]<str[j+1]){
                valleys++
            }
        }
    }

    return (peaks+valleys)
};