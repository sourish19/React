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
  const [score, setScore] = useState({
    X: 0,
    O: 0,
    draw: 0,
  });
  const [stopGame, setStopGame] = useState(false);
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    checkWinner();
  }, [data]);

  const checkWinner = () => {
    let winflag = false;
    for (let combo of winningCombos) {
      if (
        data[combo[0]] === data[combo[1]] &&
        data[combo[0]] === data[combo[2]] &&
        data[combo[0]] !== null
      ) {
        setStopGame(!stopGame);
        setWinner(data[combo[0]]);
        setScore((prev) => ({
          ...prev,
          [data[combo[0]]]: prev[data[combo[0]]] + 1,
        }));
        winflag = true;
        break;
      }
    }

    if (!winflag) {
      const draw = data.includes(null);
      if (!draw) {
        setStopGame(!stopGame);
        setWinner("Draw");
        setScore((prev) => ({
          ...prev,
          draw: prev.draw + 1,
        }));
      } else {
        return;
      }
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
    setData(Array(9).fill(null));
    setIsCross(true);
    setPlayerTurn("X");
    setWinner(null);
  };

  return (
    <>
      <div className="mt-20 flex flex-col gap-10 w-100">
        <PlayerTurn turn={playerTurn} winner={winner} />
        <ScoreBoard score={score} />
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
