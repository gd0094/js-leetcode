/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    function dfs(root){
        if(root == null) return 
        // 中序遍历
        dfs(root.right)
        if(k==0) return 
        k--
        // 如果当前节点为第k大的节点，记录当前节点
        if(k == 0) res = root.val
        dfs(root.left)
    }
    let res
    dfs(root)
    return res

};