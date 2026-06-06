/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    const dummy = new ListNode(0);
    let curr = head;

    while (curr) {
        let prev = dummy;
        let nextNode = curr.next;

        // Find insertion position
        while (prev.next && prev.next.val < curr.val) {
            prev = prev.next;
        }

        // Insert curr between prev and prev.next
        curr.next = prev.next;
        prev.next = curr;

        curr = nextNode;
    }

    return dummy.next;
};