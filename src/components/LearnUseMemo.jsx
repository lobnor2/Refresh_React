import React, { useMemo, useState } from "react";

const LearnUseMemo = () => {
  const [count, setCount] = useState(0);
  const handleCounter = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    console.log("increase count called");
  };
  const resetCount = () => {
    setCount(0);
    console.log("reset called");
  };
  //   const isCountTen = () => {
  //     console.log("isCountTen is called");
  //     if (count === 10) return "yes";
  //     return "no";
  //   };
  const isCountTen = useMemo(() => {
    console.log("usememo calledddd");
    if (count === 10) return "Yes";
    return "No";
  }, [count]);
  return (
    <div>
      CounterApp
      <h1>
        is count {count} is 10 ? {isCountTen}
      </h1>
      <button onClick={handleCounter}>increase</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
};

export default LearnUseMemo;
