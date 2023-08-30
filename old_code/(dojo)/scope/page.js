"use client";

import React from 'react';
import Navbar from '@components/nav/Navbar';
import ConceptCard from '@components/snippets/ConceptCard';
import scopeData from '@constants/scopeData';
import CodeEditor from '@components/code/CodeEditor';

export default function Scope() {
  const firstChallenge = `
function myFunction() {
  let carName = "Volvo";
}

// can code here use carName?
`;

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-800">
      <Navbar />
      <section className="text-slate-900 dark:text-slate-100">
        <header>
          <div className="container mx-auto px-6 lg:py-16">
            <div className="lg:w-3/4 mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-semibold mb-6">
                Exploring Scope in JavaScript
              </h1>
              <p className="md:px-36 text-lg mb-8 leading-loose">
                JavaScript scope defines the accessibility and lifetime of variables.
                Getting a handle on how scoping works in JavaScript is crucial for preventing unintended 
                variable collisions and managing variable visibility. Variables declared 
                using &#39;var&#39; have function scope and can lead to frustrating results due to unexpected behavior.
      
              </p>
              <p className="text-lg mb-8">
                Let&#39;s take a look at a basic illustration of scope:
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-slate-850 text-slate-50 py-4 px-6 rounded-lg shadow-md text-left max-w-full">
                <pre className="text-sm md:text-base whitespace-pre-wrap">
                  <code>
{String.raw`function outer() {
  const outerVar = 'I am outside';

  function inner() {
    const innerVar = 'I am inside';
    console.log(innerVar);
    console.log(outerVar); // Accessing outer variable
  }

  inner(); // Output: I am inside
}

outer(); // Output: I am outside
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
                <code>Scope</code>
              </span>
            </h2>
            <ul className="list-disc py-2">
              {scopeData.map((concept, index) => (
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
              <code>Scope Playground</code>:
            </p>

            <CodeEditor initialCode={firstChallenge}/>
          </div>
        </div>
      </section>
    </div>
  );
};

