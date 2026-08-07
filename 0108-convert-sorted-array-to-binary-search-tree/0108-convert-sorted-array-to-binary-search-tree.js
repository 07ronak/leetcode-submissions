/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const dfs = (l, r) => {
        if (l > r) return null

        const mid = Math.floor((l + r) / 2)
        const node = new TreeNode(nums[mid])

        node.left = dfs(l, mid - 1)
        node.right = dfs(mid + 1, r)

        return node
    }

    return dfs(0, nums.length - 1)
};