import { useState } from "react";

const TicTacToe = () => {
  const data = new Array(9).fill(null);
  const [isCross, setIsCross] = useState(true);

  const handleClick = (id) => {
    setIsCross(!isCross);
    console.log(id);
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-4/12 h-9/12">
      <div
        id="0"
        onClick={(e) => handleClick(e.target.id)}
        className="flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-all duration-400"
      >
        {isCross ? (
          <img src="../assets/cross.png"></img>
        ) : (
          <img src="../assets/circle.png"></img>
        )}
      </div>
      <div
        id="1"
        onClick={(e) => handleClick(e.target.id)}
        className="flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-all duration-400"
      >
        {" "}
        {isCross ? (
          <img src="../assets/cross.png"></img>
        ) : (
          <img src="../assets/circle.png"></img>
        )}
      </div>
      <div
        id="2"
        onClick={(e) => handleClick(e.target.id)}
        className="flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-all duration-400"
      >
        {" "}
        {isCross ? (
          <img src="../assets/cross.png"></img>
        ) : (
          <img src="../assets/circle.png"></img>
        )}
      </div>
      <div
        id="3"
        onClick={(e) => handleClick(e.target.id)}
        className="flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-all duration-400"
      >
        {" "}
        {isCross ? (
          <img src="../assets/cross.png"></img>
        ) : (
          <img src="../assets/circle.png"></img>
        )}
      </div>
      <div
        id="4"
        onClick={(e) => handleClick(e.target.id)}
        className="flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-all duration-400"
      >
        {" "}
        {isCross ? (
          <img src="../assets/cross.png"></img>
        ) : (
          <img src="../assets/circle.png"></img>
        )}
      </div>
      <div
        id="5"
        onClick={(e) => handleClick(e.target.id)}
        className="flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-all duration-400"
      >
        {" "}
        {isCross ? (
          <img src="../assets/cross.png"></img>
        ) : (
          <img src="../assets/circle.png"></img>
        )}
      </div>
      <div
        id="6"
        onClick={(e) => handleClick(e.target.id)}
        className="flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-all duration-400"
      >
        {" "}
        {isCross ? (
          <img src="../assets/cross.png"></img>
        ) : (
          <img src="../assets/circle.png"></img>
        )}
      </div>
      <div
        id="7"
        onClick={(e) => handleClick(e.target.id)}
        className="flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-all duration-400"
      >
        {" "}
        {isCross ? (
          <img src="../assets/cross.png"></img>
        ) : (
          <img src="../assets/circle.png"></img>
        )}
      </div>
      <div
        id="8"
        onClick={(e) => handleClick(e.target.id)}
        className="flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-all duration-400"
      >
        {" "}
        {isCross ? (
          <img src="../assets/cross.png"></img>
        ) : (
          <img src="../assets/circle.png"></img>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
