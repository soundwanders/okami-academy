import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { langs } from '@uiw/codemirror-extensions-langs';

const CodeEditor = ({ initialCode }) => {
  const [code, setCode] = useState(initialCode);

  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleRunClick = () => {
    try {
      // Execute the user's code
      const result = eval(code);
      setOutput(`Result: ${result}`);
      setError('');
    } catch (err) {
      setError(`Error: ${err.message}`);
      setOutput('');
    }
  };

  return (
    <div className="code-editor">
      <CodeMirror
        value={code}
        theme={dracula}
        extensions={[langs.javascript()]}
        basicSetup={{
          foldGutter: false,
          dropCursor: false,
          allowMultipleSelections: false,
          indentOnInput: false,
        }}
        options={{
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />

      <button className="run-button" onClick={handleRunClick}>
        Run
      </button>

      <div className="output">
        {error && <div className="error">{error}</div>}
        {output && <div className="result">{output}</div>}
      </div>
    </div>
  );
};

export default CodeEditor;
