import { useContext } from "react";
import { InputContext } from "../context/context";

const Input = ({ inputText }) => {
  const { handleInputChange, userInput } = useContext(InputContext);

  return (
    <div className="mt-10">
      {inputText ? (
        <div className="w-54 mx-auto text-center text-slate-400 md:w-full">
          <span>{inputText}</span>
        </div>
      ) : null}
      <div className="w-9/12 mx-auto md:w-5/12 xl:w-3/12">
        <input
          onChange={handleInputChange}
          value={userInput}
          className="bg-slate-100 mt-3 w-full px-3 py-2 rounded-lg outline-none"
          type="text"
          placeholder="Your birth year"
        />
      </div>
    </div>
  );
};

export default Input;
