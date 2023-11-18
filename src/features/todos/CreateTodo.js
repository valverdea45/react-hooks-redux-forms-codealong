import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { todoAdded } from "./todosSlice";

function CreateTodo() {
  const [text, setText] = useState("")
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.entities)

  function handleChange(event) {
    setText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(todoAdded(text))
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>add todo</label>
          <input type="text" onChange={handleChange} value={text}/>
        </p>
        <input type="submit"/>
      </form>
      <p>To Dos: {todos}</p>
    </div>
  )
}

export default CreateTodo;
