import { useState } from 'react';

const Button = () => {
  let [count, setCounter] = useState(0);

  const handleCounter = (action) => {
    if (action === '+') {
      setCounter((count) => count + 1);
    } else if (count === '-') {
      setCounter((count) => count - 1);
    } else {
      setCounter((count) => (count = 0));
    }
    return;
  };

  const div = (
    <>
      <div>
        <button
          className="button"
          onClick={() => handleCounter('-')}
          disabled={count < 0}
        >
          -
        </button>
        <span className="counter">{count}</span>
        <button className="button" onClick={() => handleCounter('+')}>
          +
        </button>
      </div>
      <div>
        <button
          className="button reset-bttn"
          onClick={() => handleCounter('reset')}
        >
          Reset
        </button>
      </div>
    </>
  );
  return <>{div}</>;
};

const App = () => {
  const container = (
    <div className="container">
      <Button />
    </div>
  );
  return <>{container}</>;
};

export default App;
