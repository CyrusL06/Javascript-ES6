import React, { useState } from "react";

function App() {

  //Set the two states:
  const [FNAME, SETFNAME] = useState("");
  const [LNAME, SETLNAME] = useState("");

  function fChanged()
  {
    SETFNAME(event.target.value);
  }

   function LChanged()
  {
    SETLNAME(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {FNAME} {LNAME}</h1>
      <form>
        <input onChange={fChanged} name="fName" placeholder="First Name" value={FNAME} />
        <input onChange={LChanged} name="lName" placeholder="Last Name" value={LNAME}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
