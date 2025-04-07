let sales: number = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;


let level; //this is of type any



function render(document: any){ //don't declare the type as any, this is bad practice
    console.log(document);
}

let numbers: number[] = [1, 2, 3]; //this is an array of numbers and is explicitly typed


let user: [number, string] = [1, "John"]; //this is a tuple and is explicitly typed

//enums

const enum Size {Small, Medium, Large}; //this is useful for creating a set of named constants with auto-incrementing values


let mySize: Size = Size.Medium;
console.log(mySize);

// ts helps preven errors with functions


function calculateTax(income: number, taxYear: number=2022) : number {
    if (taxYear < 2022)
        return income * 0.2; 
    return income * 0.3; 
}

calculateTax(100_000, 2022);

// objects with types 
let employee: {
    readonly id: number, 
    name: string,
    retire: (date: Date) => void
} = {
    id: 1, 
    name: "John",
    retire: (date: Date) => {
        console.log(date);
    }
};

// Type Aliases
type Employee = {
    readonly id: number, 
    name: string,
    retire: (date: Date) => void
}

let employee2: Employee = {
    id: 1, 
    name: "John",
    retire: (date: Date) => {console.log(date)}};

// Union Types: we can have multiple types for a variable

function kgToLbs(weight: number | string): number {
    //narrowing
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

// Intersection Types: we can have multiple types for a variable

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {},
    // ...
}

// Literal Types: we can have a specific value for a variable

type Quantity = 50 | 100;//this is a literal type, they can also be strings or booleans

let quantity: Quantity = 50 //

type Metric = "cm" | "inch";

function greet(name: string | null | undefined){
    if (name)
        console.log("Hello " + name.toUpperCase());
    else
        console.log("Hello");
}

greet(undefined)


type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(1);
//optional property access operator
console.log(customer?.birthday?.getFullYear());

//optional element access operator
let customer2 = getCustomer(1);
// Fix: Customer is not an array, so we can't access index [0]
// Either remove this line or change it to show proper array element access
let numbers2 = [1, 2, 3];
console.log(numbers2?.[0]); // This demonstrates optional element access correctly

//optional call
let customer3 = getCustomer(1);
console.log(customer3?.birthday?.getFullYear());

//nullish coalescing operator
let result = customer3?.birthday?.getFullYear() ?? new Date().getFullYear();
console.log(result);

