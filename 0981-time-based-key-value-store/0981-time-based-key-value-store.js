var TimeMap = function() {
    this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map.has(key)){
        this.map.set(key,[])
    }
    this.map.get(key).push([value,timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map.has(key)) return ""

    const arr = this.map.get(key)
    let left = 0
    let right = arr.length - 1

    while(right>left){
        const mid = Math.ceil((left+right)/2)

        if(arr[mid][1]<=timestamp){
            left = mid
        } else{
            right = mid - 1
        }
    }

    if(arr[left][1]<=timestamp) return arr[left][0]

    return ""
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */