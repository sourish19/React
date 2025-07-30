import Heading from "../components/Heading";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Input from "../components/Input";
import { InputContextProvider } from "../context/context";

const VerifyEmail = () => {
  return (
    <div className="h-screen bg-[#0A2A4A] flex flex-col">
      <Logo />
      <Heading heading={"Let's Get Started"} />
      <InputContextProvider>
        <Input />
        <Button />
      </InputContextProvider>
    </div>
  );
};

export default VerifyEmail;
