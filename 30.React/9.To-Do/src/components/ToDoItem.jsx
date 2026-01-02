import React, { useState } from 'react'

const ToDoItem = (props) => {

  const [isDone, setText] = useState(false);


  function changed(event){
      setText(prevValue => {
        return !prevValue
      })
  }

  return (
    <div onClick={changed}>
       <li style={{textDecoration: isDone ?"line-through" : null}} >{props.text}</li>
    </div>
  )
}

export default ToDoItem