import { useState } from "react";
import Weather from "./Weather";

const Input = () => {
  const [tempVal, setTempVal] = useState("");
  const [search, setSearch] = useState("");

  const handleSearchInput = (event) => {
    setTempVal(event?.target.value);
    return;
  };

  const handleSearchBttn = () => {
    setSearch(tempVal.trim() ? tempVal.trim() : null);
    setTempVal("");
    return;
  };

  return (
    <div>
      <div className="flex justify-center items-center p-4 gap-5">
        <input
          type="text"
          onChange={(e) => {
            handleSearchInput(e);
          }}
          value={tempVal}
          placeholder="Location..."
          className="w-6/12 bg-white py-2 pl-8 rounded-4xl focus:outline-none"
        />
        <div>
          <button
            onClick={() => {
              handleSearchBttn();
            }}
            className="bg-white w-9 h-9 rounded-full cursor-pointer active:scale-95"
          >
            <i className="bi bi-search px-2 py-15"></i>
          </button>
        </div>
      </div>
      <Weather search={search} />
    </div>
  );
};

export default Input;
