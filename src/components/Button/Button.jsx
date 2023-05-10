import React from 'react'

const Button = ({ name, makeYourMove, disabled }) => {

    const handleClick = (e) => {
        e.preventDefault();
        makeYourMove(name);
    }

  return (
    <button name={name} id="button" className="moves" onClick={handleClick} disabled={disabled ? 'disabled' : ''}>
        {name}
    </button>
  )
}

export default Button
