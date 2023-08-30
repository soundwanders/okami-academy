"use client";

import React from 'react';
import Navbar from '@components/nav/Navbar';
import ConceptCard from '@components/snippets/ConceptCard';
import eventsData from '@constants/eventsData';
import CodeEditor from '@components/code/CodeEditor';

export default function Events() {
  const firstChallenge = `
var a = 10

function foo(){
  console.log(a)
};

foo();
  `;
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-800">
      <Navbar />
      <section className="text-slate-900 dark:text-slate-100">
        <header>
          <div className="container mx-auto px-6 lg:py-16">
            <div className="lg:w-3/4 mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-semibold mb-6">
                Breaking Down Events in JavaScript
              </h1>
              <p className="md:px-36 text-lg mb-8 leading-loose">
                Events are an essential part of interactive web development.
                JavaScript is single-threaded, meaning it can only execute one piece of code at a time. 
                The event loop helps manage async tasks, allowing non-blocking execution by delegating tasks
                to the browser or Node.js runtime. They also allow you to respond to user actions and build 
                dynamic user interfaces.
              </p>
              <p className="text-lg mb-8">
                Demonstrating attaching an event listener to our lovely button:
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-slate-850 text-slate-50 py-4 px-6 rounded-lg shadow-md text-left max-w-full">
                <pre className="text-sm md:text-base whitespace-pre-wrap">
                  <code>
{String.raw`document.getElementById('megaButton').addEventListener('click', () => {
  console.log('Button clicked');
});

// HTML
// Our event will fire when we click on the button with the id 'megaButton'.
<button id="megaButton">Click me</button>
`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </header>
      </section>

      <section className="bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100">
        <div className="container mx-auto px-4 py-16">
          <div className="lg:w-3/4 mx-auto">
            <h2 className="text-2xl md:text-4xl font-semibold mb-6">
              Basic Usage of&nbsp;
              <span className="border-b-4 border-green-400">
                <code>Events</code>
              </span>
            </h2>
            <ul className="list-disc py-2">
              {eventsData.map((concept, index) => (
                <ConceptCard key={index} {...concept} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="text-slate-900 dark:text-slate-100">
        <div className="container mx-auto px-4 py-16">
          <div className="lg:w-3/4 mx-auto">
            <h2 className="text-2xl md:text-4xl font-semibold mb-6">
              Practice with Interactive Code Editor
            </h2>
            <p className="text-lg mb-6">
              <code>Events Playground</code>:
            </p>

            <CodeEditor initialCode={firstChallenge}/>
          </div>
        </div>
      </section>
    </div>
  );
};
