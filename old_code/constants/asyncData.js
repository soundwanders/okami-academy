const asyncData = [
  {
    title: 'Callback Hell',
    description: (
      <>
        One of the earliest issues with async was the dreaded &#39;callback hell.&#39; 
        This occurs when multiple asynchronous operations are nested inside each other. 
        It can lead to deeply nested, hard-to-read code. 
        To mitigate this, promises and async/await were introduced to provide a more linear, readable flow.
      </>
    ),
    codeSnippet: `
// A Glimpse Into Callback Hell

getAlien(alien => {
  getPlanet(alien, (planet) => {
      getGalaxy(planet, (galaxy) => {
        console.log(galaxy);
      });
  });
});
    `
  },
  {
    title: 'The await Keyword',
    description: (
      <>
        While await is very useful, it can only be used within an async function. 
        Using it outside an async function will result in a syntax error. 
        This is a common mistake, especially when trying to use it in a top-level context.
      </>
    ),
    codeSnippet: `
// Demonstrating the event loop and concurrency model

const fetchData = async () => {
  const response = await fetch('https://api.mojodojo.com/data');
  return response.json();
};

// Syntax error will occur when we try to use 'await' outside of an async function
const result = await fetchData();
    `
  },
  {
    title: 'Promises vs. Callbacks',
    description: (
      <>
        <p>
          Promises were introduced to handle async operations in a more structured way compared to callbacks. 
          Promises represent the eventual completion or failure of an async operation, allowing chaining 
          and better error handling. The introduction of async/await made handling promises even cleaner.
        </p>
      </>
    ),
    codeSnippet: `
// Using Callbacks

function fetchDataWithCallback(callback) {
  setTimeout(() => {
    callback('Data retrieved using callbacks');
  }, 1000);
};

fetchDataWithCallback((data) => {
  console.log(data);
});

// Using Promises
function fetchDataWithPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data retrieved using Promises');
    }, 1000);
  });
};

fetchDataWithPromise()
  .then((data) => {
    console.log(data);
  });
    `
  },
  {
    title: 'Error Handling',
    description: (
      <>
        Async code can be challenging to debug, especially with error handling. 
        Unhandled promises can lead to silent failures. It&#39;s crucial to handle errors properly using 
        try...catch blocks or .catch() with promises to avoid unexpected behavior.
      </>
    ),
    codeSnippet: `
// Example Demonstrating Unhandled Promise

async function fetchData() {
  const response = await fetch('https://mojodojo-api.com/data');
  const data = await response.json();
  return data;
};

// No error handling opens the door for a silent failure
fetchData(); 
    `
  },
  {
    title: 'Blocking the Event Loop',
    description: (
      <>
        <p>
          Poorly optimized async code can lead to blocking the event loop, causing the application to become unresponsive. 
          This often happens when performing heavy computations or synchronous I/O operations within an async context.
        </p>
      </>
    ),
    codeSnippet: `
// Example of Poorly Optimized Async Code

async function processHeavyTask() {
  // Simulating a heavy computation
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result;
};

// Call the poorly optimized async function
async function main() {
  console.log('Starting main function');
  await processHeavyTask(); // This blocks the event loop
  console.log('Finished main function');
};

// Application may become unresponsive during heavy computation
main();
    ` 
  },
  {
    title: 'Async Functions Return Promises',
    description: (
      <>
        <p>
          It&#39;s important to remember that async functions implicitly return promises. If you return a value from an async function,
          it will be wrapped in a resolved promise. If the code throws an error, it will be wrapped in a rejected promise.
        </p>
      </>
    ),
    codeSnippet: `
// Async function demonstrations

async function getValue() {
  return 42;
};

// Async function throwing an error
async function throwError() {
  throw new Error('An error occurred');
};

// Using the async functions
getValue().then(result => {
  console.log('Resolved:', result); // Output: Resolved: 42
});

throwError().catch(error => {
  console.error('Rejected:', error.message); // Output: Rejected: An error occurred
});
    `
  },
  {
    title: 'Memory Leaks',
    description: (
      <>
        Improperly managed async operations can lead to memory leaks.
        Forgetting to unsubscribe from event listeners or not clearing timers can keep references alive,
        preventing the garbage collector from cleaning up resources.
      </>
    ),
    codeSnippet: `
// Creating a memory leak in async operations using setTimeout
// our leakingFunction keeps incrementing a counter and logs its value
// but it also schedules a new async call using setTimeout without properly cleaning up the previous ones

function createMemoryLeak() {
  let counter = 0;

  async function leakingFunction() {
    counter++;
    console.log('Counter:', counter);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    leakingFunction();
  }

  leakingFunction();
};

// calling createMemoryLeak leads to a gradual leak, as each new call creates a new stack
createMemoryLeak();
    `  
  },
];

export default asyncData;
