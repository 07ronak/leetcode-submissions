var MedianFinder = function () {
    this.minHeap = new MinPriorityQueue()
    this.maxHeap = new MaxPriorityQueue()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    // Put num into the appropriate half
    if (this.maxHeap.isEmpty() || num <= this.maxHeap.front()) {
        this.maxHeap.enqueue(num)
    } else {
        this.minHeap.enqueue(num)
    }

    // Rebalance
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
        this.minHeap.enqueue(this.maxHeap.dequeue())
    } else if (this.minHeap.size() > this.maxHeap.size()) {
        this.maxHeap.enqueue(this.minHeap.dequeue())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.maxHeap.size() > this.minHeap.size()) {
        return this.maxHeap.front()
    }

    return (this.maxHeap.front() + this.minHeap.front()) / 2
};