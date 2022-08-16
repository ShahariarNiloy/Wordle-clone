import React, { useContext } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPos, attemptVal }: any) => {
  const { board }: any = useContext(AppContext);
  const letter = board?.[attemptVal][letterPos];
  return <div className="letter">{letter}</div>;
};

export default Letter;
