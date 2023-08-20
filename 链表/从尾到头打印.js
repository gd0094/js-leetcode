/* 
function ListNode(x){
    this.val = x;
    this.next = null;
} */

// 思路:
// 1.利用while循环，将head每一次所指向的节点的值通过unshift()方法添加到一个新的数组中
// 2.unshift方法向数组开头添加一个或更多元素
var reversePrint = function(head) {
    let arr=[]
    while(head!=null){
        arr.unshift(head.val)
        head=head.next
    }
    return arr
};
