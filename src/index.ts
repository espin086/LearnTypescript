// Custom Types ------------------------------------------------------------
type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: string
    pizza: Pizza
    status: "ordered" | "complete"
}

type OrderQueue = {
    orders: Order[]
    cashInRegister: number
    orderId: number
}

//Variable Creations --------------------------------------------------------
const menu: Pizza[] = [
    {id: 1, name: "Margherita", price: 10},
    {id: 2, name: "Pepperoni", price: 12},
    {id: 3, name: "Veggie", price: 15},
]

let orderQueue: Order[] = []
let cashInRegister: number = 0
let orderId: number = 0
let nextPizzaId: number = 4 // Start after the last pre-defined pizza ID

//Functions ----------------------------------------------------------------
function addPizza(name: string, price: number): void {
    const pizza: Pizza = {
        id: nextPizzaId,
        name,
        price
    }
    nextPizzaId++
    menu.push(pizza)
    console.log(`Pizza ${pizza.name} added to menu with ID: ${pizza.id}`)
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
        return;
    }
    
    // Add the price to the cash register
    cashInRegister += pizza.price
    
    // Create a new order
    orderId++;
    const newOrder: Order = {
        id: orderId.toString(),
        pizza: pizza,
        status: "ordered"
    }
    
    // Add the order to the queue
    orderQueue.push(newOrder)
    
    console.log(`Order placed for ${pizzaName}. Order ID: ${newOrder.id}`)
}

function completeOrder(orderId: string): string {
    let order: Order | undefined;
    for (let i = 0; i < orderQueue.length; i++) { // Loop through the orderQueue
        if (orderQueue[i].id === orderId) { // Check if the orderId matches the order in the orderQueue
            order = orderQueue[i];// If it does, set the order to the order in the orderQueue
            break;
        }
    }
    
    if (!order) {
        return `Order ${orderId} not found`;
    }
    order.status = "complete";
    return `Order ${orderId} is complete`;
}

function getPizzaDetails(identifer: string | number): Pizza | undefined {
    if (typeof identifer === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifer.toLowerCase())
    } else if (typeof identifer === "number") {
        return menu.find(pizza => pizza.id === identifer)
    } else {
        throw new Error("Invalid identifier it must be a string or number")
    }
}

//Main Program ------------------------------------------------------------
addPizza("Cheese", 15)
placeOrder("Cheese")
placeOrder("Cheese")
console.log(cashInRegister)