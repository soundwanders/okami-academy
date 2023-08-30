import React from 'react';

const ThisTable = () => {
  return (
    <table className="border-collapse border border-gray-500">
      <thead>
        <tr className="bg-gray-200 dark:bg-slate-700">
          <th className="border border-gray-500 px-4 py-2">Context</th>
          <th className="border border-gray-500 px-4 py-2">Value of `this`</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-500 px-4 py-2">In an object method</td>
          <td className="border border-gray-500 px-4 py-2">Refers to the object</td>
        </tr>
        <tr>
          <td className="border border-gray-500 px-4 py-2">Alone</td>
          <td className="border border-gray-500 px-4 py-2">Refers to the global object (window in browsers)</td>
        </tr>
        <tr>
          <td className="border border-gray-500 px-4 py-2">In a function</td>
          <td className="border border-gray-500 px-4 py-2">Refers to the global object (window in browsers)</td>
        </tr>
        <tr>
          <td className="border border-gray-500 px-4 py-2">In a function (strict mode)</td>
          <td className="border border-gray-500 px-4 py-2">Is undefined</td>
        </tr>
        <tr>
          <td className="border border-gray-500 px-4 py-2">In an event handler</td>
          <td className="border border-gray-500 px-4 py-2">Refers to the element that received the event</td>
        </tr>
        <tr>
          <td className="border border-gray-500 px-4 py-2">Using call(), apply(), or bind()</td>
          <td className="border border-gray-500 px-4 py-2">Can be explicitly set to any object</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ThisTable;
