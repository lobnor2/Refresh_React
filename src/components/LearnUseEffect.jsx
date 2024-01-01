import React, { useEffect, useState } from "react";

const LearnUseEffect = () => {
  const [num, setNum] = useState(0);
  const [randomNum, setRandomNum] = useState(null);
  //   useEffect(() => {
  //     console.log("useEffect called");
  //     return console.log("unmount");
  //   });
  useEffect(() => {
    console.log("useEffect with num var is calling");
    return () => {
      console.log("component unmount in the dependency array ");
    };
  }, [num]);
  const handleCount = () => {
    setNum((prev) => prev + 1);
    // console.log("increase");
  };
  const handleRandom = () => {
    setRandomNum(Math.floor(Math.random() * 100));
    // console.log("random number");
  };
  return (
    <div>
      <h1>LearnUseEffect</h1>
      <button onClick={handleCount}>increase {num} </button>
      <button onClick={handleRandom}>
        generate random number {randomNum}{" "}
      </button>
    </div>
  );
};

export default LearnUseEffect;
