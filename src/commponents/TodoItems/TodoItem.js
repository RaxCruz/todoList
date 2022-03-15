import React from "react";
import { deleteTodoList } from "../../actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

function TodoItem(props) {
  const [update, setUpdate] = useState(false);
  const [value, setValue] = useState(props.content);
  const [isComplete, setIsComplete] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (event) => {
    dispatch(deleteTodoList(props.id));
  };
  const handleUpdate = () => {
    setUpdate(!update);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleComplete = (event) => {
    setIsComplete(!isComplete);
  };
  return (
    <div
      className="todo-item-wrap"
      style={{
        backgroundColor: isComplete === true ? "green" : "white",
      }}
    >
      {update === true ? (
        <input value={value} onChange={handleChange}></input>
      ) : (
        <h1>{props.content}</h1>
      )}
      <button onClick={handleDelete}>delete</button>
      <button onClick={handleUpdate}>update</button>
      <input type="checkbox" onChange={handleComplete} />
    </div>
  );
}

export default TodoItem;
