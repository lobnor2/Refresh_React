import React from "react";

const LearnEvent = () => {
  const handleClick = (e) => {
    console.log("button clicked");
  };
  const handleClick2 = (myid) => {
    console.log("button clicked2", myid);
  };
  return (
    <div>
      LearnEvent
      <button onClick={handleClick}>click</button>
      <button
        onClick={(e) => {
          handleClick2("ThisIsMyId");
        }}
      >
        click 2
      </button>
    </div>
  );
};

export default LearnEvent;
