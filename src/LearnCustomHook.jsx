import React from "react";
import { useCustomCounter } from "./hooks/useCustomCounter";
const LearnCustomHook = () => {
  const { count, handleIncrement } = useCustomCounter();
  return (
    <div>
      LearnCustomHook
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increase</button>
    </div>
  );
};

export default LearnCustomHook;
