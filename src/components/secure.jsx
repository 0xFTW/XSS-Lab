import React, { useState } from 'react';
import DOMPurify from 'dompurify';

function Secure() {
  const [inputValue, setInputValue] = useState('');
  const [newContent, setNewContent] = useState('');
  const [showCode, setShowCode] = useState(false);

  const sanitizeInput = (input) => {
    const sanitizedInput = DOMPurify.sanitize(input);
    return sanitizedInput;
  };

  const encodeOutput = (content) => {
    const encodedContent = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return encodedContent;
  };

  const validateInput = (input) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sanitizedInput = sanitizeInput(inputValue);
    const isValidInput = validateInput(sanitizedInput);
    if (isValidInput) {
      const encodedInput = encodeOutput(sanitizedInput);
      setNewContent(encodedInput);
    } else {
      alert('Invalid input');
    }
  };

  const handleShowCode = () => {
    setShowCode((prevShowCode) => !prevShowCode);
  };

  return (
    <div id='Secure'>
      <h1>Secure Version</h1>
      <br />
      {newContent && <h1 id="new">Hello, {newContent}</h1>}
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
      <button onClick={handleShowCode}>Show Secure Code</button>
      <br />
      <br />
      {
      showCode && 
        <img max-height="400px" width="1000px" src="/Secure.png"alt="Secure Code"/>
        }
    </div>
  );
}

export default Secure;
