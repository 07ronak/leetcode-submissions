/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head.next) return true

    let fast = head.next
    let slow = head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    let second = slow.next

    let prev = null

    while(second){
        let temp = second.next
        second.next = prev
        prev = second
        second = temp
    }

    let first = head
    second = prev

    while(second){
        if(second.val!==first.val) return false
        second = second.next
        first = first.next
    }

    return true
};