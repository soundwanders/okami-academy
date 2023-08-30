"use client";

import Navbar from '@components/nav/Navbar';
import ConceptCard from '@components/snippets/ConceptCard';
import asyncData from '@constants/asyncData';
import CodeEditor from '@components/code/CodeEditor';

export default function Async() {
  const firstChallenge = `
const foo = async (event, callback) => {
  // do something with event
  // return a response with callback
}
  `;
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-800">
      <Navbar />
      <section className="text-slate-900 dark:text-slate-100">
        <header>
          <div className="container mx-auto px-6 lg:py-16">
            <div className="lg:w-3/4 mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-semibold mb-6">
                Examining Asynchronous Functions
              </h1>
              <p className="md:px-36 text-lg mb-8 leading-loose">
                Asynchronous programming allows JavaScript to perform tasks without blocking the main thread of execution. This is crucial for handling operations like network requests and I/O-bound tasks.
              </p>
              <p className="text-lg mb-8">
                A simple asynchronous function looks something like this:
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-slate-850 text-slate-50 py-4 px-6 rounded-lg shadow-md text-left max-w-full">
                <pre className="text-sm md:text-base whitespace-pre-wrap">
                  <code>
{/*
 poor formatting is due to the same indentation being applied both in the code editor 
  and on the web page because in <code> elements the formatting is preserved as is
*/}
{String.raw`async function fetchData() {
  try {
    const response = await fetch('https://api.mojodojo.com/databank');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </header>
      </section>

      {/* List of information regarding  mistakes in async programming*/}
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
              {asyncData.map((concept, index) => (
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
              <code>Asynchronous Playground</code>:
            </p>

            <CodeEditor initialCode={firstChallenge}/>
          </div>
        </div>
      </section>
    </div>
  );
};