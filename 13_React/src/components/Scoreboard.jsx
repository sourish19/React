const ScoreBoard = ({ score }) => {
  return (
    <div className="flex flex-col gap-5 mt-15 border border-amber-50 w-80 p-5 rounded-md">
      <div className="text-3xl font-raleway text-neutral-50">
        Player X - <span className="ml-9 text-4xl">{score.X}</span>
      </div>
      <div className="text-3xl font-raleway text-neutral-50">
        Player O - <span className="ml-8 text-4xl">{score.O}</span>
      </div>
      <div className="text-3xl font-raleway text-neutral-50">
        Draw - <span className="ml-19 text-4xl">{score.draw}</span>
      </div>
    </div>
  );
};

export default ScoreBoard;
