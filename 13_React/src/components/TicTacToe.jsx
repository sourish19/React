import { useEffect, useState } from "react";
import crossImg from "../assets/cross.png";
import circleImg from "../assets/circle.png";

const TicTacToe = () => {
  const [data, setData] = useState(Array(9).fill(null));
  const [isCross, setIsCross] = useState(true);

  useEffect(() => {
    checkWinner();
  }, [isCross]);

  const checkWinner = () => {
    const draw = data.includes(null);
    if (!draw) {
      console.log("Draw");
    } else if (
      data[0] === data[1] &&
      data[0] === data[2] &&
      data[1] === data[2] &&
      data[0] != null
    ) {
      console.log(`${data[0]} is winner`);
    } else if (
      data[3] === data[4] &&
      data[4] === data[5] &&
      data[3] === data[5] &&
      data[3] != null
    ) {
      console.log(`${data[3]} is winner`);
    } else if (
      data[6] === data[7] &&
      data[7] === data[8] &&
      data[6] === data[8] &&
      data[6] != null
    ) {
      console.log(`${data[6]} is winner`);
    } else if (
      data[0] === data[3] &&
      data[3] === data[6] &&
      data[0] === data[6] &&
      data[0] != null
    ) {
      console.log(`${data[0]} is winner`);
    } else if (
      data[1] === data[4] &&
      data[4] === data[7] &&
      data[1] === data[7] &&
      data[1] != null
    ) {
      console.log(`${data[1]} is winner`);
    } else if (
      data[2] === data[5] &&
      data[5] === data[8] &&
      data[2] === data[8] &&
      data[2] != null
    ) {
      console.log(`${data[2]} is winner`);
    } else if (
      data[0] === data[4] &&
      data[4] === data[8] &&
      data[0] === data[8] &&
      data[0] != null
    ) {
      console.log(`${data[0]} is winner`);
    } else if (
      data[2] === data[4] &&
      data[4] === data[6] &&
      data[2] === data[6] &&
      data[2] != null
    ) {
      console.log(`${data[2]} is winner`);
    } else {
      return;
    }
  };

  const updateData = (id, val) => {
    setData((prev) => {
      const newData = [...prev];
      newData[id] = val;
      return newData;
    });
  };

  const handleClick = (id) => {
    if (data[id] !== null) return;
    isCross ? updateData(id, "x") : updateData(id, "o");
    setIsCross(!isCross);
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-[35%] h-[75%]">
      {data.map((ele, id) => (
        <div
          key={id}
          id={id}
          onClick={(e) => handleClick(id)}
          className="h-40 flex items-center justify-center border bg-neutral-400 rounded-sm cursor-pointer active:scale-95 transition-transform duration-400 transform"
        >
          {(data[id] === "x" && (
            <div className="h-15">
              <img src={crossImg} alt="" className="h-full" />
            </div>
          )) ||
            (data[id] === "o" && (
              <div className="h-15">
                <img src={circleImg} alt="" className="h-full" />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default TicTacToe;
