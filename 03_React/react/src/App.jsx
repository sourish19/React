import { useState } from "react";

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

const listItems = products.map((obj) => {
  return <li key={obj.id}>{obj.title}</li>;
});

const App = () => {
  let [count, setCounter] = useState(0);

  const handleCount = () => {
    setCounter(++count);
  };

  const div = (
    <div>
      <h1>Welcome to my app</h1>
      <button onClick={handleCount}>Count: {count}</button>
      <div>
        <h2>Items</h2>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
  return <>{div}</>;
};

export default App;
