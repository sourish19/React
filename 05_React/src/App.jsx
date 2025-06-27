import { useState } from 'react';

const Text = () => {
  return <div>Some Text...</div>;
};

function App() {
  let [visible, setVisible] = useState(true);

  return (
    <>
      <div>
        <div>{visible && <Text />}</div>
        <button
          onClick={() => {
            setVisible((prev) => !prev);
          }}
        >
          {visible ? 'Hide' : 'Show'}
        </button>
      </div>
    </>
  );
}

export default App;
