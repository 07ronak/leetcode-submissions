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
    if(!head) return null

    if(!head.next || !head.next.next) return head

    let odd = head
    let even = head.next
    let evenHead = head.next

    while(even && even.next){
        odd.next = even.next
        odd = odd.next

        even.next = odd.next
        even = even.next
    }

    odd.next = evenHead

    return head
};