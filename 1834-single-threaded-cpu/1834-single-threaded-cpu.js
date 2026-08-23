class MinHeap1 {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    push(value) {
        this.heap.push(value);
        this._bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;

        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._bubbleDown(0);
        }

        return min;
    }

    _bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.compare(this.heap[index], this.heap[parent]) >= 0) {
                break;
            }

            [this.heap[index], this.heap[parent]] =
                [this.heap[parent], this.heap[index]];

            index = parent;
        }
    }

    _bubbleDown(index) {
        const n = this.heap.length;

        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (
                left < n &&
                this.compare(this.heap[left], this.heap[smallest]) < 0
            ) {
                smallest = left;
            }

            if (
                right < n &&
                this.compare(this.heap[right], this.heap[smallest]) < 0
            ) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            index = smallest;
        }
    }
}

/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
    const n = tasks.length;

    // Add original index
    for (let i = 0; i < n; i++) {
        tasks[i].push(i);
    }

    // Sort by enqueue time
    tasks.sort((a, b) => a[0] - b[0]);

    // [processingTime, index]
    const minHeap = new MinHeap1((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });

    const result = [];
    let time = 0;
    let i = 0;

    while (i < n || !minHeap.isEmpty()) {
        // If no tasks are available, jump time to the next task
        if (minHeap.isEmpty() && time < tasks[i][0]) {
            time = tasks[i][0];
        }

        // Add all tasks available at the current time
        while (i < n && tasks[i][0] <= time) {
            const [enqueueTime, processingTime, index] = tasks[i];

            minHeap.push([processingTime, index]);
            i++;
        }

        // Process the shortest available task
        const [processingTime, index] = minHeap.pop();

        result.push(index);
        time += processingTime;
    }

    return result;
};