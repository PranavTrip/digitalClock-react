import React, { useState } from "react";
import './index.css';

const App = () => {
  let [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <>
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}> Click Me for Increment</button>
      <button onClick={decrementCount}> Click Me for Decrement</button>
      </div>
    </>
  );
};

export default App;
