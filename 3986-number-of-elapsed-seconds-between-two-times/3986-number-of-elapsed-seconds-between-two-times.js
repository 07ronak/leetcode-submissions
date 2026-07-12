/**
 * @param {string} startTime
 * @param {string} endTime
 * @return {number}
 */
var secondsBetweenTimes = function (startTime, endTime) {
    const start = startTime.split(":").map(Number);
    const end = endTime.split(":").map(Number)

    let ans = 0

    for (let i = 0; i < 3; i++) {
        if (start[i] === end[i]) continue

        if (i === 0) {
            ans += (end[i] - start[i]) * 3600
        } else if (i === 1) {
            ans += (end[i] - start[i]) * 60
        } else {
            ans += (end[i] - start[i])
        }
    }

    return ans
};