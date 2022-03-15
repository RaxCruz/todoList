const initialState = [
  { id: 0, content: "Do dishes" },
  { id: 1, content: "Do dishes" },
  { id: 2, content: "Do dishes" },
];

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO_LIST":
      return [...state, action.payload];
    case "DELETE_TODO_LIST":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todoList;
