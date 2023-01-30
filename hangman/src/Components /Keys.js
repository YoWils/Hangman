import React from "react";
import styles from "./Keyboard.module.css";

// Alphabet array with 26 letters
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Function component for creating a key for each letter
const Keys = ({
  activeLetter,
  inactiveLetter,
  addlettersGuess,
  disabled = false,
}) => {
  return (
    <div className={styles.wrapper}>
      {alphabet.map((keys) => {
        const isActive = activeLetter.includes(keys);
        const inActive = inactiveLetter.includes(keys);
        return (
          <div>
            <button
              onClick={() => addlettersGuess(keys)}
              className={`${styles.btn} ${isActive ? styles.active : ""} ${
                inActive ? styles.inactive : ""
              }`}
              disabled={isActive || inActive || disabled}
              key={keys}
            >
              {keys}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Keys;
