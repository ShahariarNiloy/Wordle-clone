import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../App";
import Key from "./Key";

const Keyboard = () => {
  const {
    currAttempt,
    onSelectLetter,
    onSelectEnter,
    onSelectDelete,
    disabledLetter,
  }: any = useContext(AppContext);
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const handleKeyboard = useCallback(
    (e: any) => {
      if (e.key === "Enter") {
        onSelectEnter();
      } else if (e.key === "Backspace") {
        onSelectDelete();
      } else {
        keys1.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (e.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt.letterPos, currAttempt.attempt]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key: any) => {
          return (
            <Key
              key={key}
              keyVal={key}
              disabled={disabledLetter.includes(key)}
            />
          );
        })}
      </div>
      <div className="line2">
        {keys2.map((key: any) => {
          return (
            <Key
              key={key}
              keyVal={key}
              disabled={disabledLetter.includes(key)}
            />
          );
        })}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey />
        {keys3.map((key: any) => {
          return (
            <Key
              key={key}
              keyVal={key}
              disabled={disabledLetter.includes(key)}
            />
          );
        })}
        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
