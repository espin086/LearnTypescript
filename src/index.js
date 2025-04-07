//Variable Creations --------------------------------------------------------
var menu = [
    { id: 1, name: "Margherita", price: 10 },
    { id: 2, name: "Pepperoni", price: 12 },
    { id: 3, name: "Veggie", price: 15 },
];
var orderQueue = [];
var cashInRegister = 0;
var orderId = 0;
//Functions ----------------------------------------------------------------
function addPizza(pizza) {
    menu.push(pizza);
    console.log("Pizza ".concat(pizza.name, " added to menu"));
}
function placeOrder(pizzaName) {
    var pizza;
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].name === pizzaName) {
            pizza = menu[i];
            break;
        }
    }
    if (pizza) {
        cashInRegister += pizza.price;
    }
    if (!pizza) {
        console.log("Pizza ".concat(pizzaName, " not found in menu"));
    }
    else {
        console.log("Order placed for ".concat(pizzaName));
    }
}
function completeOrder(orderId) {
    var order;
    for (var i = 0; i < orderQueue.length; i++) { // Loop through the orderQueue
        if (orderQueue[i].id === orderId) { // Check if the orderId matches the order in the orderQueue
            order = orderQueue[i]; // If it does, set the order to the order in the orderQueue
            break;
        }
    }
    if (!order) {
        return "Order ".concat(orderId, " not found");
    }
    order.status = "complete";
    return "Order ".concat(orderId, " is complete");
}
function getPizzaDetails(identifer) {
    if (typeof identifer === "string") {
        return menu.find(function (pizza) { return pizza.name.toLowerCase() === identifer.toLowerCase(); });
    }
    else if (typeof identifer === "number") {
        return menu.find(function (pizza) { return pizza.id === identifer; });
    }
    else {
        throw new Error("Invalid identifier it must be a string or number");
    }
}
//Main Program ------------------------------------------------------------
addPizza({ id: 4, name: "Cheese", price: 15 });
placeOrder("Cheese");
placeOrder("Cheese");
console.log(cashInRegister);
