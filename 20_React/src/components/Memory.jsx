import { useState, useRef, useEffect } from "react";

export const Memory = ({ cardNumber, shuffledArr }) => {
  const cardRefs = useRef([]); // store DOM refs for each card
  const timerRef = useRef(null);

  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [firstIndex, setFirstIndex] = useState(null);
  const [secondIndex, setSecondIndex] = useState(null);
  const [isChecking, setIsChecking] = useState(false); // prevent rapid clicks

  // Run check when both cards are selected
  useEffect(() => {
    if (firstCard !== null && secondCard !== null) {
      checkMatch();
    }
  }, [firstCard, secondCard]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const checkMatch = () => {
    setIsChecking(true);

    if (firstCard === secondCard) {
      console.log("Matched!");
      resetSelection();
    } else {
      console.log("Not matched!");
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        hideCard(firstIndex);
        hideCard(secondIndex);
        resetSelection();
      }, 1000);
    }
  };

  const resetSelection = () => {
    setFirstCard(null);
    setSecondCard(null);
    setFirstIndex(null);
    setSecondIndex(null);
    setIsChecking(false);
  };

  const showCard = (index) => {
    cardRefs.current[index]?.classList.remove("opacity-0");
  };

  const hideCard = (index) => {
    cardRefs.current[index]?.classList.add("opacity-0");
  };

  const handleClick = (index, value) => {
    if (isChecking) return; // block clicks during check
    if (index === firstIndex) return; // prevent clicking the same card twice

    if (firstCard === null) {
      setFirstCard(value);
      setFirstIndex(index);
      showCard(index);
    } else if (secondCard === null) {
      setSecondCard(value);
      setSecondIndex(index);
      showCard(index);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      {Array.from({ length: cardNumber }).map((_, index) => (
        <div
          key={index}
          className="h-50 w-50 cursor-pointer rounded-2xl bg-amber-200"
        >
          <div
            onClick={() => handleClick(index, shuffledArr[index])}
            ref={(el) => (cardRefs.current[index] = el)}
            className="h-full w-full rounded-2xl text-center text-4xl font-semibold text-slate-950 opacity-0"
          >
            {shuffledArr[index]}
          </div>
        </div>
      ))}
    </div>
  );
};
