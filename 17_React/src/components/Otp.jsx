import { useRef, useState } from "react";

const OtpInput = ({ key, handleOtpChange, reference, handleKeyDown }) => {
  return (
    <input
      key={key}
      ref={reference}
      onChange={handleOtpChange}
      onKeyDown={handleKeyDown}
      maxLength={1}
      className="w-10 h-12 bg-slate-600 rounded-2xl text-center text-white outline-none text-lg "
      type="text"
    />
  );
};
const Otp = ({ number = 5 }) => {
  const refArr = useRef(Array(number).fill(""));
  const [inputDone, setInputDone] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      if (inputDone === 0) return;

      const currentRef = refArr.current[inputDone];
      const prevRef = refArr.current[inputDone - 1];

      if (currentRef.value === "") {
        prevRef.value = "";
        prevRef.focus();
        setInputDone(inputDone - 1);
      } else {
        currentRef.value = "";
      }
    }
  };

  const handleOtpChange = (e) => {
    if (
      e.target.value.charCodeAt(0) >= 48 &&
      e.target.value.charCodeAt(0) <= 57
    ) {
      if (inputDone === refArr.current.length - 1) {
        refArr.current[inputDone].focus();
        return;
      }
      if (inputDone < refArr.current.length) {
        refArr.current[inputDone + 1].focus();
        setInputDone(inputDone + 1);
      }
      return;
    } else {
      e.target.value = "";
      return;
    }
  };

  return (
    <div className="flex gap-2 w-9/12 mx-auto mt-5">
      {refArr.current.map((item, index) => {
        return (
          <OtpInput
            key={index}
            reference={(el) => (refArr.current[index] = el)}
            handleOtpChange={handleOtpChange}
            handleKeyDown={handleKeyDown}
          />
        );
      })}
    </div>
  );
};

export default Otp;
