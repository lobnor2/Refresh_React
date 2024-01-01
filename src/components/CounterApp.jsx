import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const handleCounter = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div>
      CounterApp
      <h1>Count : {count} </h1>
      <button onClick={handleCounter}>increase</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
};

export default CounterApp;
