class Node1{
    constructor(key, val, prev = null, next = null){
        this.key = key
        this.val = val
        this.prev = prev
        this.next = next
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.n = capacity
    this.map = new Map()
    this.left = new Node1(0,0)
    this.right = new Node1(0,0,this.left,null)
    this.left.next = this.right
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map.has(key)) return -1

    //update order
    const node = this.map.get(key)
    const l = node.prev
    const r = node.next

    l.next = r
    r.prev = l
    
    node.prev = this.left
    node.next = this.left.next

    this.left.next.prev = node
    this.left.next = node

    return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)){
        const node = this.map.get(key)
        node.val = value
        this.get(key)
        return    
    }

    if(this.n===0){
        //remove the LRU val
        const toDel = this.right.prev
        this.map.delete(toDel.key)
        toDel.prev.next = this.right
        this.right.prev = toDel.prev
        this.n++
    }

    const a = new Node1(key,value,this.left,this.left.next)
    this.map.set(key,a)

    this.left.next.prev = a
    this.left.next = a

    this.n--
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */