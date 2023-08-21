/* /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(root == null){
      return 0
  }
  // 后序遍历
  // 根节点的深度等于其子树深度最大值+1
  return Math.max(maxDepth(root.left),maxDepth(root.right))+1
}; 