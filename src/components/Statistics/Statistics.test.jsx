import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Statistics from './Statistics';
import changeYourScore from '../PlayGame/PlayAgainstComputer'

describe('Statistics component', () => {
    it('Should say Kör igång! when no choice has been made', () => {
        const value = ''
        const random = ' '
        const text = 'Kör igång!'
        

        render(<Statistics random={random} value={value}/>)
        const headline = screen.getByText(text)
        expect(headline).toBeInTheDocument()
    })

    it('Should say Spelare1 vinner! if Player1 wins', () => {
        const value = 'Sten'
        const random = 'Sax'
        const player1 = 'Spelare1'
        const text = ' vinner!'
        const setPlayer1stats = () => {
        }

        render(<Statistics random={random} value={value} player1={player1} setPlayer1stats={setPlayer1stats}/>)
        const headline = screen.getByText(player1 + text)
        expect(headline).toBeInTheDocument()

    })

    it('Should say Spelare2 vinner! when Player2 wins', () => {
        const value = 'Sax'
        const random = 'Sten'
        const player2 = 'Spelare2'
        const text = ' vinner!'
        const setPlayer2stats = () => {

        }

        render(<Statistics random={random} value={value} player2={player2} setPlayer2stats={setPlayer2stats}/>)
        const headline = screen.getByText(player2 + text)
        expect(headline).toBeInTheDocument()
    })

    it('Should say Ni spelade lika. Kör igen when you play the same hand', () => {
        const value = 'Sten'
        const text = 'Ni spelade lika. Kör igen'

        render(<Statistics random={value} value={value} player1stats={0} player2stats={0}/>)
        const headline = screen.getByText(text)
        expect(headline).toBeInTheDocument()
    })

    it('Should not add point when playing the same hand', () => {
        const value = 'Sten'
        const title = '0 vs 0'
        
        render(<Statistics random={value} value={value} player1stats={0} player2stats={0}/>)
        const headline = screen.getByText(title)
        expect(headline).toBeInTheDocument();
    })
})