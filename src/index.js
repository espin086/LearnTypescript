var menu = [
    {
        name: "Margherita",
        price: 10
    },
    {
        name: "Pepperoni",
        price: 12
    }
];
function addPizza(pizza) {
    menu.push(pizza);
}
addPizza({ name: "Cheese", price: 15 });
