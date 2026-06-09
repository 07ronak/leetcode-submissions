/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  // Build the graph as an adjacency list
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [u, v, w] of times) {
    graph[u].push([v, w]);
  }

  // MinHeap to store the nodes with their travel time as priority
  const minHeap = new MinHeapPriorityQueue();
  minHeap.enqueue(k, 0);

  // Distance array to track the minimum time to reach each node
  const distances = Array(n + 1).fill(Infinity);
  distances[k] = 0;

  while (!minHeap.isEmpty()) {
    const { element: currentNode, priority: currentDistance } =
      minHeap.dequeue();

    if (currentDistance > distances[currentNode]) continue; // Skip if we already have a shorter path

    for (const [neighbor, weight] of graph[currentNode]) {
      const newDistance = currentDistance + weight;
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        minHeap.enqueue(neighbor, newDistance);
      }
    }
  }

  // Calculate the maximum time to reach any node
  const maxTime = Math.max(...distances.slice(1)); // Ignore index 0 as nodes are 1-indexed

  // If any node is unreachable, return -1
  return maxTime === Infinity ? -1 : maxTime;
};


class MinHeapPriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Helper methods
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // Core methods
  enqueue(element, priority) {
    const node = { element, priority };
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.bubbleDown(0);
    }

    return root;
  }

  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  print() {
    console.log(this.heap);
  }

  // Helper methods to maintain the heap property
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[index].priority >= this.heap[parentIndex].priority) {
        break;
      }

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    const size = this.heap.length;

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let smallest = index;

      if (
        leftChildIndex < size &&
        this.heap[leftChildIndex].priority < this.heap[smallest].priority
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < size &&
        this.heap[rightChildIndex].priority < this.heap[smallest].priority
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) {
        break;
      }

      this.swap(index, smallest);
      index = smallest;
    }
  }
}

