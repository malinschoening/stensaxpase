import React, { useEffect, useState } from 'react'
import Button from './Button';
import Computer from './Computer';
import Statistics from './Statistics';

const PlayAgainstComputer = ({name}) => {
    const [value, setValue] = useState('');
    const [random, setRandom] = useState(' ');
    const [yourScore, setYourscore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [statistics, setStatistics] = useState([{}]);
    const availableValues = ['Sten', 'Sax', 'Påse'];

const makeYourMove = (value) => {
    setValue(value);
    setRandom(availableValues[Math.floor(Math.random() * availableValues.length)])
}

const addToStatistics = () => {
    setStatistics([
        ...statistics,
        {you: value, computer: random}
      ])
    console.log(statistics);
}

const changeYourScore = (value) => {
    setYourscore(value);
}

const changeComputerScore = (value) => {
    setComputerScore(value);
}

const yourMove = () => {
    if(value == ''){
        return <h2>{name}, välj vad du vill spela</h2>
    } else {
        return <h2>{name} valde: {value}</h2>
    }
}

useEffect(() => {
    addToStatistics()
}, [value]);

return (
<>
    <h1>Spel mot datorn</h1>
<div id="game-area-component">
    <Computer random={random}/>
    <Statistics value={value} random={random} player1={name} player2='Datorn' player1stats={yourScore} setPlayer1stats={changeYourScore} player2stats={computerScore} setPlayer2stats={changeComputerScore}/>
    <div id="my-move">
    {
        yourMove()
    }</div></div>
    <div id="button-container">
    {
    availableValues.map((title) => {
        return <Button key={title} name={title} makeYourMove={makeYourMove}/>
    })
}</div>
</>
)
}

export default PlayAgainstComputer
