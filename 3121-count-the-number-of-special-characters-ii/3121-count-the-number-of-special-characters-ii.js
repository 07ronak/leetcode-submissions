/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const n = word.length
    const lastLow = new Array(26).fill(-1);
    const firstUp = new Array(26).fill(-1);

    for(let i=0; i<n; i++) {
        const c = word[i];
        const code = c.charCodeAt(0);

        // lowercase
        if(c >= 'a' && c <= 'z') {

            lastLow[code - 97] = i;

        } else {

            const idx = code - 65;

            // store only first uppercase occurrence
            if(firstUp[idx] === -1) {
                firstUp[idx] = i;
            }
        }
    }

    let ans = 0;

    for(let i = 0; i < 26; i++) {

        // lowercase exists
        // uppercase exists
        // all lowercase appear before uppercase
        if(
            lastLow[i] !== -1 &&
            firstUp[i] !== -1 &&
            lastLow[i] < firstUp[i]
        ) {
            ans++;
        }
    }

    return ans;
};