const Todo = ({ todo, setTodo }) => {
  // To fix the console issue use useEffect
  const deleteTodo = (index) => {
    setTodo(todo.filter((e, i) => i !== index));
  };

  const li = todo.map((e, index) => {
    return (
      <li
        key={index}
        className="flex justify-between bg-blue-500 p-5 rounded-2xl text-xl font-semibold text-white "
      >
        {e}{" "}
        <span onClick={() => deleteTodo(index)}>
          <i className="bi bi-trash cursor-pointer"></i>
        </span>
      </li>
    );
  });

  return todo.length <= 0 ? null : (
    <ul className="flex flex-col gap-3.5 bg-amber-50 mt-10 w-[100%] p-3 border-amber-50 rounded-2xl overflow-auto">
      {li}
    </ul>
  );
};

export default Todo;
