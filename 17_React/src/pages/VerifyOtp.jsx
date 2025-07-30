import Heading from "../components/Heading";
import Logo from "../components/Logo";
import Otp from "../components/Otp";
import { InputContextProvider } from "../context/context";
import OtpText from "../components/OtpText";

const VerifyOtp = () => {
  return (
    <div className="h-screen bg-[#0A2A4A] flex flex-col">
      <Logo />
      <Heading heading={"Check Your Email For A Code"} />
      <InputContextProvider>
        <OtpText
          text={"Please enter the verification code sent to your repo"}
        />
        <Otp number={5} />
      </InputContextProvider>
    </div>
  );
};

export default VerifyOtp;
