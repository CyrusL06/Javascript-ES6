import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";


function createCard(i){
 return <Card  
    key={i.id}
    emoji={i.emoji}
    name={i.emoji}
    meaning ={i.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1> 

      <dl className="dictionary">
       {emojipedia.map(createCard)}
      {console.log(emojipedia)} 

{/* <Card  
 
    emoji="W"
    name="W"
    meaning ="W"
  /> */}
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/>  */}
      </dl>
    </div>
  );
}

export default App;
