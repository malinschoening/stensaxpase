import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'; 
import Menu from './Menu';


describe('Menu component', () => {
    it('Should display two buttons', () => {

        render(<Menu />)
        const buttons = screen.getAllByRole('button')
        
        expect(buttons.length).toBe(3)
    })
})