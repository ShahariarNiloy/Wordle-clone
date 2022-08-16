import React, { useState } from "react";
import Letter from "./Letter";

const Board = () => {
  return (
    <div className="board">
      {[1, 2, 3, 4, 5, 6].map((_val: any, i: any) => {
        return (
          <div className="row" key={i}>
            {[1, 2, 3, 4, 5].map((_val: any, j: any) => {
              return <Letter letterPos={j} attemptVal={i} key={i + j} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
