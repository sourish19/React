import { useState } from 'react';

export const Memory = ({ cardNumber, shuffledArr }) => {
  const [car1,setCar1] = useState();
  const [car2,setCar2] = useState();

  const handleClick = () => {};

  return (
    <>
      <div className="grid grid-cols-4 items-center justify-center gap-10">
        {Array.from({ length: cardNumber }).map((val, index) => {
          return (
            <div
              key={index}
              value={shuffledArr[index]}
              onClick={handleClick}
              className="h-30 w-30 cursor-pointer rounded-2xl bg-amber-200"
            >
              <div
                className={`h-full w-full items-center flex justify-center rounded-2xl text-4xl text-slate-950 font-semibold`}
              >
                {shuffledArr[index]}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
