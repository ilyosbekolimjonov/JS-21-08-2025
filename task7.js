function checkTitle(str) {
    let words = str.split(" ")
    for (let word of words) {
        if (word.length > 0 && word[0] !== word[0].toUpperCase()) {
            return false
        }
    }
    return true
}

let str1 = "A Mind Boggling Achievement"
let str2 = "A Simple Java Script Program!"
let str3 = "Water is transparent"

alert(checkTitle(str1))
alert(checkTitle(str2))
alert(checkTitle(str3))