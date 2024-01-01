import React, { useState } from "react";

const LearnState = () => {
  const [num, setNum] = useState({
    x: 1,
    y: 2,
    z: 3,
  });
  const handleXPosition = () => {
    setNum({ ...num, x: 7 });
  };
  const handleYPosition = () => {
    setNum({ ...num, y: 8 });
  };
  const handleZPosition = () => {
    setNum({ ...num, z: 9 });
  };
  return (
    <div>
      <p>x is {num.x}</p>
      <p>y is {num.y}</p>
      <p>z is {num.z}</p>
      <button onClick={handleXPosition}>increase x</button>
      <button onClick={handleYPosition}>increase y</button>
      <button onClick={handleZPosition}>increase z</button>
    </div>
  );
};

export default LearnState;
