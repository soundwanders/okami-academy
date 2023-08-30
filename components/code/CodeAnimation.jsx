import React from 'react';

const CodeAnimation = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center mt-8 overflow-hidden">
      <div className="code-editor w-3/4 md:w-1/3 h-1/4 bg-slate-900 dark:bg-gray-800 rounded-lg p-4 w-80 shadow-lg">
        <pre>
          <code className="text-white">
            function fibonacci(n) 
            {' '}
            <br/>
            <span className="typed-code animate-typing animate-duration-5s">
              &nbsp; if (n &lt;= 1) &#123; 
              <br/>
              &nbsp; return n; 
              <br/>
              &#125;
              <br/>
            </span>
            {' '}
            <br/> 
            <span className="typed-code animate-typing animate-duration-5s animate-delay-5s animate-iteration-count-infinite">
              return fibonacci(n - 1) + fibonacci(n - 2);
            </span>
          </code>
        </pre>
      </div>
    </div>
  );
};


export default CodeAnimation;
