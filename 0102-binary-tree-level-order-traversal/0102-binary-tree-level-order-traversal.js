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
var levelOrder = function(root) {
    if(!root) return []

    let k = 0
    const ans = []

    const queue = [root]

    while(queue.length > k){
        const level =[]
        const levelSize = queue.length - k

        for(let i=0; i<levelSize; i++){
            const node = queue[k++]

            level.push(node.val)

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }

        ans.push(level)
    }

    return ans
};