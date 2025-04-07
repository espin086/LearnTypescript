"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let user = [1, "John"];
;
let mySize = 1;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 0.2;
    return income * 0.3;
}
calculateTax(100000, 2022);
let employee = {
    id: 1,
    name: "John",
    retire: (date) => {
        console.log(date);
    }
};
let employee2 = {
    id: 1,
    name: "John",
    retire: (date) => { console.log(date); }
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
function greet(name) {
    if (name)
        console.log("Hello " + name.toUpperCase());
    else
        console.log("Hello");
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map