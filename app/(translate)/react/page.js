import { useState, useRef } from 'react';
import { FRAMEWORK_REACT, FRAMEWORK_VUE, FRAMEWORK_SVELTE } from '@constants';
import { translateToReact } from '@utils/translate';
import CodeEditor from '@components/code/CodeEditor';
import Navbar from '@components/nav/Navbar';

export default function ReactTranslator() {
  const [inputCode, setInputCode] = useState('');
  const [selectedFramework, setSelectedFramework] = useState(FRAMEWORK_REACT);
  const [translatedCode, setTranslatedCode] = useState('');
  
  // create a ref to track our code editor inputs
  const editorRef = useRef(null); 
  
  const handleTranslate = () => {
    if (editorRef.current) {
      const editorCode = editorRef.current.getCode();
      // Implement translation logic based on the selected framework
      if (selectedFramework === FRAMEWORK_REACT) {
        const translatedReactCode = translateToReact(editorCode);
        setTranslatedCode(translatedReactCode);
      }
      // Implement translations for other frameworks here
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-800">
      <Navbar />

      <section className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">
            Translate Your JavaScript Code
          </h1>

          {/* Code editor */}
          <CodeEditor ref={editorRef} initialCode={inputCode} />

          {/* Framework selection */}
          <div className="mt-4">
            <label className="block font-semibold mb-2">Select Framework:</label>
            <select
              className="w-full p-2 bg-slate-50 dark:bg-slate-700 rounded-md"
              value={selectedFramework}
              onChange={(e) => setSelectedFramework(e.target.value)}
            >
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="svelte">Svelte</option>
              {/* Add more framework options here */}
            </select>
          </div>

          {/* Translate button */}
          <button
            className="mt-4 bg-[#445b8d] hover:bg-[#3c507c] text-white py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out"
            onClick={handleTranslate}
          >
            Translate
          </button>

          {/* Translated code */}
          {translatedCode && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Translated Code:</h2>
              <pre className="p-4 bg-slate-50 dark:bg-slate-700 rounded-md overflow-x-auto">
                {translatedCode}
              </pre>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
