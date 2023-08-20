/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList=function(head){
    if(!head){
        return null
    }
    const map=new Map()
    let cur=head
    // 复制各节点，并建立原节点-新节点的Map映射
    while(cur){
        map.set(cur,new Node(cur.val))
        cur=cur.next
    }
    // 在map中添加null节点，就不需要判断节点为undefined的情况
    map.set(null, null)
    cur=head
    // 构建新链表的next和random指向
    while(cur){
        map.get(cur).next=map.get(cur.next)
        map.get(cur).random=map.get(cur.random)
        cur=cur.next
    }
    // 返回新链表的头节点
    return map.get(head)
}