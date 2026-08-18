class TrieNode {
    constructor() {
        this.children = new Map()
        this.word = false
    }
}

class Trie1 {
    constructor() {
        this.root = new TrieNode()
    }
    insert(word) {
        let curr = this.root

        for (const c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode())
            }
            curr = curr.children.get(c)
        }

        curr.word = true
    }
}

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
    const trie = new Trie1()
    for (const word of dictionary) {
        trie.insert(word)
    }

    const n = s.length
    const map = new Map()
    map.set(n, 0)

    return bt(0)

    function bt(idx) {
        if (map.has(idx)) {
            return map.get(idx)
        }

        let res = 1 + bt(idx + 1)

        let curr = trie.root

        for (let i = idx; i < n; i++) {
            const c = s[i]

            if (!curr.children.has(c)) {
                break
            }

            curr = curr.children.get(c)

            if (curr.word) {
                res = Math.min(res, bt(i + 1))
            }
        }

        map.set(idx, res)
        return res
    }
};