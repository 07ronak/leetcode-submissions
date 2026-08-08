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

    const queue = new LLQ()
    queue.push(root)

    while (queue.size) {
        const level = []
        const size = queue.size

        for (let i = 0; i < size; i++) {
            const node = queue.pop()

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)

            level.push(node.val)
        }

        ans.push(level)
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

class LLQ {
    constructor() {
        this.left = new Node1(0)
        this.right = new Node1(0, this.left, null)
        this.left.next = this.right
        this.size = 0
    }
    push(val) {
        const node = new Node1(val, this.right.prev, this.right)
        this.right.prev.next = node
        this.right.prev = node
        this.size++
    }
    pop() {
        if (this.size) {
            const node = this.left.next
            node.next.prev = this.left
            this.left.next = node.next
            this.size--

            return node.val
        }
    }
}