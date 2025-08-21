function doubleChar(str) {
  let result = ""
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i]
  }
  return result
}

let str1 = "String"
let str2 = "Hello World!"
let str3 = "1234!_ "

alert(doubleChar(str1))
alert(doubleChar(str2))
alert(doubleChar(str3))