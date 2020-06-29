import React, { useState } from 'react';
import './App.css';

// components
import { Player } from './player/Player.js'


const signs = ["rock", "paper", "scissor", "lizard", "spock"]

function App() {

  const state = useState({
    playerOne: signs[0],
    AI: signs[0],
    winner: ""
    
  })

  const {playerOne, AI, winner} = useState()

  return (
    <div className="App">
      <h1>Rock Paper Scissor Lizard Spock</h1>
      <Player sign = {playerOne} />
      <Player sign = {AI} />

      <div>
      <button className = "weaponBtn">
        Rock
      </button>
      <button className = "weaponBtn">
        Paper
      </button>
      <button className = "weaponBtn">
        Scissor
      </button>
      <button className = "weaponBtn">
        Lizard
      </button>
      <button className = "weaponBtn">
        Spock
      </button>
      
    </div>

    <div className = "winner">
      Winner
    </div>
    
    <button type = "button">
      Start
    </button>

    </div>


  );
}

export default App;
