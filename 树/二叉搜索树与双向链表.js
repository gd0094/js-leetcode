/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  
  function dfs(cur){
      // 递归边界，叶子节点返回
      if (cur === null) return;
      // 中序遍历
      dfs(cur.left);
      // 如果不是第一个节点
      if (pre != null) {
        // 前一个节点指向下一个节点
        pre.right = cur;
      }else {
        head = cur;
      }
      // 当前节点指向前一个节点
      cur.left = pre;
      // 到下一个节点
      pre = cur;
      dfs(cur.right);
    }
    let pre,head=null
    if(root == null) return root
    dfs(root)
    // 中序遍历完，head指向头结点，pre指向尾节点
    head.left = pre
    pre.right = head
    return head
    
  }