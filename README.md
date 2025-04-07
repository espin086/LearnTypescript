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

Module section has multiple sections. We set the source root directory to ```src``` in this section by convention. 