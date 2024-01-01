import React from "react";

const LearnLiftingState = ({ myClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    let dt = "i am from child";
    // props.myClick(dt);
    myClick(dt);
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default LearnLiftingState;
