class MinHeapPQ {
    constructor(k) {
        this.arr = new Array(k + 1).fill(0)
        this.size = 0
        this.capacity = k
    }
    push(val) {
        if (this.capacity > this.size) {
            //we have room to add another element
            this.size++
            this.arr[this.size] = val

            let i = this.size

            while (i > 1) {
                const parent = Math.floor(i / 2)

                //bubble up
                if (this.arr[i] >= this.arr[parent]) break

                [this.arr[parent], this.arr[i]] = [this.arr[i], this.arr[parent]]

                i = parent
            }
        } else if (val > this.arr[1]) {
            this.arr[1] = val

            let i = 1
            //bubble down

            while (true) {
                const left = 2 * i
                const right = left + 1
                let smallest = i

                if (left <= this.size && this.arr[smallest] > this.arr[left]) {
                    smallest = left
                }

                if (right <= this.size && this.arr[smallest] > this.arr[right]) {
                    smallest = right
                }

                if (smallest === i) break

                [this.arr[smallest], this.arr[i]] = [this.arr[i], this.arr[smallest]]

                i = smallest
            }
        }
    }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.heap = new MinHeapPQ(k)

    for(const num of nums){
        this.heap.push(num)
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.push(val)
    return this.heap.arr[1]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */