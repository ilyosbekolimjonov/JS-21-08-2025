var addStrings = function(num1, num2) {
    let i = num1.length - 1
    let j = num2.length - 1
    let carry = 0
    let result = []

    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry

        if (i >= 0) {
            sum += parseInt(num1[i])
            i--
        }
        if (j >= 0) {
            sum += parseInt(num2[j])
            j--
        }
        result.unshift(sum % 10)
        carry = Math.floor(sum / 10)
    }

    return result.join("")
}

let num1 = "11"
let num2 = "123"
let result1 = addStrings(num1, num2)
alert(`Input: "${num1}", "${num2}", Output: ${result1}`)