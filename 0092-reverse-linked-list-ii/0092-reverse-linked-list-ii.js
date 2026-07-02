/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head.next) return head
    let n = right - left + 1

    const dummy = new ListNode(0,head)
    let curr= dummy
    left--

    while(left){
        curr = curr.next
        left--
    }

    const first = curr
    const second = curr.next

    let prev = null
    curr = curr.next

    while(n){
        const nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
        n--
    }

    first.next = prev
    second.next = curr

    return dummy.next 
};