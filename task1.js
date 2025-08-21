let drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
]

function sortDrinkByPrice(drinks) {
    return drinks.sort((a, b) => a.price - b.price)
}

let sortedDrinks = sortDrinkByPrice(drinks)

alert(JSON.stringify(sortedDrinks))