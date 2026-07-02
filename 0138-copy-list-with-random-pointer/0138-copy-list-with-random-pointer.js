/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    let map = new Map([[null,null]])

    let curr = head

    while(curr){
        let newNode = new _Node(curr.val)
        map.set(curr,newNode)
        curr = curr.next
    }

    curr = head

    while(curr){
        const el = map.get(curr)
        el.next = map.get(curr.next)
        el.random = map.get(curr.random)
        curr = curr.next
    }

    return map.get(head)
};