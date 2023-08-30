const eventsData = [
  {
    title: 'Event Bubbling and Capturing',
    description: (
      <>
        White belt coders may have trouble fully grasping the concept of event propagation, 
        where events can travel up (bubbling) or down (capturing) the DOM tree. 
        Frameworks like React may suppress the need to develop a deep understanding of 
        things like bubbling. This can lead to unexpected behavior if event listeners are not properly 
        attached, or if propagation is not handled correctly.
      </>
    ),
    codeSnippet: `
// Event bubbling example

document.querySelector('.parent').addEventListener('click', () => {
  console.log('Parent clicked');
});

document.querySelector('.child').addEventListener('click', () => {
  console.log('Child clicked');
});    
    `
  },
  {
    title: 'Forgotten Event Removal',
    description: (
      <>
        Failing to remove event listeners when they are no longer needed can result in memory leaks. 
        This commonly occurs when dynamically creating and removing DOM elements without detaching 
        their associated event handlers.
      </>
    ),
    codeSnippet: `
// Creating memory leaks due to forgotten event removal

const elements = document.querySelectorAll('.element');
elements.forEach((element) => {
  element.addEventListener('click', () => {
    console.log('Element clicked');
  });
});

// To fix memory leaks
elements.forEach((element) => {
  element.removeEventListener('click', () => {
    console.log('Element clicked');
  });
});
    `
  },
  {
    title: 'Overusing Inline Event Handlers',
    description: (
      <>
        Beginners often embed event handling logic directly within HTML attributes like onclick or onmouseover, 
        leading to tightly coupled and hard-to-maintain code. Adopting the practice of 
        separating HTML and JavaScript through event listeners can promote cleaner and more organized code.
      </>
    ),
    codeSnippet: `
// Bad practice: Inline event handler

// HTML
<button onclick="handleClick()">Click me</button>

// JavaScript
// Better practice: Adding event listener using JavaScript
const buttonElement = document.getElementById('myButton');

buttonElement.addEventListener('click', () => {
  alert('Button clicked!');
});
    `
  },
  {
    title: 'Multiple Attachments on Element',
    description: (
      <>
        Attaching multiple event listeners to the same element without proper cleanup can lead to 
        redundant event handling or unintended side effects. Careful management of event attachment
        and detachment is necessary.
      </>
    ),
    codeSnippet: `
// Multiple event listeners on the same element

document.querySelector('.button').addEventListener('click', () => {
  console.log('Listener 1');
});

document.querySelector('.button').addEventListener('click', () => {
  console.log('Listener 2');
});    
    `
  },
  {
    title: 'Misusing Event Delegation',
    description: (
      <>
        Not understanding the benefits of event delegation can result in attaching unnecessary event 
        listeners to numerous elements. Using event delegation—where a single parent element listens 
        for events on behalf of its children—can improve performance and simplify event management.
      </>
    ),
    codeSnippet: `
// Bad practice: Attaching event listeners to each button

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('Button clicked');
  });
});

// Better: Using event delegation
document.getElementById('container').addEventListener('click', (event) => {
  if (event.target.classList.contains('button')) {
    console.log('Button clicked');
  }
});
    `
  },
  {
    title: 'Inaccurate Event Context Usage',
    description: (
      <>
        Event handlers often receive an event object as an argument. Beginners might 
        incorrectly assume that this refers to the element that triggered the event. 
        In reality, this often points to a different context, leading to confusion.
      </>
    ),
    codeSnippet: `
// Incorrect usage of 'this' in relation to event listeners

document.querySelector('.button').addEventListener('click', function () {
  console.log('Clicked on', this); // Refers to the button
});

// Use arrow functions or explicitly bind 'this' for accurate context
document.querySelector('.button').addEventListener('click', () => {
  console.log('Arrow function clicked on', this); // Refers to the global 'window' object
});

document.querySelector('.button').addEventListener('click', function () {
  console.log('Using bind clicked on', this); // Refers to the button
}.bind(this)); // Explicitly bind 'this' to the current context
    `
  },
  {
    title: 'Asynchronous Event Handling',
    description: (
      <>
        Handling asynchronous actions within event handlers can be challenging. 
        For instance, if an event handler triggers an async function and you want to update the
        DOM based on its result, you must ensure that the event handler doesn&#39;t finish execution
        before the async function is complete.
      </>
    ),
    codeSnippet: `
// Handling asynchronous actions within event handlers

document.querySelector('.button').addEventListener('click', async () => {
  console.log('Button clicked');
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
});
    `
  },
  {
    title: 'Order of Event Execution',
    description: (
      <>
        The order in which events are attached and executed can impact the behavior of your application. 
        If you have multiple event listeners on the same element and their execution order matters, 
        you need to ensure that the listeners are added and removed correctly.
      </>
    ),
    codeSnippet: `
// Order of event execution

const button = document.querySelector('.button');

button.addEventListener('click', () => {
  console.log('Listener 1');
});

button.addEventListener('click', () => {
  console.log('Listener 2');
});

// To control the order of execution, remove and re-add listeners
button.removeEventListener('click', () => {
  console.log('Listener 1');
});
button.removeEventListener('click', () => {
  console.log('Listener 2');
});
button.addEventListener('click', () => {
  console.log('Listener 2');
});
button.addEventListener('click', () => {
  console.log('Listener 1');
});
    `
  },
];

export default eventsData;
