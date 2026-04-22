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

    while(fast!==null && fast.next!==null){
        slow = slow.next
        fast = fast.next.next

        if(slow===fast){
            break
        }
    }

    // If no cycle exists
    if (fast === null || fast.next === null) {
        return null;
    }

    slow = head

    while(slow!==fast){
        slow = slow.next
        fast = fast.next
    }

    return fast
};