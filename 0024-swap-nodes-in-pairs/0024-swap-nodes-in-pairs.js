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
var swapPairs = function(head) {
    if(!head) return null
    if(!head.next) return head

    let dummy = new ListNode(0,head)

    let prev = dummy
    let curr = head
    
    while(curr && curr.next){
        let second = curr.next
        let x = curr.next.next

        second.next = curr
        prev.next = second
        curr.next = x

        prev = curr
        curr = x
    }
    

    return dummy.next
};