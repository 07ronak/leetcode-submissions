/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return null

    if(k===0) return head

    let size = 0
    let curr = head

    while(curr){
        curr = curr.next
        size++
    }

    k = k % size
    
    if(k===0) return head

    curr = head
    let ahead = head

    while(k){
        ahead = ahead.next
        k--
    }

    while(ahead && ahead.next){
        ahead = ahead.next
        curr = curr.next
    }

    let ans = curr.next

    ahead.next = head
    curr.next = null

    return ans
};