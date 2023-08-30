"use client";

import React from 'react';
import Navbar from '@components/nav/Navbar';
import ConceptCard from '@components/snippets/ConceptCard';
import closuresData from '@constants/closuresData';
import CodeEditor from '@components/code/CodeEditor';

export default function Closures() {
  const firstChallenge = `
var a = 10

function foo(){
    console.log(a)
}

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
                Grand Closures Central
              </h1>
              <p className="md:px-36 text-lg mb-8 leading-loose">
                A closure is a function that has access to variables from its containing lexical scope,
                even after that scope has finished executing. Closures are a powerful and often misunderstood concept in JavaScript. 
                They allow functions to &#39;remember&#39; their lexical scope even when executed outside that scope. 
                Understanding closures is crucial for writing clean and efficient code that is loved and appreciated.
              </p>
              <p className="text-lg mb-8">
                Let&#39; explore the mechanics of closures:  
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-slate-850 text-slate-50 py-4 px-6 rounded-lg shadow-md text-left max-w-full">
                <pre className="text-sm md:text-base whitespace-pre-wrap">    
                  <code>
{String.raw`function outerFunction() {
  const outerVar = 'I am from outer function';

  function innerFunction() {
    console.log(outerVar); // Accessing outerVar from the outer scope
  }

  return innerFunction;
}

const closure = outerFunction(); // closure now holds the innerFunction
closure(); // Output: "I am from the galaxy Outer Function"
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
                <code>Closures</code>
              </span>
            </h2>
            <ul className="list-disc py-2">
              {closuresData.map((concept, index) => (
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
              <code>Closures Playground</code>:
            </p>

            <CodeEditor initialCode={firstChallenge}/>
          </div>
        </div>
      </section>
    </div>
  );
};