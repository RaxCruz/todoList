import { createStore, applyMiddleware } from "redux";
import todoList from "../reducers/todoList";
import logger from "redux-logger";

export const store = createStore(
  todoList,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
