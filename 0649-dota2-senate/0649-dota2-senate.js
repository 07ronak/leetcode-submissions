/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    const n = senate.length
    let r = 0
    let d = 0

    const radiant = []
    const dire = []

    for (let i = 0; i < n; i++) {
        if (senate[i] === "R") {
            radiant.push(i)
        } else {
            dire.push(i)
        }
    }

    while (r < radiant.length && d < dire.length) {
        const rIdx = radiant[r++]
        const dIdx = dire[d++]

        if (rIdx < dIdx) {
            radiant.push(rIdx + n)
        } else {
            dire.push(dIdx + n)
        }
    }

    return r < radiant.length ? "Radiant" : "Dire"
};