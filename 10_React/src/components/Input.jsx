import { useState } from "react";

const Input = () => {
  return (
    <div className="flex justify-center items-center p-4 gap-5">
      <input
        type="text"
        placeholder="Location..."
        className="w-6/12 bg-white py-2 pl-8 rounded-4xl focus:outline-none"
      />
      <div>
        <button className="bg-white w-9 h-9 rounded-full cursor-pointer active:scale-95">
          <i className="bi bi-search px-2 py-15"></i>
        </button>
      </div>
    </div>
  );
};

export default Input;
