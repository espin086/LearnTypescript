// Custom Types ------------------------------------------------------------
type Pizza = {
    name: string
    price: number
}

type Order = {
    id: string
    pizza: Pizza
    status: string
}

type OrderQueue = {
    orders: Order[]
    cashInRegister: number
    orderId: number
}

//Variable Creations --------------------------------------------------------
const menu: Pizza[] = [
    {name: "Margherita", price: 10},
    {name: "Pepperoni", price: 12},
    {name: "Veggie", price: 15},
]

let orderQueue: Order[] = []
let cashInRegister: number = 0
let orderId: number = 0

//Functions ----------------------------------------------------------------
function addPizza(pizza: Pizza): void {
    menu.push(pizza)
    console.log(`Pizza ${pizza.name} added to menu`)
}


function placeOrder(pizzaName: string): void {
    let pizza: Pizza | undefined;
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].name === pizzaName) {
            pizza = menu[i];
            break;
        }
    }
    
    if (!pizza) {
        console.log(`Pizza ${pizzaName} not found in menu`)
    } else {
        console.log(`Order placed for ${pizzaName}`)
    }
}

function completeOrder(orderId: string): string {
    let order: Order | undefined;
    for (let i = 0; i < orderQueue.length; i++) {
        if (orderQueue[i].id === orderId) {
            order = orderQueue[i];
            break;
        }
    }
    
    if (!order) {
        return `Order ${orderId} not found`;
    }
    order.status = "complete";
    return `Order ${orderId} is complete`;
}

//Main Program ------------------------------------------------------------
addPizza({ name: "Cheese", price: 15 })
placeOrder("Cheese")