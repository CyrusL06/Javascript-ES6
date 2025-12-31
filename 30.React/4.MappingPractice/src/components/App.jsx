import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1> 

      <dl className="dictionary">

        <Card/>
        <Card/>
        <Card/>
        <Card/> 
      </dl>
    </div>
  );
}

export default App;
