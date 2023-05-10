import React from 'react'

const Computer = ({ random }) => {

    const computersMove = () => {
        if(random == 'Sten' || random == 'Sax' || random == 'Påse'){
            return 'Datorn valde: ' + random
        } else {
            return 'Datorn väljer sitt drag...'
        }
    }

  return (
    <h2 id="computer-component">{
        computersMove()
        }</h2>
  )
}

export default Computer
