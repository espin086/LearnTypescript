//Variable Creations --------------------------------------------------------
var menu = [
    { name: "Margherita", price: 10 },
    { name: "Pepperoni", price: 12 },
    { name: "Veggie", price: 15 },
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
    for (var i = 0; i < orderQueue.length; i++) {
        if (orderQueue[i].id === orderId) {
            order = orderQueue[i];
            break;
        }
    }
    if (!order) {
        return "Order ".concat(orderId, " not found");
    }
    order.status = "complete";
    return "Order ".concat(orderId, " is complete");
}
//Main Program ------------------------------------------------------------
addPizza({ name: "Cheese", price: 15 });
placeOrder("Cheese");
