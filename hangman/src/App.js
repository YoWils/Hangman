import { useState, useEffect, useCallback } from "react";
import randomWords from "./randomWord.json";
import HangmanImage from "./Components /HangmanImage.js";
import HangmanText from "./Components /HangmanText.js";
import Keys from "./Components /Keys.js";
import Help from "./Components /Help.js";


function getWord() {
  return randomWords[Math.floor(Math.random() * randomWords.length)]
}


function App() {
  // This line gets a random number associated it with the amount of words in the list and then outputs a random word from the list.
  const [wordToGuess, setWordToGuess] = useState(getWord) 
  const [lettersGuess, setLettersGuess] = useState([]);
// All the incorrect letters are the the ones not contained in wordToGuess
  const incorrectLetters = lettersGuess.filter(
    letter => !wordToGuess.includes(letter)
  )
// Tell you if you have won or not 
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every(letter => lettersGuess.includes(letter))

  const addlettersGuess = useCallback((letter , isLoser, isWinner) => {
    if (lettersGuess.includes(letter) || isLoser || isWinner) return 
    setLettersGuess(currentLetters =>[...currentLetters, letter])
},[lettersGuess]) 
// Check the above 
  useEffect(() => {
    function handler(e) {
      const key = e.key
  
      if (!/^[a-z]$/.test(key)) return 
      
      e.preventDefault()
      addlettersGuess(key)
    }
    window.addEventListener("keydown", handler)
    return () => {
      window.removeEventListener("keydown", handler)
    }
  }, [addlettersGuess])

  useEffect(() => {
    function handler(e) {
      const key = e.key
      if (key !== "Enter") return 
      e.preventDefault()
      setLettersGuess([])
      setWordToGuess(getWord())
      
    }
    window.addEventListener("keydown", handler)
    return () => {
      window.removeEventListener("keydown", handler)
    }
  }, [addlettersGuess])

  
  

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>{isWinner && "Winner! - refresh to try again"}
      { isLoser && "Nice try - refresh to try again"}
      </div>

      
      <HangmanImage numberofGuesses = {incorrectLetters.length} />
      <HangmanText lettersGuess = {lettersGuess} wordToGuess = {wordToGuess} reveal = {isLoser}  />
      <Keys disabled={ isWinner || isLoser} activeLetter={lettersGuess.filter(letter => wordToGuess.includes(letter))}
        inactiveLetter={incorrectLetters}
        addlettersGuess ={addlettersGuess}
      
      />
      <Help/>
    </div>
  );
}

export default App;
