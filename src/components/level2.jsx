import React, { useState } from 'react';

function Level2() {
  const [inputValue, setInputValue] = useState('');
  const [newContent, setNewContent] = useState('');
  const [showCode, setShowCode] = useState(false);

  const sanitizeInput = (input) => {
    let firstBracket = true;
    const sanitizedInput = input.replace(/<|>/g, (match) => {
      if (firstBracket) {
        firstBracket = false;
        return match === '<' ? '&lt;' : '&gt;';
      }
      return match;
    });
    return sanitizedInput;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sanitizedInput = sanitizeInput(inputValue);
    setNewContent(sanitizedInput);
  };

  const handleShowCode = () => {
    setShowCode((prevShowCode) => !prevShowCode);
  };
 
  return (
    <div id='Level-2'>
      <h1>Level 2 - HTML encoding poorly applied</h1>
      <br />
      <h1 id="new" dangerouslySetInnerHTML={{ __html: newContent ? `Hello, ${newContent}` : newContent }}></h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name: &nbsp;
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        &nbsp;
        <button type="submit">Submit</button>
      </form>
      <br />
      <button onClick={handleShowCode}>Show Vulnerable Code</button>
      <br />
      <br />
      {
      showCode && 
        <img max-height="400px" width="800px" src="/level2vcode.png"alt="Insecure Code Level-2"/>
        }
    </div>
  );
}

export default Level2;
