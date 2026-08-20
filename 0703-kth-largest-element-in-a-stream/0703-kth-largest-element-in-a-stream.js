class MinHeapPQ {
    constructor(k) {
        this.arr = new Array(k + 1).fill(0);
        this.size = 0;
        this.capacity = k;
    }

    push(val) {
        // If heap isn't full, add normally
        if (this.size < this.capacity) {
            this.size++;
            this.arr[this.size] = val;

            // Bubble up
            let i = this.size;
            while (i > 1) {
                let parent = Math.floor(i / 2);

                if (this.arr[parent] <= this.arr[i]) break;

                [this.arr[parent], this.arr[i]] =
                    [this.arr[i], this.arr[parent]];

                i = parent;
            }
        }
        // If full, only replace root when val is larger
        else if (val > this.arr[1]) {
            this.arr[1] = val;

            // Bubble down
            let i = 1;

            while (true) {
                let left = i * 2;
                let right = i * 2 + 1;
                let smallest = i;

                if (
                    left <= this.size &&
                    this.arr[left] < this.arr[smallest]
                ) {
                    smallest = left;
                }

                if (
                    right <= this.size &&
                    this.arr[right] < this.arr[smallest]
                ) {
                    smallest = right;
                }

                if (smallest === i) break;

                [this.arr[i], this.arr[smallest]] =
                    [this.arr[smallest], this.arr[i]];

                i = smallest;
            }
        }
    }

    peek() {
        return this.arr[1];
    }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.heap = new MinHeapPQ(k);

    for (const num of nums) {
        this.heap.push(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.push(val);
    return this.heap.peek();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */