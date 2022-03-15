import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import "./index.css";
function TodoItmes() {
  const todos = useSelector((state) => state);
  console.log("aaa", todos);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem content={todo.content} id={todo.id} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoItmes;
