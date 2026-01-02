import React, { useState } from "react";
//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events



function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });


  function change(event){
    const {name, value} = event.target;

   setContact( pvalue => {

    return{
      ...pvalue,
      [name]: value
    }

    //  if(name === "fName")
    // {
    //   return{
    //        fName: value,
    //        lName: pvalue.lName,
    //        email: pvalue.email
    //   };
    // } else if (name === "lName")
    // {
    //   return{
    //        fName: pvalue.fName,
    //        lName: value,
    //        email: pvalue.email
    //   };
    // } else if( name === "email"){
    //   return{
    //        fName: pvalue.fName,
    //        lName: pvalue.lName,
    //        email: value
    //   };
    // }
   })
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input value={contact.fName} onChange={change} name="fName" placeholder="First Name" />
        <input value={contact.lName} onChange={change} name="lName" placeholder="Last Name" />
        <input value={contact.email} onChange={change} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
