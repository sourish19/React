import { useState } from "react";
import Todo from "./components/Todos";

const Input = () => {
  const [todoName, setTodoName] = useState("");
  const [todo, setTodo] = useState([]);

  function getTodoValue() {
    if (!todoName?.trim()) return;
    setTodo([...todo, todoName.trim()]);
    setTodoName(""); // Clear Input field
    return;
  }

  function handleEvent(e) {
    setTodoName(() => e.target.value);
    return;
  }

  return (
    <div className="todo-main-container">
      <div className="input-button-container">
        <input
          onChange={handleEvent}
          className="todo-input"
          name="enter-todo"
          type="text"
          value={todoName}
          placeholder="Input Tasks..."
        />
        <button onClick={getTodoValue} className="todo-add-button">
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>

      <Todo todo={todo} setTodo={setTodo} />
    </div>
  );
};

export const App = () => {
  return (
    <div className="body-container">
      <div className="main-container">
        <h2 className="text-white text-3xl font-semibold">TODO LIST</h2>
        <Input />
      </div>
    </div>
  );
};
