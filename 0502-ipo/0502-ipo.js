/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
    const n = profits.length
    const arr = []
    const maxHeap = new MaxPriorityQueue()

    for (let i = 0; i < n; i++) {
        arr.push([profits[i], capital[i]])
    }

    arr.sort((a, b) => a[1] - b[1])
    let i = 0

    while (true) {
        //push all the possible profits that are allowed for our current capital
        while (i < n && arr[i][1] <= w) {
            maxHeap.enqueue(arr[i][0])
            i++
        }

        if (maxHeap.isEmpty()) break

        w += maxHeap.dequeue()
        k--

        if (k === 0) break
    }

    return w
};

class MaxHeap1 {
    constructor() {
        this.arr = []
    }

    isEmpty() {
        return this.arr.length === 0
    }

    compare(a, b) {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        }
        return b[1] - a[1]
    }

    push(val) {
        this.arr.push(val)

        let i = this.arr.length - 1

        // Bubble up
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2)

            if (this.compare(this.arr[i], this.arr[parent]) <= 0) {
                break
            }

            [this.arr[i], this.arr[parent]] = [this.arr[parent], this.arr[i]]

            i = parent
        }
    }

    pop() {
        if (this.isEmpty()) return null

        if (this.arr.length === 1) {
            return this.arr.pop()
        }

        const root = this.arr[0]
        this.arr[0] = this.arr.pop()

        let i = 0

        // Bubble down
        while (true) {
            let largest = i
            const left = 2 * i + 1
            const right = 2 * i + 2

            if (
                left < this.arr.length &&
                this.compare(this.arr[left], this.arr[largest]) > 0
            ) {
                largest = left
            }

            if (
                right < this.arr.length &&
                this.compare(this.arr[right], this.arr[largest]) > 0
            ) {
                largest = right
            }

            if (largest === i) break;

            [this.arr[i], this.arr[largest]] = [this.arr[largest], this.arr[i]]

            i = largest
        }

        return root
    }

    peek() {
        return this.isEmpty() ? null : this.arr[0]
    }
}