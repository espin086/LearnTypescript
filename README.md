# LearnTypescript
A repo to learn Typescript from FreeCodeCamp

## FreeCodeCamp Resources


- [TypeScript Tutorial for Begineers](https://www.youtube.com/watch?v=d56mG7DezGs)


## Notes

### Section 1

**NOTE**

Typescript was created by Microsoft to address the issues iwth JavaScirpt. Every JS file is a valid TS file, but we have more robust features in TS.

- Static Typing: like C++, C# or Java has explicit declarations for variable type such as ```int number = 10;``` can only take integers. While Python is dynamically typed and provides great flexibility we need to test heavily. 
- Code Completion...productive libraries widely available
- Refactoring...
- Shorthand...

Develop with more confidence by finding errors during compile tmie before it gets deployed. Productivity is much better including powerful auto completion. TypeScript increases employability in the job market, it is often table stakes for many companies. 

Drawbacks of TS: 
- Compilation step: as browsers do not understand TS code
- Disciplined when writing code, useful for large projects, great for medium to large projects


**SET UP DEV ENVIRONMENT**

- Install node (e.g. npm)
- Install TypeScript

```bash
sudo npm i -g typescript
```

Configuring compiler...

```bash
tsc --init
```

Contains version of JavaScript that the compiler will use. Depending on where you want to deploy your applicaiton you can use a different version. 

Module section has multiple sections. We set the source root directory to ```src``` in this section by convention. There is also an outDir that we change to ```./dist``` by convention. We also: 

- remove code from js files when compiled
- ensure no js is emmitted if there is an an error when ts code compiles


There are the basics of ```tsconfig.json```


### Section 2: Debugging TS Applicaitons

Configure ```tsconfig.json``` to create index mappings for ts to js code to help with debugging. 

We need to create a configuration file to lanch the debugger in VSCode/Cursor, it looks like this: 

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [

        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/src/index.ts",
            "preLaunchTask": "tsc: build - tsconfig.json",
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
        }
    ]
}
```

You can 'watch' variables in the debugging section to follow metrics. YOu can check your local scope and the global scope. 


### Secion 3: Built-in Types

TypeScript
- any
- unknown
- never
- enum
- tuble

To help with ensuring best practices in VSCode we go to the ```tsconfig.json``` and enable these settings: 
```json
"noUnusedLocals": true,             
"noUnusedParameters": true,     
"noImplicitReturns": true,    
```

### Section #4: Code Samples from Course: 

```typescript
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


```



## FreeCodeCamp Resources


- [Learn TypeScript - Full Course for Begineers](https://www.youtube.com/watch?v=SpwzRDUQ1GI)