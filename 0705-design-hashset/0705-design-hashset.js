class ListNode1 {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

var MyHashSet = function () {
    this.arr = Array.from({ length: 10000 }, () => new ListNode1(0));
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    const idx = key % 10000
    let curr = this.arr[idx]

    while (curr.next) {
        if (curr.next.val === key) {
            return
        }
        curr = curr.next
    }
    curr.next = new ListNode1(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    const idx = key % 10000
    let curr = this.arr[idx]

    while (curr.next) {
        if (curr.next.val === key) {
            curr.next = curr.next.next
            break
        }
        curr = curr.next
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    const idx = key % 10000
    let curr = this.arr[idx]

    while (curr.next) {
        if (curr.next.val === key) {
            return true
        }
        curr = curr.next
    }

    return false
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */