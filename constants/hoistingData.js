const hoistingData = [
  {
    title: 'Variable Hoisting and Initialization',
    description: (
      <>
        Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation. 
        Variables declared using &#39;var&#39; are hoisted and initialized with &#39;undefined&#39;, 
        which can lead to unexpected behavior if not understood properly.
      </>
    ),
    codeSnippet: `
// Example demonstrating variable hoisting

console.log(name); // Output: undefined
var name = 'Okami Academy';
    `
  },
  {
    title: 'Function Hoisting',
    description: (
      <>
        Functions declared using function declarations are also hoisted to the top of their containing scope. 
        This allows you to call a function before its declaration in the code.
      </>
    ),
    codeSnippet: `
// Example demonstrating function hoisting

sayHello(); // Output: Hello
function sayHello() {
  console.log('Hello');
}
    `
  },
  {
    title: 'Variable Shadowing',
    description: (
      <>
        Hoisting can cause issues with variable shadowing, where a variable declared within a nested scope
        has the same name as a variable in an outer scope. 
        This can lead to unexpected behavior when accessing variables within different scopes.
      </>
    ),
    codeSnippet: `
// Example demonstrating variable shadowing

var x = 10;

function foo() {
  var x = 20;
  console.log(x); // Output: 20
}

foo();
console.log(x); // Output: 10
    `
  },
  {
    title: 'Let and Const Hoisting',
    description: (
      <>
        Unlike variables declared with &#39;var&#39;, variables declared using &#39;let&#39; 
        and &#39;const&#39; are not initialized with &#39;undefined&#39; during hoisting. 
        Instead, they remain in a &#39;temporal dead zone&#39; until they are actually declared in the code.
      </>
    ),
    codeSnippet: `
// Example demonstrating let and const hoisting

console.log(name); // Error: Cannot access 'name' before initialization
let name = 'Alice';
    `
  },
  {
    title: 'Hoisting with Function Expressions',
    description: (
      <>
        It&#39;s important to note that only the function declaration itself is hoisted, 
        not the function expression. If you declare a function using a function expression,
        you&#39;ll need to define it before you can call it.
      </>
    ),
    codeSnippet: `
// Example demonstrating hoisting with function expressions

sayHello(); // Error: sayHello is not a function
var sayHello = function() {
  console.log('Hello');
};
    `
  },
  {
    title: 'Order of Declarations Matters',
    description: (
      <>
        When variables and functions are hoisted, their order of declaration matters. 
        If you reference a variable or function before it&#39;s declared,
        you might encounter unexpected results or errors.
      </>
    ),
    codeSnippet: `
// Example demonstrating the order of declarations matters

console.log(x); // Output: undefined
var x = 10;

foo(); // Output: Hello
function foo() {
  console.log('Hello');
}
    `
  },
  {
    title: 'Let and Const in For Loops',
    description: (
      <>
        Variables declared with `let` or `const` within the initialization of a `for` loop are block-scoped,
        and a new variable is created in each iteration. This might lead to unexpected behavior if 
        you assume the variables behave like they do with `var`.
      </>
    ),
    codeSnippet: `
// Example demonstrating let and const in for loops

for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Output: 0, 1, 2
  }, 100);
}
    `
  },
  {
    title: 'Hoisting and Arrow Functions',
    description: (
      <>
        Arrow functions are not hoisted like regular function declarations. 
        If you define an arrow function as a variable, it must be defined before it&#39;s used.
      </>
    ),
    codeSnippet: `
// Example demonstrating hoisting and arrow functions

const greet = () => {
  console.log('Hello');
};

greet(); // Output: Hello
    `
  }
];

export default hoistingData;