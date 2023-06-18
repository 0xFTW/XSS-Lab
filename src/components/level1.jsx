import React, { useState } from "react";

function Level1() {
  const [inputValue, setInputValue] = useState("");
  const [newContent, setNewContent] = useState("");
  const [showCode, setShowCode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewContent(inputValue);
  };

  const sanitizeInput = (value) => {
    const htmlTags = ['a','abbr','acronym','address','applet','area','article','aside','audio','b','base','basefont','bdi','bdo','bgsound','big','blink','blockquote','body','br','button','canvas','caption','center','cite','code','col','colgroup','data','datalist','dd','del','details','dfn','dialog','dir','div','dl','dt','element','em','embed','fieldset','figcaption','figure','font','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','i','iframe','image','img','input','ins','isindex','kbd','keygen','label','legend','li','link','listing','main','map','mark','marquee','menu','menuitem','meta','meter','nav','nobr','noframes','noscript','object','ol','optgroup','option','output','p','param','picture','plaintext','pre','progress','q','rp','rt','ruby','s','samp','script','section','select','shadow','small','source','spacer','span','strike','strong','style','sub','summary','sup','table','tbody','td','template','textarea','tfoot','th','thead','time','title','tr','track','tt','u','ul','var','video','wbr','xmp'];
    const sanitizedValue = value.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, (tag) => {
      const tagName = tag.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/i, "$1");
      if (htmlTags.includes(tagName)) {
        return "";
      }
      return tag;
    });
    return sanitizedValue;
  };

  const handleInputChange = (e) => {
    const sanitizedValue = sanitizeInput(e.target.value);
    setInputValue(sanitizedValue);
  };

  const handleShowCode = () => {
    setShowCode((prevShowCode) => !prevShowCode);
  };
  

  return (
    <div id="Level-1">
      <h1>Level 1 - Default HTML tags blacklisted</h1>
      <br />
      <h1 id="new" dangerouslySetInnerHTML={{ __html: newContent ? `Hello, ${newContent}` : newContent }}></h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:&nbsp;
          <input type="text" value={inputValue} onChange={handleInputChange} />
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
        <img max-height="400px" width="1800px" src="/level1vcode.png"alt="Insecure Code Level-1"/>
        }
    </div>
  );
}

export default Level1;
