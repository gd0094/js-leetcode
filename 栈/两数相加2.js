/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 设置两个栈
  const stack1=[],stack2=[]
  while(l1!==null){
    stack1.push(l1.val)
    l1=l1.next
  }
  while(l2!==null){
    stack2.push(l2.val)
    l2=l2.next
  }
  let carry=0//进位值
  let curr=null
  while(stack1.length!==0 || stack2.length!==0){
    let sum=0
    if(stack1.length!==0){
      sum+=stack1.pop()
      // const num=stack1.pop()
      // sum = sum+num
    }
    if(stack2.length!==0){
      sum+=stack2.pop()
    }
    sum+=carry
    const node = new ListNode(sum % 10)
    carry = Math.floor(sum/10)
    // 新节点指向curr
    node.next=curr
    // curr节点向前移动
    curr=node
  }
  if(carry!==0){
    const node = new ListNode(carry)
    // 新节点指向curr
    node.next=curr
    // curr节点向前移动
    curr=node
  }
  return curr
};