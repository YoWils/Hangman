import React from "react";
import Info from "../assets/information.png";
import "./styles_help.css";

// This component is the info icon that issues the player instructions. 
// When the player hovers over the icon, a box appears with the instructions. 
function Help() {
  return (
    <div>
      <div>
        <img src={Info} alt="info_icon" className="hover-text" id= "info" />
        <span className="tool-tiptext" id="bottom">
          <h1>Hangman Rules</h1>
          <ol>
            <li>Each blank spot represents a letter in a word.</li>
            <li>You may guess letters or the entire word.</li>
            <li>
              For each incorrect letter guessed, a part of a stick figure will
              be drawn, representing a stage in the execution by hanging.
            </li>
            <li>
              You lose the game if the stick figure is fully drawn before the
              word is guessed.
            </li>
            <li>
              You win the game if the word is guessed before the stick figure is
              fully drawn.
            </li>
            <li>Press enter to restart the game </li>
          </ol>
        </span>
      </div>
    </div>
  );
}

export default Help;
