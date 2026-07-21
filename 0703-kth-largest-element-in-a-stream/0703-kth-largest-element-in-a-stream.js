class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = [];
        
        // Add all initial numbers to the min-heap
        for (const num of nums) {
            this.add(num);
        }
    }

    // Helper function to maintain the heap property
    add(val) {
        if (this.minHeap.length < this.k) {
            this.minHeap.push(val);
            this._heapifyUp();
        } else if (val > this.minHeap[0]) {
            this.minHeap[0] = val;
            this._heapifyDown();
        }
        return this.minHeap[0];
    }

    // Min-heapify up
    _heapifyUp() {
        let index = this.minHeap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.minHeap[index] >= this.minHeap[parentIndex]) break;
            this._swap(index, parentIndex);
            index = parentIndex;
        }
    }

    // Min-heapify down
    _heapifyDown() {
        let index = 0;
        const length = this.minHeap.length;

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.minHeap[leftChildIndex] < this.minHeap[smallest]) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < length && this.minHeap[rightChildIndex] < this.minHeap[smallest]) {
                smallest = rightChildIndex;
            }

            if (smallest === index) break;
            this._swap(index, smallest);
            index = smallest;
        }
    }

    _swap(i, j) {
        [this.minHeap[i], this.minHeap[j]] = [this.minHeap[j], this.minHeap[i]];
    }
}