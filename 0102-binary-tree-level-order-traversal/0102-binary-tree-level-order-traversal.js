/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []

    const ans = []
    const queue = new Queue1()
    queue.enqueue(root)

    while (queue.size) {
        const len = queue.size
        const arr = []

        for (let i = 0; i < len; i++) {
            const node = queue.dequeue()
            arr.push(node.val)

            if (node.left) queue.enqueue(node.left)
            if (node.right) queue.enqueue(node.right)
        }

        ans.push(arr)
    }

    return ans
};

class Node1 {
    constructor(val, prev = null, next = null) {
        this.val = val
        this.prev = prev
        this.next = next
    }
}

class Queue1 {
    constructor() {
        this.right = new Node1(0)
        this.left = new Node1(0, null, this.right)
        this.right.prev = this.left
        this.size = 0
    }
    enqueue(val) {
        //add to the right end
        const node = new Node1(val, this.right.prev, this.right)
        this.right.prev.next = node
        this.right.prev = node
        this.size++
    }
    dequeue() {
        //pop from left
        if (this.size) {
            const node = this.left.next
            this.left.next = node.next
            node.next.prev = this.left
            this.size--

            return node.val
        }
    }
}
