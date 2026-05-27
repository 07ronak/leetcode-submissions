/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
    if (target.length === 1) {
        return target[0] === 1;
    }

    // Max Heap implementation
    class MaxHeap {
        constructor() {
            this.heap = [];
        }

        size() {
            return this.heap.length;
        }

        peek() {
            return this.heap[0];
        }

        push(val) {
            this.heap.push(val);
            this.bubbleUp();
        }

        pop() {
            if (this.heap.length === 1) return this.heap.pop();

            const top = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.bubbleDown();

            return top;
        }

        bubbleUp() {
            let idx = this.heap.length - 1;

            while (idx > 0) {
                let parent = Math.floor((idx - 1) / 2);

                if (this.heap[parent] >= this.heap[idx]) break;

                [this.heap[parent], this.heap[idx]] =
                    [this.heap[idx], this.heap[parent]];

                idx = parent;
            }
        }

        bubbleDown() {
            let idx = 0;
            const n = this.heap.length;

            while (true) {
                let left = idx * 2 + 1;
                let right = idx * 2 + 2;
                let largest = idx;

                if (left < n && this.heap[left] > this.heap[largest]) {
                    largest = left;
                }

                if (right < n && this.heap[right] > this.heap[largest]) {
                    largest = right;
                }

                if (largest === idx) break;

                [this.heap[idx], this.heap[largest]] =
                    [this.heap[largest], this.heap[idx]];

                idx = largest;
            }
        }
    }

    let total = target.reduce((a, b) => a + b, 0);

    const heap = new MaxHeap();

    for (let num of target) {
        heap.push(num);
    }

    while (true) {
        let largest = heap.pop();
        let rest = total - largest;

        // success cases
        if (largest === 1 || rest === 1) {
            return true;
        }

        // invalid cases
        if (rest === 0 || largest < rest || largest % rest === 0) {
            return false;
        }

        let previous = largest % rest;

        total = rest + previous;
        heap.push(previous);
    }
};