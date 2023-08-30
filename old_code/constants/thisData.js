const thisData = [
  {
    title: 'What is `this` Anyways?',
    description: (
      <>
        The usage of the &#39;this&#39; keyword in JavaScript can be intricate and context-dependent. 
        It refers to the object on which the current code is being executed, serving as a reference 
        to that object within the scope of the code. Understanding how &#39;this&#39; behaves in various scenarios
         is pivotal for writing effective and maintainable code.    
      </>
         ),
    codeSnippet: `
// Example of the "this" keyword behavior

const person = {
  name: 'Mojo Jojo Dojo',
  greet() {
    console.log('Hello, ' + this.name);
  }
};

const anotherGreeting = person.greet;
anotherGreeting(); // Output: Hello, undefined (or an error in strict mode)
    `
  },
  {
    title: 'Losing "this" in Callback Functions',
    description: (
      <>
        Callback functions are a common source of &#39;losing&#39; the correct context of the `this` keyword. 
        Arrow functions can help maintain the context from the surrounding code, while regular functions 
        might need explicit binding or workaround strategies to preserve the intended `this` context.
      </>
    ),
    codeSnippet: `
// Example of "this" loss in callback functions

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    setTimeout(function () {
      this.count++; // 'this' points to the global object, not the Counter instance
      console.log(this.count);
    }, 1000);
  }
}

const counter = new Counter();
counter.increment(); // Output: NaN (or an error)
    `
  },
  {
    title: 'Arrow Functions and Lexical "this"',
    description: (
      <>
        Arrow functions inherently capture the surrounding context, which means they preserve the value of `this` 
        from the enclosing function. This behavior can be both helpful and confusing, especially when mixing 
        arrow functions and regular functions in the same context.
      </>
    ),
    codeSnippet: `
// Example of lexical "this" with arrow functions

class Printer {
  constructor() {
    this.message = 'Too many mind. One is all you need.';
  }

  printDelayed() {
    setTimeout(() => {
      console.log(this.message);
    }, 1000);
  }
}

const printer = new Printer();
printer.printDelayed(); // Output: Too many mind. One is all you need.
    `
  },
  {
    title: 'Method Chaining and "this"',
    description: (
      <>
        When chaining methods, it&#39;s important to be aware of how the `this` context is affected. 
        Some methods return a new object, altering the context and potentially causing confusion 
        when trying to access properties or methods from the original object.
      </>
    ),
    codeSnippet: `
// Example of method chaining and "this" context

const calculator = {
  value: 0,
  add(num) {
    this.value += num;
    return this;
  },
  multiply(num) {
    this.value *= num;
    return this;
  },
  getValue() {
    return this.value;
  }
};

const result = calculator.add(5).multiply(3).getValue();
console.log(result); // Output: 15
    `
  },
  {
    title: 'Arrow Functions and Method Definitions',
    description: (
      <>
        Arrow functions are particularly useful when defining methods in objects or classes, 
        as they retain the correct context of `this`. However, using arrow functions for methods 
        also means they cannot be used as constructors, and you must be cautious about 
        unintentional behavior due to capturing the outer context.
      </>
    ),
    codeSnippet: `
// Example of arrow functions and method definitions

const person = {
  name: 'Mojo',
  greetRegular: function () {
    console.log('Hello, ' + this.name);
  },
  greetArrow: () => {
    console.log('Hello, ' + this.name); // 'this' captures the outer context
  }
};

person.greetRegular(); // Output: Hello, Mojo
person.greetArrow(); // Output: Hello, undefined (or an error in strict mode)
    `
  },
];

export default thisData;
