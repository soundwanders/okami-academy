"use client";

import React, { useState } from 'react';
import Navbar from '@components/nav/Navbar';
import ConceptCard from '@components/snippets/ConceptCard';
import thisData from '@constants/thisData';
import ThisTable from '@components/code/ThisTable';
import CodeEditor from '@components/code/CodeEditor';

export default function ThisKeyword() {
  const firstChallenge = `
const testCode = {
  prop: 22,
  func: function () {
    return this.prop;
  },
};
  `;

  const [tableVisible, setTableVisible] = useState(false);

  const toggleTable = () => {
    setTableVisible(!tableVisible);
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-800">
      <Navbar />
      <section className="text-slate-900 dark:text-slate-100">
        <header>
          <div className="container mx-auto px-6 lg:py-16">
            <div className="lg:w-3/4 mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-semibold mb-6">
              Little of <code>this</code>, Little of That
              </h1>
              <p className="md:px-36 text-lg mb-8 leading-loose">
                The &#39;this&#39; keyword in JavaScript is a powerful and sometimes perplexing concept.
                It refers to the object on which the current code is being executed.
                Understanding how &#39;this&#39; behaves is crucial for writing effective and maintainable code.
              </p>

              <div
                className="cursor-pointer text-lg md:text-xl text-blue-500 dark:text-blue-300 active:translate-y-px"
                onClick={toggleTable}
              >
                View the value of `this` in different contexts
              </div>
              {tableVisible && (
                <div className="mt-4 flex justify-center">
                  <ThisTable />
                </div>
              )}

              <p className="text-lg mt-4 mb-8">
                Here is a basic example that showcases the keyword <code>this</code>:
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-slate-850 text-slate-50 py-4 px-6 rounded-lg shadow-md text-left max-w-full">
                <pre className="text-sm md:text-base whitespace-pre-wrap">
                  <code>
{String.raw`const person = {
  name: 'Alice',
  introduce() {
    console.log('Hi, my name is ' + this.name);
  }
};
 
person.introduce(); // Output: Hi, my name is Alice.
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
                <code>this</code>
              </span>
            </h2>
            <ul className="list-disc py-2">
              {thisData.map((concept, index) => (
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
              <code>&#39;This&#39; Playground</code>:
            </p>

            <CodeEditor initialCode={firstChallenge}/>
          </div>
        </div>
      </section>
    </div>
  );
};
