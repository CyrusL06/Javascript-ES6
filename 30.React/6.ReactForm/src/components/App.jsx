import React, {useState} from "react";

function App() {

  const [name, setName] = useState("")
  const [headingText, setheadingText] = useState("")
  let value;

  function handleChanged(event)
  {
    console.log(event.target.value);
    console.log(event.target.type);
    console.log(event.target.placeholder);

    value =event.target.value; 
            setName(value);

  }

  function Pressed()
  {
        setName(value);

  }

  function handleClick()
  {
    setheadingText(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <input 
      onChange={handleChanged} 
      type="text" 
      placeholder="What's your name?"
      value={name} //Set the value set from the useState
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
