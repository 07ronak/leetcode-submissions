class ListNode {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.next = null
    }
}

var MyHashMap = function () {
    this.arr = Array.from({ length: 1000 }, () => new ListNode(0, 0))
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    const idx = key % 1000
    let curr = this.arr[idx]

    while (curr.next) {
        if (curr.next.key === key) {
            curr.next.val = value
            return
        }
        curr = curr.next
    }
    curr.next = new ListNode(key, value)
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    const idx = key % 1000
    let curr = this.arr[idx]

    while (curr.next) {
        if (curr.next.key === key) {
            return curr.next.val
        }
        curr = curr.next
    }

    return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    const idx = key % 1000
    let curr = this.arr[idx]

    while (curr.next) {
        if (curr.next.key === key) {
            curr.next = curr.next.next
            return
        }
        curr = curr.next
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */