import { useState } from "react";

const Accordian = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handlAccordian = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="w-[90%] bg-amber-950 mt-2 mb-3">
        <div className="flex justify-between p-5">
          {" "}
          <div>{title}</div>
          <button
            onClick={handlAccordian}
            className="bg-gray-950 text-neutral-50 px-3 py-2 rounded-2xl cursor-pointer active:scale-95"
          >
            {isActive ? "-" : "+"}
          </button>
        </div>
        <div
          className={`${
            isActive ? "h-30" : "h-0"
          } overflow-hidden transition-all duration-300 px-2`}
        >
          {content}
        </div>
      </div>
    </>
  );
};

export default Accordian;
