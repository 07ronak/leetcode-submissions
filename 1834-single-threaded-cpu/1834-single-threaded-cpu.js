/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
    const n = tasks.length

    for (let i = 0; i < n; i++) {
        tasks[i].push(i)
    }

    tasks.sort((a, b) => a[0] - b[0])

    const res = []
    const heap = new MinHeap1()
    let time = 0
    let i = 0

    while (!heap.isEmpty() || i < n) {
        if (heap.isEmpty() && tasks[i][0] > time) {
            time = tasks[i][0]
        }

        while (i < n && time >= tasks[i][0]) {
            const [eq, process, idx] = tasks[i]

            heap.push([process, idx])
            i++
        }

        const [exe, idx] = heap.pop()

        time += exe
        res.push(idx)
    }

    return res
};

/* 
compare(a, b) < 0
→ a should be above b

compare(a, b) > 0
→ b should be above a

compare(a, b) === 0
→ they are considered equal in priority
*/

class MinHeap1 {
    constructor() {
        this.arr = []
    }
    compare(a, b) {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        }

        return a[1] - b[1]
    }
    isEmpty() {
        return this.arr.length === 0
    }
    push(val) {
        this.arr.push(val)
        this.bubbleUp(this.arr.length - 1)
    }
    pop() {
        const val = this.arr[0]
        this.arr[0] = this.arr[this.arr.length - 1]
        this.arr.pop()

        this.bubbleDown(0)

        return val
    }
    bubbleUp(idx) {
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2)

            if (this.compare(this.arr[idx], this.arr[parent]) >= 0) break

            [this.arr[parent], this.arr[idx]] = [this.arr[idx], this.arr[parent]]

            idx = parent
        }
    }
    bubbleDown(idx) {
        const n = this.arr.length
        while (true) {
            let smallest = idx

            const left = 2 * idx + 1
            const right = left + 1

            if (left < n && this.compare(this.arr[smallest], this.arr[left]) > 0) {
                smallest = left
            }

            if (right < n && this.compare(this.arr[smallest], this.arr[right]) > 0) {
                smallest = right
            }

            if (smallest === idx) break

            [this.arr[smallest], this.arr[idx]] = [this.arr[idx], this.arr[smallest]]

            idx = smallest
        }
    }
}