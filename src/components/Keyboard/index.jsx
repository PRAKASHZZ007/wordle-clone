import React, { useState } from "react";
import "./index.css";

const Keyboard = ({ onGuess, disabled }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    if (e.target.value.length <= 5) {
      setInput(e.target.value.toUpperCase());
    }
  };

  const handleSubmit = () => {
    if (input.length === 5) {
      onGuess(input);
      setInput("");
    }
  };

  return (
    <div className="keyboard">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        disabled={disabled}
        maxLength="5"
        placeholder="Enter a 5-letter word"
      />
      <button onClick={handleSubmit} disabled={disabled || input.length !== 5}>
        Submit
      </button>
    </div>
  );
};

export default Keyboard;
