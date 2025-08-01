import Heading from "../components/Heading";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Input from "../components/Input";
import { InputContextProvider } from "../context/context";

const VerifyAge = () => {
  return (
    <div className="h-screen bg-[#0A2A4A] flex flex-col">
      <Logo />
      <Heading heading={"Verify Your Age"} />
      <InputContextProvider>
        <Input
          inputText={
            "Please confirm your birth year. This data will be stored."
          }
        />
        <Button />
      </InputContextProvider>
    </div>
  );
};

export default VerifyAge;
