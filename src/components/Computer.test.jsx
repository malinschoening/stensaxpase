import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Computer from './Computer';

describe('Computer component', () => {

    it('Should show a headline Datorn väljer sitt drag.. before starting', () => {
        const none = ' '
        const title = 'Datorn väljer sitt drag...'
        render(<Computer random={none}/>)

        const headline = screen.getByText(title)

        expect(headline).toBeInTheDocument()
        
    })

    it('Should show a headline with the choice when chosen', () => {
        const value = 'Sten'
        const title = 'Datorn valde: Sten'
        render(<Computer random={value}/>)
        
        const headline = screen.getByText(title)

        expect(headline).toBeInTheDocument()
    })
})