/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    const heap = new MaxPriorityQueue((x) => x[0])
    const res = []
    if (a > 0) heap.enqueue([a, "a"])
    if (b > 0) heap.enqueue([b, "b"])
    if (c > 0) heap.enqueue([c, "c"])

    while (!heap.isEmpty()) {
        const [freq, char] = heap.dequeue()

        if (res.length > 1 && res[res.length - 1] === char && res[res.length - 2] === char) {
            //we cannot push this element
            if (heap.isEmpty()) break

            const [freq2, char2] = heap.dequeue()
            res.push(char2)

            if (freq2 > 1) heap.enqueue([freq2 - 1, char2])
            heap.enqueue([freq, char])
        } else {
            res.push(char)
            if (freq > 1) heap.enqueue([freq - 1, char])
        }
    }

    return res.join("")
};