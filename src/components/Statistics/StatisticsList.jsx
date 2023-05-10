import React, { useEffect, useState } from 'react'

const StatisticsList = ({name, value, random}) => {
     const [stats, setStats] = useState([{}]);

    const addToStatistics = () => {
        setStats([
            ...stats, 
            {
                player1: value, player2: random
            }
        ]);
    }

    useEffect(() => {
        addToStatistics()
    }, [value, random]);

  return (
    <div id="statistics-list">
        <h2>Statistik</h2>
        <h3>Datorn vs {name}</h3>
        {
        stats.map(stat => {
            return <li>{stat.player2} - {stat.player1}</li>
        })
        }
        </div>
  )
}

export default StatisticsList
