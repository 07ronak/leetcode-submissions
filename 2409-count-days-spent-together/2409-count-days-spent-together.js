/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const months = [0,
        31, 59, 90, 120,
        151, 181, 212, 243,
        273, 304, 334, 365
    ]

    let aStart = months[Number(arriveAlice.substring(0, 2)) - 1] + Number(arriveAlice.substring(3, 5))
    let bStart = months[Number(arriveBob.substring(0, 2)) - 1] + Number(arriveBob.substring(3, 5))

    const start = Math.max(aStart, bStart)

    let aEnd = months[Number(leaveAlice.substring(0, 2)) - 1] + Number(leaveAlice.substring(3, 5))
    let bEnd = months[Number(leaveBob.substring(0, 2)) - 1] + Number(leaveBob.substring(3, 5))

    const end = Math.min(aEnd + 1, bEnd + 1)
    
    if (start > end) return 0

    return (end - start)
};