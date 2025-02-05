import React from "react";
import "./index.css";

const Message = ({ status, onNewGame }) => {
  if (status === "playing") return null;

  return (
    <div className="message">
      {status === "won" ? "Congratulations, You Won!" : "Game Over. Try Again!"}
      <button onClick={onNewGame}>New Game</button>
    </div>
  );
};

export default Message;
