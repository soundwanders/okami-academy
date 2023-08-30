export const translateToReact = (inputCode) => {
  const { parse } = require('@babel/parser');
  const traverse = require('@babel/traverse');
  const generate = require('@babel/generator').default;

  const ast = parse(inputCode, { sourceType: 'module' });

  // Helper function to generate import statements
  const generateImports = () => {
    return `
      import React, { useState, useRef } from 'react';
    `;
  };

  traverse(ast, {
    FunctionDeclaration(path) {
      // Add necessary imports
      path.get('body').unshiftContainer('body', generateImports());

      // Translate the function declaration to a React functional component
      const functionName = path.node.id.name;
      const functionBody = generate(path.node.body).code;

      const reactCode = `
        const ${functionName} = () => {
          ${functionBody}
        };

        export default ${functionName};
      `;

      // Replace the function declaration with the React component
      path.replaceWithSourceString(reactCode);
    },
    VariableDeclaration(path) {
      // Translate variable declarations with useState
      const declarations = path.get('declarations');
      const stateDeclarations = declarations.filter((declaration) => {
        return declaration.node.init && declaration.node.init.type === 'CallExpression' && declaration.node.init.callee.name === 'useState';
      });

      if (stateDeclarations.length > 0) {
        stateDeclarations.forEach((stateDeclaration) => {
          const stateName = stateDeclaration.node.id.name;
          const reactStateCode = `
            const [${stateName}, set${stateName.charAt(0).toUpperCase() + stateName.slice(1)}] = useState(${stateDeclaration.node.init.arguments[0].value});
          `;
          stateDeclaration.replaceWithSourceString(reactStateCode);
        });
      }
    }
  });

  const translatedCode = generate(ast).code;
  return translatedCode;
};

// Example input code with useState
const inputCode = `
  function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
`;

const translatedReactCode = translateToReact(inputCode);
console.log(translatedReactCode);
