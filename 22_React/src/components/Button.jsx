const Button = ({ handleClick, from, to }) => {
  return (
    <div className="w-full px-8 py-3">
      <button
        onClick={handleClick}
        className="w-full bg-blue-800 py-2 text-neutral-50 rounded hover:cursor-pointer"
      >
        Convert {from} to {to}
      </button>
    </div>
  );
};

export default Button;
