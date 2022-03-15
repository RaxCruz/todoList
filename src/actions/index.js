export const addTodoList = (todo) => {
  return {
    type: "ADD_TODO_LIST",
    payload: todo,
  };
};
export const deleteTodoList = (id) => {
  return {
    type: "DELETE_TODO_LIST",
    payload: id,
  };
};
