/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) {return null}
    const rootVal=preorder[0];//根节点
    const i=inorder.indexOf(rootVal)//中序遍历中根节点坐标
    //左右子树递归调用
    let leftTree=buildTree(preorder.slice(1,i+1),inorder.slice(0,i))
    let rightTree=buildTree(preorder.slice(i+1),inorder.slice(i+1))
    const node=new TreeNode(rootVal);
    node.left=leftTree;
    node.right=rightTree;
    return node;
};
let preorder = [3,9,20,15,7]
let inorder = [9,3,15,20,7]
var result=buildTree(preorder,inorder)
console.log(result)