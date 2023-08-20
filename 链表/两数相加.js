var addTwoNumbers = function(l1, l2) {
    let head = null, tail = null;
    let carry = 0;
    //l1,l2都未遍历到最后
    while (l1 || l2) {
        //如果为null,则赋值0
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {//如果头指针为null
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);
        //遍历两个链表
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
};
