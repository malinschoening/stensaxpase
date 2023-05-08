import React, { useEffect, useState } from 'react'
import GameArea from './GameArea';

const Menu = () => {
    const [mode, setMode] = useState();
    const [hidden, setHidden] = useState(true);

    const computerMode = () => {
        setMode(false)
        console.log(mode);
        setHidden(current => !current);
    }

    const playerMode = () => {
        setMode(true)
        console.log(mode);
        setHidden(current => !current);
    }

  return (
    <div id="button-container">
      <button id="button" className={hidden ? '' : 'hidden'} onClick={computerMode}>Spela mot dator</button>
      <button id="button" className={hidden ? '' : 'hidden'} onClick={playerMode}>Spela mot kompis</button>
      <div className={hidden ? 'hidden' : ''}><GameArea mode={mode}/></div>

    </div>
  )
}

export default Menu
