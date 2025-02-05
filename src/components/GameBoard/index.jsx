import React from "react";
import "./index.css";

const GameBoard = ({ guesses, targetWord }) => {
  return (
    <div className="game-board">
      {Array.from({ length: 6 }).map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          {(guesses[rowIndex] || "").padEnd(5).split("").map((letter, colIndex) => {
            const className = `cell ${
              letter === targetWord[colIndex]
                ? "green"
                : targetWord.includes(letter)
                ? "yellow"
                : "gray"
            }`;

            return (
              <div key={colIndex} className={className}>
                {letter.toUpperCase()}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
