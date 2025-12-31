import React, {useState} from "react";
import { createRoot } from "react-dom/client";

var count = 0;

function App() {

    
             //Value //Function
      const [count, setCount] = useState(0);

    function increase(){
     setCount( count + 1)
    }

    function decrease(){
      setCount(count -1)
    }

  return <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>

  </div>;
}

export default App;
