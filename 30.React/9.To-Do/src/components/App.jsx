import React, { useState } from "react";
//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
import ToDoItem from "./ToDoItem";


function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  

  function onChangeed( event)
  {
    // const {name, value} = event.target;
    const newValue = event.target.value
    setInputText(newValue);
  }

  function addItem(){
    setTodos(prevValue => {
        return [...prevValue, inputText]
    })
    setInputText("");

  }

  function deleteItem(){
    setItems(prevsItem => {

    })
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={onChangeed} value={inputText} placeholder="Things to do" type="text" />
        <button onClick={addItem} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>  
                              {/* avises un not to use index */}
                              {/* {UUID} */}
       { todos.map((todoItem, index) => {
          return <ToDoItem 
                key={index}
                text = {todoItem}
                onCheck={deleteItem}/>
       })}
      </ul>
      </div>
    </div>
  );
}

export default App;
