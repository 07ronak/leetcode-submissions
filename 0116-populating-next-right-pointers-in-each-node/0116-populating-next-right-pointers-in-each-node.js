/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (!root) return null

    let queue = new LL()

    queue.push(root)

    while(queue.size){
        const len = queue.size

        for(let i=0; i<len; i++){
            let node = queue.pop()

            if(node.left){
                queue.push(node.left)
                queue.push(node.right)
            }

            if(i<len-1){
                node.next = queue.top()
            }
        }
    }

    return root
};

class LLNode {
    constructor(node, prev = null, next = null) {
        this.node = node
        this.prev = prev
        this.next = next
    }
}

class LL {
    constructor() {
        this.left = new LLNode(0)
        this.right = new LLNode(0, this.left)
        this.left.next = this.right
        this.size = 0
    }
    push(node) {
        const n = new LLNode(node, this.right.prev, this.right)
        this.right.prev.next = n
        this.right.prev = n
        this.size++
    }
    pop() {
        if (this.size > 0) {
            const n = this.left.next

            n.next.prev = this.left
            this.left.next = n.next

            this.size--
            return n.node
        }
    }
    top() {
        if (this.size > 0) {
            return this.left.next.node
        }
    }
}