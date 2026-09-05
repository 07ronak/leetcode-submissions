var MedianFinder = function () {
    this.firstHalf = new MaxPriorityQueue()
    this.secondHalf = new MinPriorityQueue()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (!this.firstHalf.size() || num <= this.firstHalf.front()) {
        this.firstHalf.push(num)
    } else {
        this.secondHalf.push(num)
    }

    if (this.firstHalf.size() > this.secondHalf.size() + 1) {
        this.secondHalf.push(this.firstHalf.pop())
        return
    }

    if (this.secondHalf.size() > this.firstHalf.size()) {
        this.firstHalf.push(this.secondHalf.pop())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.firstHalf.size() === this.secondHalf.size()) {
        const a = this.firstHalf.front()
        const b = this.secondHalf.front()

        return ((a + b) / 2)
    } else{
        return this.firstHalf.front()
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */