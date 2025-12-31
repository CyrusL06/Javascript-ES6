import React from "react";
import "../src/styles.css"

import { createRoot } from "react-dom/client";


var count = 0;
var isPressed = false;

  function increase(){
    console.log("Clicked");
    count++;
    root.render(<div className="container">
			<h1>{count}</h1>
			<button onClick={increase}>+</button>
			</div>);
  }
const root = createRoot(document.getElementById("root"));
root.render(<div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
  </div>);
