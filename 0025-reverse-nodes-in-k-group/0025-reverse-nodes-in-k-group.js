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
var reverseKGroup = function(head, k) {
    if(k===1) return head
    let dummy = new ListNode(0,head)
    
    let prev = dummy
    let curr = head

    while(curr){
        let n =k
        let kth = curr

        while(n && kth){
            kth= kth.next
            n--
        }

        if(n) break
        
        let cur = curr
        let temp = kth

        while(cur!==kth){
            const nxt = cur.next
            cur.next = temp
            temp = cur
            cur = nxt
        }

        prev.next = temp
        prev = curr
        curr = kth
    }

    return dummy.next
};