import React from "react";
import { createRoot } from "react-dom/client";

var count = 0;
  function increase(){
    console.log("Clicked");
    count++;

  }
function App() {
  return <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
  </div>;
}

export default App;
