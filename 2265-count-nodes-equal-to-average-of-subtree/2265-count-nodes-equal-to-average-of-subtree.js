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
 * @return {number}
 */
var averageOfSubtree = function (root) {
    let count = 0

    const dfs = (node) => {
        if (!node) {
            return [0, 0]
        }

        const [lsum, lcount] = dfs(node.left)
        const [rsum, rcount] = dfs(node.right)

        const totalSum = lsum + rsum + node.val
        const totalCount = lcount + rcount + 1

        if (Math.floor(totalSum / totalCount) === node.val){
            count++
        }

        return [totalSum, totalCount]
    }

    dfs(root)
    return count
};