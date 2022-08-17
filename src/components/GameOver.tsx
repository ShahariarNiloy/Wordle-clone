import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const { gameOver, setGameOver, correctWord, currAttempt }: any =
    useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.win
          ? "You've Correctly Guessed The Word"
          : "You've Failed To Guessed The Word"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.win && <h3>Ypu Guessed In {currAttempt.attempt} attempts</h3>}
    </div>
  );
};

export default GameOver;
