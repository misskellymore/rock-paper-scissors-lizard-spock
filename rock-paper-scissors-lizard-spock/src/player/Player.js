import React from 'react';

// signs
import rock from '../signs/rock.png';
import paper from '../signs/paper.jpg';
import scissor from '../signs/scissor.jpg';
import lizard from '../signs/lizard.jpg';
import spock from '../signs/spock.jpg';

export const Player = (sign) => {
    return(
        <div className = "player">
            <img className = "player-img"
                 src = {
                     sign === "rock" ? rock : 
                     sign === "scissors" ? scissor : 
                     sign === "lizard" ? lizard : 
                     sign === "spock" ? spock : 
                     paper
                 }
                 alt = "rock-paper-scissor-lizar-or-spock-hand-gesture" />
        </div>
    )
}