const scopeData = [
  {
    title: 'Function Scoping and Variable Visibility',
    description: (
      <>
        Figuring out how scoping works in JavaScript is crucial for preventing unintended variable collisions and managing variable visibility. 
        Variables declared using <code>var</code> have function scope and can lead to unexpected behavior if not understood properly.
      </>
    ),
    codeSnippet: `
// Example demonstrating function scope

function greet() {
  if (true) {
    var message = 'We are all just walking each other home.';
  }
  console.log(message); // Output: We are all just walking each other home.
}

greet();
    `
  },
  {
    title: 'Block Scoping with let and const',
    description: (
      <>
        With the introduction of <code>let</code> and <code>const</code>, JavaScript now has block-scoped variables. These variables are only accessible
        within the block where they are defined, preventing unintended hoisting and improving code clarity.
      </>
    ),
    codeSnippet: `
// Example demonstrating block scope with let

if (true) {
  let value = 10;
  console.log(value); // Output: 10
}

console.log(value); // Error: value is not defined
    `
  },
  {
    title: 'Global Scope and Polluting the Global Namespace',
    description: (
      <>
        Variables declared without the <code>var</code>, <code>let</code>, or <code>const</code> keyword are automatically added to the global scope,
        which can lead to naming conflicts and pollute the global namespace. Avoid declaring variables without proper scoping.
      </>
    ),
    codeSnippet: `
// Example demonstrating global scope pollution

function setGlobalVariable() {
  globalVar = 'I am global';
}

setGlobalVariable();
console.log(globalVar); // Output: I am global
    `
  },
  {
    title: 'Function Scoping in Loops',
    description: (
      <>
        Variables declared with <code>var</code> inside a loop are not block-scoped, which can lead to unexpected behavior when used inside closures.
        Consider using <code>let</code> or <code>const</code> to ensure proper scoping within loop iterations.
      </>
    ),
    codeSnippet: `
// Example demonstrating function scoping in loops

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // Output: 5 (printed 5 times)
  }, 100);
}
    `

  },
  {
    title: 'Lexical Scope in Nested Functions',
    description: (
      <>
        Nested functions have access to variables defined in their outer (lexical) scope. 
        This can lead to unintended variable shadowing and unexpected behavior if not carefully managed.
      </>
    ),
    codeSnippet: `
// Example demonstrating lexical scope in nested functions

function outer() {
  var x = 10;
  
  function inner() {
    var x = 20; // This shadows the outer 'x'
    console.log(x); // Output: 20
  }
  
  inner();
  console.log(x); // Output: 10
}

outer();
    `
  },
  {
    title: 'Dynamic Scoping Challenges',
    description: (
      <>
        Dynamic scoping refers to the way variables are looked up based on the call stack rather than the lexical scope. 
        JavaScript uses lexical (static) scoping, but it&#39;s important to understand the differences and 
        challenges dynamic scoping can introduce in other programming languages.
      </>
    ),
    codeSnippet: `
// Example demonstrating dynamic scoping challenges

var x = 10;

function outer() {
  console.log(x); // Output: 10
}

function inner() {
  var x = 20;
  outer();
}

inner();
    `
  },
];

export default scopeData;
