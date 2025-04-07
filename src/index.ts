type Pizza = {
    name: string
    price: number
}

const menu = [
    {
        name: "Margherita",
        price: 10
    },
    {
        name: "Pepperoni",
        price: 12
    }
]


function addPizza(pizza: Pizza): void {
    menu.push(pizza)
}

addPizza({ name: "Cheese", price: 15 })

