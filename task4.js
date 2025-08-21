function afterNYears(people, n) {
    let newPeople = {}
    for (let key in people) {
        newPeople[key] = people[key] + Math.abs(n)
    }
    return newPeople
}

let people1 = {
    "Joel": 32,
    "Fred": 44,
    "Reginald": 65,
    "Susan": 33,
    "Julian": 13,
}
let n1 = 1

let people2 = {
    "Baby": 2,
    "Child": 8,
    "Teenager": 15,
    "Adult": 25,
    "Elderly": 71
}
let n2 = 19

let people3 = {
    "Genie": 1000,
    "Joe": 40
}
let n3 = 5

alert(JSON.stringify(afterNYears(people1, n1)))
alert(JSON.stringify(afterNYears(people2, n2)))
alert(JSON.stringify(afterNYears(people3, n3)))