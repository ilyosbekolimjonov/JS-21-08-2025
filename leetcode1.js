var firstUniqChar = function(s) {
    const charCount = {}

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        charCount[char] = (charCount[char] || 0) + 1
    }

    for (let i = 0; i < s.length; i++){
        const char = s[i]
        if (charCount[char] === 1) return i
    }

  return -1
}

let s1 = "loveleetcode"
let result1 = firstUniqChar(s1)
alert(`Input: "${s1}", Output: ${result1}`)

let s2 = "aabbccdd"
let result2 = firstUniqChar(s2)
alert(`Input: "${s2}", Output: ${result2}`)