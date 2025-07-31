const Button = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="shrink-0 cursor-pointer rounded-xl bg-blue-700 px-4 py-3 text-white transition-all duration-200 text-shadow-2xs hover:bg-blue-800"
    >
      QR Code
    </button>
  );
};

export default Button;
