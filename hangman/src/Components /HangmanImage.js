import React from "react";
import State5 from "../assets/state5.GIF";
import State6 from "../assets/state6.GIF";
import State7 from "../assets/state7.GIF";
import State8 from "../assets/state8.GIF";
import State9 from "../assets/state9.GIF";
import State10 from "../assets/state10.gif";
import State11 from "../assets/state11.GIF";
// This component displays each hangman image.
const HangmanImage = ({ numberofGuesses } ) => {
  const image = [State5, State6, State7, State8, State9, State10, State11 ]
    
   

    return (<div><img src={image[numberofGuesses]} alt="hangman"/></div>);
};

export default HangmanImage;
