import React, { useEffect, useState } from 'react'
import Button from '../Button/Button';
import Computer from '../Computer/Computer';
import Statistics from '../Statistics/Statistics';

const PlayAgainstPerson = ({player1, player2}) => {
    const [player1score, setPlayer1score] = useState('');
    const [player2score, setPlayer2score] = useState(' ');
    const [turn, setTurn] = useState(true);
    const [game, setGame] = useState(false);
    const [player1stats, setPlayer1stats] = useState(0);
    const [player2stats, setPlayer2stats] = useState(0);
    const availableValues = ['Sten', 'Sax', 'Påse'];

    const changePlayer1stats = (value) => {
        setPlayer1stats(value);
    }

    const changePlayer2stats = (value) => {
        setPlayer2stats(value);
    }

    const makeYourMove = (value) => {
        turn ? setPlayer1score(value)
             : setPlayer2score(value)
        console.log(player1score)
        console.log(player2score)
        turn ? setTurn(current => !current)
             : setGame(true)
    }

    const toggle = () => {
        setGame(false);
        setTurn(true);
    }


useEffect(() => {

});

  return (
    <>
    <h1>{game ? ''
              : turn ? player1 + ' välj ditt drag'
                     : player2 + ' välj ditt drag'
        }</h1>

    { game ? 
            <>
            <h1>{player1} vs {player2}</h1>
        <div id="game-area-component">
        <div id="player1-move">
            {player1} valde: {player1score}
            </div>
            <Statistics value={player1score} random={player2score} player1={player1} player2={player2} player1stats={player1stats} setPlayer1stats={changePlayer1stats} player2stats={player2stats} setPlayer2stats={changePlayer2stats}/>
            <div id="player2-move">
            {player1} valde: {player2score}
            </div>
        </div>
        <button id="go-again" onClick={toggle}>Kör igen!</button>
           </>
           : ''}
    <div id="button-container">
    {
    availableValues.map((title) => {
        return <Button key={title} name={title} makeYourMove={makeYourMove} disabled={game}/>
    })
}</div>
</>
)
}

export default PlayAgainstPerson
