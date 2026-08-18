class TrieNode {
    constructor() {
        this.children = new Map()
        this.word = false
    }
}

class Trie {
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
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    const rows = board.length
    const cols = board[0].length

    const trie = new Trie()
    for (const word of words) {
        trie.insert(word)
    }

    const res = []

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            bt(r, c, [], trie.root)
        }
    }

    return res

    function bt(r, c, arr, node) {
        if (r < 0 || r >= rows) return
        if (c < 0 || c >= cols) return

        const char = board[r][c]
        if (!node.children.has(char)) return

        board[r][c] = "#"
        arr.push(char)
        node = node.children.get(char)

        if (node.word) {
            res.push(arr.join(""))
            node.word = false
        }

        bt(r + 1, c, arr, node)
        bt(r - 1, c, arr, node)
        bt(r, c + 1, arr, node)
        bt(r, c - 1, arr, node)

        arr.pop()
        board[r][c] = char
    }
};