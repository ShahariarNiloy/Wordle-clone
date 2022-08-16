import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyVal, bigKey }: any) => {
  const { board, setBoard, currAttempt, setCurrAttempt }: any =
    useContext(AppContext);
  const selectLetter = () => {
    if (keyVal === "ENTER") {
      if (currAttempt.lettPos < 5) return;
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else if (keyVal === "DELETE") {
    } else {
      if (currAttempt.letterPos > 4) return;
      const newBoard = { ...board };
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    }
  };
  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
};

export default Key;
