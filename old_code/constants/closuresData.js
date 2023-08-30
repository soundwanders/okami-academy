// closuresData.js
const closuresData = [
  {
    title: 'Variable Retention in Loops',
    description: (
      <>
        One common mistake is to use closures within loops without thinking about how they capture variables. 
        If you create closures inside a loop, they will capture the current value of the loop variable, 
        which might lead to unexpected behavior. We encourage all of you code ninjas to use an 
        IIFE (Immediately Invoked Function Expression) to properly capture loop variables.
      </>
    ),
    codeSnippet: `
// Creating closures inside a loop without proper variable capture

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // Will output 5 for all timeouts
  }, 1000);
};
    `
  },
  {
    title: 'Changing Shared Variables',
    description: (
      <>
        Closures share the same variables from their outer scope. 
        If a closure modifies a shared variable, it can affect other closures or parts of the application
        that rely on the same variable. Users should be cautious when using closures in scenarios 
        where shared variables are involved.
      </>
    ),
    codeSnippet: `
// Demonstrating how closures can affect shared variables

function createCounter() {
  var count = 0;
  return function() {
    return ++count;
  };
};

var counter1 = createCounter();
var counter2 = createCounter();
console.log(counter1()); // Output: 1
console.log(counter2()); // Output: 1
console.log(counter1()); // Output: 2
    `
  },
  {
    title: 'Memory Leaks',
    description: (
      <>
        Closures can inadvertently cause memory leaks if not used carefully. When a closure captures
        a reference to an object, that object won&#39;t be garbage collected even if it&#39;s no longer needed. 
        Users should be mindful of releasing unnecessary closures or references to avoid memory leaks.
      </>
    ),
    codeSnippet: `
// Creating closures inside a loop without proper variable capture

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // Will output 5 for all timeouts
  }, 1000);
};
    `
  },
  {
    title: 'Binding `this` Context',
    description: (
      <>
        The value of this inside a closure can be tricky, especially when dealing with event handlers 
        or object methods. Users should learn about techniques like .bind(), arrow functions, 
        or using variables to store this in an outer scope to ensure the correct context.
      </>
    ),
    codeSnippet: `
// Demonstrating 'this' context inside closures

var obj = {
  value: 42,
  getValue: function() {
    return function() {
      return this.value; // 'this' points to the global object
    };
  }
};

var closureFunc = obj.getValue();

// our console log will return output: undefined
console.log(closureFunc());
    `
  },
  {
    title: 'Creating Private Data',
    description: (
      <>
        Closures can be used to create private data and encapsulate logic within functions. 
        Educate users about the concept of data encapsulation and how closures enable them 
        to create private properties and methods in JavaScript.
      </>
    ),
    codeSnippet: `
// Using closures to create private data and encapsulate logic

function createCounter() {
  var count = 0;
  return {
    increment: function() {
      count++;
    },
    getCount: function() {
      return count;
    }
  };
};

var counter = createCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
    `
  },
  {
    title: 'Performance Considerations',
    description: (
      <>
        While closures are powerful, they can impact performance if used excessively. 
        Every closure carries some memory overhead, so users should be aware of the potential 
        impact on memory usage when dealing with a large number of closures.
      </>
    ),
    codeSnippet: `
// Creating excessive closures

var closureArray = [];
for (var i = 0; i < 1000000; i++) {
  closureArray.push(function() {
    return i; // All closures will capture the final value of 'i'
  });
}  
    `
  },
  {
    title: 'Garbage Collection',
    description: (
      <>
        It&#39;s important to recognize that closures can inadvertently prevent objects from being cleared out
        by the garbage collector if these objects are referenced within the closure. 
        This situation may result in memory leaks if closures are not handled carefully and objects 
        continue to be retained in memory longer than needed.
      </>
    ),
    codeSnippet: `
// Demonstrating how closures can prevent garbage collection

function createLeak() {
  var obj = {};
  return function() {
    return obj;
  };
};

var leakFunction = createLeak();
var reference = leakFunction();
    `
  },
  {
    title: 'Asynchronous Functions',
    description: (
      <>
        Conquering closures is crucial when dealing with asynchronous operations. 
        Beginners might struggle with closures in scenarios where asynchronous functions are involved, 
        such as callbacks or promises. It&#39;s good to understand how closures capture variables and 
        how to maintain proper state to help avoid common pitfalls.
      </>
    ),
    codeSnippet: `
// Using closures with asynchronous operations

function asyncOperation(callback) {
  setTimeout(function() {
    var result = "Async result";
    callback(result);
  }, 1000);
};

var outerValue = "Outer value";
asyncOperation(function(data) {
  console.log(data + " and " + outerValue);
});
    `
  },
];

export default closuresData;