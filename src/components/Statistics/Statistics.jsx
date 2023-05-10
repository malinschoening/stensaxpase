import React, { useEffect, useState } from 'react'

const Statistics = ({ value, random, player1, player2, player1stats, setPlayer1stats, player2stats, setPlayer2stats}) => {
    const [stats, setStats] = useState('Kör igång!');

    useEffect(() => {
        checkWin();
    }, [value, random]);

    const checkWin = () => {
        if(value === random) {
            setStats('Ni spelade lika. Kör igen');
        } else if(value == 'Påse'){
            if(random == 'Sten'){
                setStats(player1 + ' vinner!');
                setPlayer1stats(player1stats + 1);
            } else if(random == 'Sax'){
                setStats(player2 + ' vinner!');
                setPlayer2stats(player2stats + 1);
            }
        } else if(value == 'Sax'){
            if(random == 'Påse'){
                setStats(player1 + ' vinner!')
                setPlayer1stats(player1stats + 1);
            } else if(random == 'Sten'){
                setStats(player2 + ' vinner!')
                setPlayer2stats(player2stats + 1);
            }
        } else if(value == 'Sten'){
            if(random == 'Sax'){
                setStats(player1 + ' vinner!')
                setPlayer1stats(player1stats + 1);
            } else if(random == 'Påse'){
                setStats(player2 + ' vinner!')
                setPlayer2stats(player2stats + 1);
            }
        } else {
            setStats('Kör igång!')
        }
    }

  return (
    <div id="statistics-component">
    <h1 name="stats">{stats}</h1><br/>
    <h2>{player2stats} vs {player1stats}</h2>
    </div>
  )
}

export default Statistics
