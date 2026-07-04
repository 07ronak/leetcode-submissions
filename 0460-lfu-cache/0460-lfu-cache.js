class Node1 {
    constructor(key = 0, prev = null, next = null) {
        this.key = key
        this.prev = prev
        this.next = next
    }
}

class LL1 {
    constructor() {
        this.left = new Node1(0)
        this.right = new Node1(0, this.left, null)
        this.left.next = this.right
        this.map = new Map() //key -> Node
    }
    removeLeft() {
        if (!this.isEmpty()) {
            const node = this.left.next;

            this.map.delete(node.key);

            this.left.next = node.next;
            node.next.prev = this.left;

            return node.key
        }
    }
    removeVal(key) {
        if (!this.isEmpty()) {
            const n = this.map.get(key)
            const l = n.prev
            const r = n.next
            this.map.delete(key)

            l.next = r
            r.prev = l
        }
    }
    isEmpty() {
        return this.left.next === this.right
    }
    addRight(key) {
        const n = new Node1(key, this.right.prev, this.right)
        this.map.set(key, n)
        this.right.prev.next = n
        this.right.prev = n
    }
}


/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
    this.n = capacity
    this.size = 0
    this.lfu = 1
    this.keyVal = new Map()
    this.freq = new Map()
    this.ll = new Map()
    this.ll.set(1, new LL1())
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    if (!this.keyVal.has(key)) {
        return -1
    }

    this.update(key)

    return this.keyVal.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
    if (this.keyVal.has(key)) {
        //let's update the value first
        this.keyVal.set(key, value)
        this.update(key)
        return 
    }

    //if capacity is alreay full
    if (this.size === this.n) {
        //remove the lfu
        let lfuList = this.ll.get(this.lfu)

        const removedKey = lfuList.removeLeft();
        this.keyVal.delete(removedKey);
        this.freq.delete(removedKey);


        if (lfuList.isEmpty()) {
            this.ll.delete(this.lfu)
        }

        this.size--
    }

    //add the new element
    this.keyVal.set(key, value)

    if (!this.ll.has(1)) {
        this.ll.set(1, new LL1())
    }

    this.lfu = 1

    const list1 = this.ll.get(1)

    list1.addRight(key)

    this.freq.set(key, 1)

    this.size++
};

LFUCache.prototype.update = function (key) {
    //update the order
    let count = this.freq.get(key)
    this.freq.delete(key) //delete the old entry

    //remove the node from prev ll
    const list = this.ll.get(count)
    list.removeVal(key)

    if (list.isEmpty()) {
        this.ll.delete(count)
        if (count === this.lfu) {
            this.lfu++
        }
    }

    count = count + 1
    //add in +1 list
    if (!this.ll.has(count)) {
        this.ll.set(count, new LL1())
    }

    const newList = this.ll.get(count)
    newList.addRight(key)

    this.freq.set(key, count) //add the updated freq
}

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */