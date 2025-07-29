import Heading from "../components/Heading";
import Button from "../components/Button";
import Input from "../components/Input";
import {InputContextProvider} from "../context/context";

const VerifyAge = () => {
  return (
    <div className="h-screen bg-[#0A2A4A] flex flex-col">
      <Heading />
      <InputContextProvider>
        <Input />
        <Button />
      </InputContextProvider>
    </div>
  );
};

export default VerifyAge;
