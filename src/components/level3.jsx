import React, { useState } from 'react';

function Level3() {
  const [inputValue, setInputValue] = useState('');
  const [newContent, setNewContent] = useState('');
  const [showCode, setShowCode] = useState(false);

  const sanitizeInput = (input) => {
    const sanitizedInput = input
      .replace(/'/g, '&#39;')
      .replace(/"/g, '&#34;')
      .replace(/\/>/g, '&#47;&gt;')
      .replace(/src=/gi, '');
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
    <div id='Level-3'>
      <h1>Level 3 - Improper Validation</h1>
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
        <img max-height="300px" width="500px" src="/level3vcode.png"alt="Insecure Code Level-3"/>
        }
    </div>
  );
}

export default Level3;
