import { useState } from "react";

export const App = () => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const [randomNumber, setRandomNumber] = useState(getRandomNumber());

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="text-3xl font-bold">{randomNumber}</div>
      <button
        onClick={() => setRandomNumber(getRandomNumber())}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Generate Random Number
      </button>
    </div>
  );
};
