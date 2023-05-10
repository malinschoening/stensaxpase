import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'; 
import PlayAgainstComputer from './PlayAgainstComputer';

describe('PlayAgainstComputer component', () => {

    it('Should show title Spel mot Datorn', () => {
        const title = 'Spel mot Datorn'

        render(<PlayAgainstComputer />)
        const headline = screen.findByText(title);
        expect(headline).toBeInTheDocument
    })
})