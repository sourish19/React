import { useEffect, useState } from "react";
import crossImg from "../assets/cross.png";
import circleImg from "../assets/circle.png";
import PlayerTurn from "./PlayerTurn";
import ScoreBoard from "./Scoreboard";

const TicTacToe = () => {
  const [data, setData] = useState(Array(9).fill(null));
  const [isCross, setIsCross] = useState(true);
  const [playerTurn, setPlayerTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const [stopGame, setStopGame] = useState(false);

  useEffect(() => {
    checkWinner();
  }, [isCross]);

  const checkWinner = () => {
    const draw = data.includes(null);
    if (!draw) {
      setStopGame(!stopGame);
      setWinner("Draw");
    } else if (
      data[0] === data[1] &&
      data[0] === data[2] &&
      data[1] === data[2] &&
      data[0] != null
    ) {
      setStopGame(!stopGame);
      setWinner(data[0]);
    } else if (
      data[3] === data[4] &&
      data[4] === data[5] &&
      data[3] === data[5] &&
      data[3] != null
    ) {
      setStopGame(!stopGame);
      setWinner(data[3]);
    } else if (
      data[6] === data[7] &&
      data[7] === data[8] &&
      data[6] === data[8] &&
      data[6] != null
    ) {
      setStopGame(!stopGame);
      setWinner(data[6]);
    } else if (
      data[0] === data[3] &&
      data[3] === data[6] &&
      data[0] === data[6] &&
      data[0] != null
    ) {
      setStopGame(!stopGame);
      setWinner(data[0]);
    } else if (
      data[1] === data[4] &&
      data[4] === data[7] &&
      data[1] === data[7] &&
      data[1] != null
    ) {
      setStopGame(!stopGame);
      setWinner(data[1]);
    } else if (
      data[2] === data[5] &&
      data[5] === data[8] &&
      data[2] === data[8] &&
      data[2] != null
    ) {
      setStopGame(!stopGame);
      setWinner(data[2]);
    } else if (
      data[0] === data[4] &&
      data[4] === data[8] &&
      data[0] === data[8] &&
      data[0] != null
    ) {
      setStopGame(!stopGame);
      setWinner(data[0]);
    } else if (
      data[2] === data[4] &&
      data[4] === data[6] &&
      data[2] === data[6] &&
      data[2] != null
    ) {
      setStopGame(!stopGame);
      setWinner(data[2]);
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
    isCross ? updateData(id, "X") : updateData(id, "O");
    playerTurn === "X" ? setPlayerTurn("O") : setPlayerTurn("X");
    setIsCross(!isCross);
  };

  const startGame = () => {
    setStopGame(!startGame);
  };

  return (
    <>
      <div className="mt-20 flex flex-col gap-10 w-100">
        <PlayerTurn turn={playerTurn} winner={winner} />
        <ScoreBoard />
        {stopGame ? (
          <button
            onClick={startGame}
            className="bg-neutral-50 w-80 text-neutral-950 font-raleway p-1 rounded-xl cursor-pointer active:scale-95 mt-15"
          >
            Play Again
          </button>
        ) : null}
      </div>
      <div className="grid grid-cols-3 gap-2 w-[35%] h-[65%] mt-20">
        {data.map((ele, id) => (
          <div
            key={id}
            id={id}
            onClick={(e) => (stopGame ? e.preventDefault() : handleClick(id))}
            className="h-40 flex items-center justify-center border bg-neutral-100 rounded-sm cursor-pointer active:scale-95 transition-transform duration-400 transform"
          >
            {(data[id] === "X" && (
              <div className="h-15">
                <img src={crossImg} alt="" className="h-full" />
              </div>
            )) ||
              (data[id] === "O" && (
                <div className="h-15">
                  <img src={circleImg} alt="" className="h-full" />
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default TicTacToe;
