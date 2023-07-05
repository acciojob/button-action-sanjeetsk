import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  const[isVisible, setIsVissible] = useState(false);

  function handleClick(){
    setIsVissible(true);
  }

  return (
    <div className="App" id="main">
      <button id="click" onClick={handleClick}>ClickMe</button>
      <p id="para" className={isVisible ? 'show' : 'hide'}>
      Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
    </div>
  );
}

export default App;
