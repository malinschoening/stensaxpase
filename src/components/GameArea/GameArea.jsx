import React, { useEffect, useState } from 'react'
import Button from '../Button/Button';
import Computer from '../Computer/Computer';
import Statistics from '../Statistics/Statistics';
import PlayAgainstComputer from '../PlayGame/PlayAgainstComputer';
import PlayAgainstPerson from '../PlayGame/PlayAgainstPerson';

const GameArea = ( { mode }) => {
    const availableValues = ['Sten', 'Sax', 'Påse'];
    const [name, setName] = useState(false);
    const [player1name, setPlayer1name] = useState('Spelare 1')
    const [player2name, setPlayer2name] = useState('Spelare 2')


    const toggle = () => {
      setName(current => !current);
    }

  return (
    <div id="wrapper">
        { mode ? name ? <PlayAgainstPerson player1={player1name} player2={player2name} /> 
                      : <>
          <input className="name-input" type="text" name="name1" value={player1name} onChange={(e) => {setPlayer1name(e.target.value)}} />
          <input className="name-input" type="text" name="name2" value={player2name} onChange={(e) => {setPlayer2name(e.target.value)}} />
          <button name="person-names-chosen" id="button" onClick={toggle}>Gå vidare</button>
                </>
              : name ? <PlayAgainstComputer name={player1name} />
                     : <>
                     <input className="name-input" type="text" name="name" value={player1name} onChange={(e) => {setPlayer1name(e.target.value)}} />
                     <button name="computer-name-chosen" id="button" onClick={toggle}>Gå vidare</button>
              </>}
    </div>
  )
}

export default GameArea
