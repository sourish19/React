import { useContext } from "react";
import { InputContext } from "../context/context";

const Button = () => {
  const { userInput } = useContext(InputContext);

  return (
    <div
      className={`mt-12 w-9/12 cursor-pointer rounded-xl mx-auto text-center ${
        userInput ? "bg-teal-300" : "bg-slate-600"
      } text-white text-lg active:scale-95 md:w-5/12 xl:w-3/12`}
    >
      <p className="py-1 text-shadow-md">Continue</p>
    </div>
  );
};

export default Button;
