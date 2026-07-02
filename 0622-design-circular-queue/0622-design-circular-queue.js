/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.arr = new Array(k + 1);
    this.n = k + 1; // actual array size
    this.front = 0;
    this.rear = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;

    this.arr[this.rear] = value;
    this.rear = (this.rear + 1) % this.n;

    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;

    this.front = (this.front + 1) % this.n;

    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1;

    return this.arr[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) return -1;

    return this.arr[(this.rear - 1 + this.n) % this.n];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.front === this.rear;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.rear + 1) % this.n === this.front;
};