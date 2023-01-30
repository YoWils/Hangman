import React from "react";
// This component displays the hangman text 

const HangmanText = ({ lettersGuess, wordToGuess, reveal = false }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        fontSize: "4rem",
        FontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {/* This part tracks each letter and its index */}
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                lettersGuess.includes(letter) || reveal ? "visible" : "hidden",
              color: !lettersGuess.includes(letter) && reveal ? "red": "black"
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanText;
