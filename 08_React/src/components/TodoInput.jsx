import { useState } from "react";
import Todo from "./Todos";

const TodoInput = () => {
  const [todoName, setTodoName] = useState("");
  const [todo, setTodo] = useState([]);

  function getTodoValue() {
    if (!todoName?.trim()) return;
    setTodo([...todo, todoName.trim()]);
    setTodoName("");
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

export default TodoInput;
