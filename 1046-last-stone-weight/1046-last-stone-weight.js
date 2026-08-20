class MaxHeapPQ {
    constructor() {
        this.arr = [0]
        this.idx = 0
    }
    pop() {
        if (this.idx > 0) {
            const res = this.arr[1]

            this.arr[1] = this.arr[this.idx--]
            this.arr.pop()

            let i = 1

            //bubble down
            while (true) {
                const left = 2 * i
                const right = left + 1
                let largest = i

                if (left <= this.idx && this.arr[left] > this.arr[largest]) {
                    largest = left
                }

                if (right <= this.idx && this.arr[right] > this.arr[largest]) {
                    largest = right
                }

                if (largest === i) break

                [this.arr[i], this.arr[largest]] = [this.arr[largest], this.arr[i]]

                i = largest
            }

            return res
        }
    }
    push(val) {
        this.arr.push(val)
        this.idx++

        let i = this.idx

        while (i > 1) {
            const parent = Math.floor(i / 2)

            if (this.arr[parent] >= this.arr[i]) break

            [this.arr[parent], this.arr[i]] = [this.arr[i], this.arr[parent]]

            i = parent
        }
    }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const heap = new MaxHeapPQ()

    for(const stone of stones){
        heap.push(stone)
    }

    while(true){
        const left = (heap.pop() ?? 0)
        if(left === 0) return 0

        const right = (heap.pop() ?? 0)

        if(right === 0) return left

        if(left===right) continue

        heap.push(left-right)
    }
};