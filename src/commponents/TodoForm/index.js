import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoList } from "../../actions";
import todoList from "../../reducers/todoList";
import { store } from "../../store";

function TodoForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    dispatch(addTodoList({ id: Math.random(), content: value }));
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label></label>
      <input
        type="text"
        value={value}
        id="todoInput"
        name="todoInput"
        onChange={handleChange}
      ></input>
      <input type="submit" value="submit"></input>
    </form>
  );
}

export default TodoForm;
