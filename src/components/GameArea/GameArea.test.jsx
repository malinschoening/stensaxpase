import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import GameArea from './GameArea';

describe('GameArea component', () => {
    it('Should display three buttons', () => {

        render(<GameArea />)
        const buttons = screen.getAllByRole('button')
        
        expect(buttons.length).toBe(1)
    })
})