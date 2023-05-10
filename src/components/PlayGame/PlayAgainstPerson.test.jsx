import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'; 
import PlayAgainstPerson from './PlayAgainstPerson';

describe('PlayAgainstPerson component', () => {

    it('Should show title Spelare1 vs Spelare2', () => {
        const title = 'Spelare1 vs Spelare2'
        const player1 = 'Spelare1'
        const player2 = 'Spelare2'

        render(<PlayAgainstPerson player1={player1} player2={player2}/>)
        const headline = screen.findByText(title);
        expect(headline).toBeInTheDocument
    })
})