import React, { useState } from "react";

function App() {

  //Set the two states:
  // const [FNAME, SETFNAME] = useState("");
  // const [LNAME, SETLNAME] = useState("");

  const [fullName, setFullName] = useState({
    FNAME: "",
    LNAME: ""
  })

  // function fChanged()
  // {
  //   SETFNAME(event.target.value);
  // }

  //  function LChanged()
  // {
  //   SETLNAME(event.target.value);
  // }

  function Changed(event){
    // const inputName = event.target.name
    // const inputValue = event.target.value;

    //Object destructuring...
    const { value, name} = event.target;

    setFullName((prevValue)=>{
      if(inputName === "fName")
      {
        return {
          FNAME: value,
          LNAME: prevValue.LNAME
        }
      } else if(inputName === "lName")
      {
        return {
          FNAME: prevValue.FNAME,
          LNAME: inputValue
        }
      }
    })

  }

  return (
    <div className="container">
      <h1>Hello {fullName.FNAME} {fullName.LNAME}</h1>
      <form>
        <input onChange={Changed} name="fName" placeholder="First Name" value={fullName.FNAME} />
        <input onChange={Changed} name="lName" placeholder="Last Name" value={fullName.LNAME}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
