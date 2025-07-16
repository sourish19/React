import { useState } from "react";
import crossImg from "../assets/cross.png";
import circleImg from "../assets/circle.png";

const data = new Array(9).fill(null);
const TicTacToe = () => {
  const [isCross, setIsCross] = useState(true);

  const checkWinner = () => {
    console.log(data[0] == data[1]);
    if (data[0] == data[1] && data[0] == data[2] && data[1] == data[2]) {
      console.log(`${data[0]} is winner`);
    } else if (data[3] == data[4] && data[4] == data[5] && data[3] == data[5]) {
      console.log(`${data[3]} is winner`);
    } else {
      console.log("Welcome");
    }
  };

  const handleClick = (ele) => {
    if (isCross) {
      ele.innerHTML = `<div class="h-15" ><img src="${crossImg}" alt="" class="h-full"/></div> `;
      data[ele.id] = "x";
    } else {
      ele.innerHTML = `<div class="h-15" ><img src="${circleImg}" alt="" class="h-full"/></div> `;
      data[ele.id] = "o";
    }
    console.log(data);

    setIsCross(!isCross);
    checkWinner();
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-[35%] h-[75%]">
      <div
        id="0"
        onClick={(e) => handleClick(e.currentTarget)}
        className="h-40 flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-transform duration-400 transform"
      ></div>
      <div
        id="1"
        onClick={(e) => handleClick(e.currentTarget)}
        className="h-40 flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-transform duration-400 transform"
      ></div>
      <div
        id="2"
        onClick={(e) => handleClick(e.currentTarget)}
        className="h-40 flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-transform duration-400 transform"
      ></div>
      <div
        id="3"
        onClick={(e) => handleClick(e.currentTarget)}
        className="h-40 flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-transform duration-400 transform"
      ></div>
      <div
        id="4"
        onClick={(e) => handleClick(e.currentTarget)}
        className="h-40 flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-transform duration-400 transform"
      ></div>
      <div
        id="5"
        onClick={(e) => handleClick(e.currentTarget)}
        className="h-40 flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-transform duration-400 transform"
      ></div>
      <div
        id="6"
        onClick={(e) => handleClick(e.currentTarget)}
        className="h-40 flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-transform duration-400 transform"
      ></div>
      <div
        id="7"
        onClick={(e) => handleClick(e.currentTarget)}
        className="h-40 flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-transform duration-400 transform"
      ></div>
      <div
        id="8"
        onClick={(e) => handleClick(e.currentTarget)}
        className="h-40 flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-transform duration-400 transform"
      ></div>
    </div>
  );
};

export default TicTacToe;
