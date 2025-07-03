const Todo = ({ todo, setTodo }) => {
  // To fix the console issue use useEffect
  const deleteTodo = (propIndex) => {
    setTodo(todo.filter((e, index) => index !== propIndex));
  };

  const li = todo.map((e, index) => {
    return (
      <li key={index} className="todo-item">
        {e}
        <span onClick={() => deleteTodo(index)}>
          <i className="bi bi-trash cursor-pointer"></i>
        </span>
      </li>
    );
  });

  return todo.length <= 0 ? null : (
    <ul className="todo-items-container">{li}</ul>
  );
};

export default Todo;
