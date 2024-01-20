import { useState } from 'react'

import './App.css'
import ReactMarkdown from "react-markdown";


const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);
  const[show, setShow] = useState(true);
  const handleClick=()=>{
    if(show==true){
      setShow(false);
     }
     else{
      setShow(true);
     }
  }

return (
    <>
  <div>
    <div className="boxes-container">
    <div id="first-block">
    <div id="editor-top">
    <img className="fcclogo" src='https://cdn.icon-icons.com/icons2/2389/PNG/512/freecodecamp_logo_icon_145267.png' alt="fcc logo"></img>
            <h4>Editor</h4>
              <button onClick={handleClick}></button>
    </div>
          <textarea
            name="editor"
            id="editor"
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
          ></textarea>
          </div>
      <div id="preview">
         {show && <ReactMarkdown>{markdownText}</ReactMarkdown>}
          </div>
          </div>
      </div>
    </>
  );
}

export default App
