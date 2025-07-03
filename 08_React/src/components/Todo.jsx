const Todo = (props) => {
  const li = props.todo.map((e) => {
    return (
      <li className="bg-blue-500 p-5 rounded-2xl text-xl font-semibold text-white">
        {e}
      </li>
    );
  });

  return li ? null : (
    <ul className="flex flex-col gap-3.5 bg-amber-50 mt-10 w-[100%] p-3 border-amber-50 rounded-2xl overflow-auto">
      {li}
    </ul>
  );
};

export default Todo;
