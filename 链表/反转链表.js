/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    //初始化
    let cur=head
    let pre=null
    while(cur!=null){
        let tmp=cur.next//暂存后继节点
        cur.next=pre//修改cur的引用指向
        pre=cur//pre暂存cur
        cur=tmp//cur访问下一节点
    }
   return pre
};