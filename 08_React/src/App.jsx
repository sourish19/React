import { useState } from "react";
import Todo from "./components/Todo";

const Input = () => {
  const [todoName, setTodoName] = useState("");
  const [todo, settodo] = useState([]);

  function getTodoValue() {
    settodo([...todo, todoName?.trim()]);
    return;
  }

  function handleEvent(e) {
    setTodoName(() => e.target.value);
    return;
  }

  return (
    <div className="flex flex-col w-6/12">
      <div className="mt-10 flex justify-center">
        {" "}
        <input
          onChange={handleEvent}
          className="text-black bg-white w-80 px-4 py-2 rounded-l-2xl focus:outline-none"
          name="enter-todo"
          type="text"
          placeholder="Input Tasks..."
        />
        <button
          onClick={getTodoValue}
          className="bg-white text-black px-4 rounded-r-2xl cursor-pointer"
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>

      <Todo todo={todo} />
    </div>
  );
};

export const App = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center pt-10 h-screen bg-gray-950">
        <h2 className="text-white text-3xl font-semibold">TODO LIST</h2>
        <Input />
      </div>
    </div>
  );
};
