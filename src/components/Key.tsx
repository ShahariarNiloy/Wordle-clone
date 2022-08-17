import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyVal, bigKey, disabled }: any) => {
  const { onSelectLetter, onSelectEnter, onSelectDelete }: any =
    useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onSelectEnter();
    } else if (keyVal === "DELETE") {
      onSelectDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
};

export default Key;
