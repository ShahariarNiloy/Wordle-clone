import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPos, attemptVal }: any) => {
  const { board, correctWord, currAttempt, setDisabledLetter }: any =
    useContext(AppContext);
  const letter = board?.[attemptVal][letterPos];

  const correct = correctWord[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  const letterColorState =
    currAttempt?.attempt > attemptVal
      ? correct
        ? "correct"
        : almost
        ? "almost"
        : "error"
      : "";

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetter((prevLetter: any) => [...prevLetter, letter]);
    }
  }, [currAttempt.attempt]);
  return (
    <div className="letter" id={letterColorState}>
      {letter}
    </div>
  );
};

export default Letter;
