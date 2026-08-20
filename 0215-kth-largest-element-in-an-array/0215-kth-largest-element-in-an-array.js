class MinHeapPQ {
    constructor(k) {
        this.arr = new Array(k + 1).fill(0)
        this.idx = 0
        this.capacity = k
    }
    push(val) {
        if (this.capacity > this.idx) {
            this.idx++
            this.arr[this.idx] = val

            //bubble up
            let i = this.idx

            while (i > 1) {
                const parent = Math.floor(i / 2)

                if (this.arr[parent] <= this.arr[i]) break

                [this.arr[i], this.arr[parent]] = [this.arr[parent], this.arr[i]]

                i = parent
            }

        } else if (val > this.arr[1]) {
            this.arr[1] = val

            //bubble down
            let i = 1

            while (true) {
                const left = 2 * i
                const right = left + 1
                let largest = i

                if (left <= this.capacity && this.arr[largest] > this.arr[left]) {
                    largest = left
                }

                if (right <= this.capacity && this.arr[largest] > this.arr[right]) {
                    largest = right
                }

                if (i === largest) break

                [this.arr[i], this.arr[largest]] = [this.arr[largest], this.arr[i]]

                i = largest
            }
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const heap = new MinHeapPQ(k)

    for (const num of nums) {
        heap.push(num)
    }

    return heap.arr[1]
};