/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  // 链表为空
  if(head === null){
    return null
  }
  // 链表只有一个节点
  if(head.next === null){
    return head
  }

  let odd = head//奇数
  let even = head.next//偶数
  let evenHead = head.next //偶数第一个数的占位符
  while(even !==null && even.next!==null){
    // 奇数指向下一个奇数节点
    odd.next = odd.next.next
    // 跳到下一个节点
    odd = odd.next
    // 偶数同理
    even.next = even.next.next
    even = even.next
  }
  // 奇数的下一个节点指向偶数第一个节点
  odd.next = evenHead
  return head
}; 