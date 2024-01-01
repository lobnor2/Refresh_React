import { memo } from "react";
export const GenerateRandomNumber = memo(
  ({ randomNumber, generateRandomNumber }) => {
    console.log("generate random number component rendered");
    return (
      <>
        <h2>Random Number: {randomNumber}</h2>
        <button onClick={generateRandomNumber}>Generate Random Number</button>
      </>
    );
  }
);
