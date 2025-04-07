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

## FreeCodeCamp Resources


- [Learn TypeScript - Full Course for Begineers](https://www.youtube.com/watch?v=SpwzRDUQ1GI)