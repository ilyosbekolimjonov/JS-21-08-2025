function objectToArray(obj) {
  return Object.entries(obj)
}

let obj1 = { D: 1, B: 2, C: 3 }
let obj2 = { likes: 2, dislikes: 3, followers: 10 }

alert(JSON.stringify(objectToArray(obj1)))
alert(JSON.stringify(objectToArray(obj2)))