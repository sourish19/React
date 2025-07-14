const Accordian = ({ title, content, index, openIndex, onAccordionClick }) => {
  const isActive = openIndex === index;

  return (
    <div key={index} className="w-[90%] bg-amber-950 mt-2 mb-3">
      <div className="flex justify-between p-5">
        {" "}
        <div>{title}</div>
        <button
          onClick={() => {
            onAccordionClick(index);
          }}
          className="bg-gray-950 text-neutral-50 px-3 py-2 rounded-2xl cursor-pointer active:scale-95 transition-all duration-300"
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
  );
};

export default Accordian;
