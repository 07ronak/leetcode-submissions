/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    //split ll into two halves
    //reverse second half
    //calc max of each

    if(!head.next.next) return (head.val + head.next.val)

    let fast = head.next
    let slow = head

    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
    }

    let second = slow.next
    slow.next = null

    let prev = null
    while(second){
        let nxt = second.next
        second.next = prev
        prev = second
        second = nxt
    }

    second = prev
    let first = head
    let max = 0

    while(first){
        max = Math.max(max,first.val + second.val)
        first = first.next
        second = second.next
    }

    return max
};