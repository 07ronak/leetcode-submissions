class Node1 {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

class BST {
    constructor() {
        this.root = null
    }

    _insert(node, key) {
        if (!node) return new Node1(key)

        if (node.val === key) {
            return node
        }

        if (key > node.val) {
            node.right = this._insert(node.right, key)
        } else {
            node.left = this._insert(node.left, key)
        }

        return node
    }

    add(key) {
        this.root = this._insert(this.root, key)
    }

    contains(key) {
        if (!this.root) return false

        let curr = this.root

        while (curr) {
            if (curr.val === key) return true

            if (curr.val < key) {
                curr = curr.right
            } else {
                curr = curr.left
            }
        }

        return false
    }

    _delete(node, key) {
        if (!node) return null

        if (key > node.val) {
            node.right = this._delete(node.right, key)
        } else if (key < node.val) {
            node.left = this._delete(node.left, key)
        } else {
            //found it
            if (!node.right) {
                return node.left
            }
            if (!node.left) {
                return node.right
            }
            //we have both children
            const min = this.findMin(node.right)
            node.val = min
            node.right = this._delete(node.right, min)
        }

        return node
    }

    remove(key) {
        this.root = this._delete(this.root, key)
    }

    findMin(node) {
        while (node.left) {
            node = node.left
        }
        return node.val
    }
}

var MyHashSet = function () {
    this.arr = Array.from({ length: 10000 }, () => new BST())
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    const idx = key % 10000
    this.arr[idx].add(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    const idx = key % 10000
    this.arr[idx].remove(key)
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    const idx = key % 10000
    return this.arr[idx].contains(key)
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */