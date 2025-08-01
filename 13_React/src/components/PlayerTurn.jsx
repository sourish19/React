const PlayerTurn = ({ turn, winner }) => {
  return (
    <div className="w-79">
      <h2 className="text-5xl text-neutral-50 border-b-2 border-b-neutral-50 pb-2 font-raleway">
        {winner === "Draw"
          ? `${winner}`
          : winner
          ? `Player ${winner} won`
          : `Player ${turn} turn`}
      </h2>
    </div>
  );
};

export default PlayerTurn;
