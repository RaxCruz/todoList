import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./views/TodoList";
import TodoItems from "./commponents/TodoItems";

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoItems />
    </div>
  );
}

export default App;
