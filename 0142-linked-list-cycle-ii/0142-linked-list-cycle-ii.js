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
var detectCycle = function(head) {
    let fast = head
    let slow = head

    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(slow===fast){
            break
        }
    }

    if(!fast || !fast.next) return null

    fast = head

    while(fast!==slow){
        fast = fast.next
        slow = slow.next
    }

    return fast
};