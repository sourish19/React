import { useState } from "react";

const Accordian = () => {
  const [isActive, setIsActive] = useState(false);

  const handlAccordian = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="w-[90%] bg-amber-950 mt-5">
        <div className="text-right p-3">
          {" "}
          <button
            onClick={handlAccordian}
            className="bg-gray-950 text-neutral-50 px-3 py-2 rounded-2xl cursor-pointer active:scale-95"
          >
            +
          </button>
        </div>
        <div
          className={`${
            isActive ? "h-20" : "h-0"
          } overflow-hidden transition-all duration-300`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam
          incidunt, quidem esse quam voluptas omnis consequuntur, earum quisquam
          distinctio placeat, animi ad quas voluptatem nobis consequatur
          deserunt saepe facere!
        </div>
      </div>
    </>
  );
};

export default Accordian;
