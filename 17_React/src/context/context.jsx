import { createContext, useState } from "react";

const InputContext = createContext();

const InputContextProvider = ({ children }) => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <InputContext.Provider
      value={{ handleInputChange, userInput, setUserInput }}
    >
      {children}
    </InputContext.Provider>
  );
};

export { InputContextProvider, InputContext };
