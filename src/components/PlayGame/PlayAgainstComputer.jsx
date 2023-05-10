import React, { useEffect, useState } from 'react'
import Button from '../Button/Button';
import Computer from '../Computer/Computer';
import Statistics from '../Statistics/Statistics';
import StatisticsList from '../Statistics/StatisticsList';

const PlayAgainstComputer = ({name}) => {
    const [value, setValue] = useState('');
    const [random, setRandom] = useState(' ');
    const [yourScore, setYourscore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const availableValues = ['Sten', 'Sax', 'Påse'];

const makeYourMove = (value) => {
    setValue(value);
    setRandom(availableValues[Math.floor(Math.random() * availableValues.length)])
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

return (
<>
    <h1>Spel mot datorn</h1>
<div id="game-area-component">
    <Computer random={random}/>
    <Statistics value={value} random={random} player1={name} player2='Datorn' player1stats={yourScore} setPlayer1stats={changeYourScore} player2stats={computerScore} setPlayer2stats={changeComputerScore}/>
    <div id="my-move">
    {
        yourMove()
    }</div>
    </div>
    <StatisticsList name={name} value={value} random={random}/>
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
