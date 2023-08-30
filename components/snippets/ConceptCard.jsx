import React, { useState } from 'react';

const ConceptCard = ({ title, description, codeSnippet }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="text-blue-600 dark:text-blue-300 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <strong>{title}</strong>
      </button>
      {expanded && (
        <div className="bg-slate-850 text-slate-50 px-4 py-2 rounded-lg shadow-md text-left max-w-full">
          <pre className="text-sm md:text-base whitespace-pre-wrap">
            <code>{codeSnippet}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default ConceptCard;
