"use client";

import React from 'react';
import Navbar from '@components/nav/Navbar';
import ConceptCard from '@components/snippets/ConceptCard';
import hoistingData from '@constants/hoistingData';
import CodeEditor from '@components/code/CodeEditor';

export default function Hoisting() {
  const firstChallenge = `
function foo() {
  // Your code here
};
  `;

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-800">
      <Navbar />
      <section className="text-slate-900 dark:text-slate-100">
        <header>
          <div className="container mx-auto px-6 lg:py-16">
            <div className="lg:w-3/4 mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-semibold mb-6">
              Chutes and Ladders: Hoisting to the Top
              </h1>
              <p className="md:px-36 text-lg mb-8 leading-loose">
                Hoisting is a fundamental concept in JavaScript that affects how variables and function declarations are processed.
                A good grasp of the concept of hoisting is essential for writing predictable and error-free code.
              </p>
              <p className="text-lg mb-8">
                Here, we can observe how variables are hoisted:
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-slate-850 text-slate-50 py-4 px-6 rounded-lg shadow-md text-left max-w-full">
                <pre className="text-sm md:text-base whitespace-pre-wrap">
                  <code>
{String.raw`console.log(name); // Output: undefined
var name = 'John';

// Function hoisting
sayHello(); // Output: Hello
function sayHello() {
  console.log('Hello');
}
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
                <code>Hoisting</code>
              </span>
            </h2>
            <ul className="list-disc py-2">
              {hoistingData.map((concept, index) => (
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
              <code>Hoisting Playground</code>:
            </p>

            <CodeEditor initialCode={firstChallenge}/>
          </div>
        </div>
      </section>
    </div>
  );
};
