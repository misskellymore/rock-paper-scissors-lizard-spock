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

  return (
    <div className="App">
      <h1>Rock Paper Scissor Lizard Spock</h1>
      <Player />

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

    </div>


  );
}

export default App;
