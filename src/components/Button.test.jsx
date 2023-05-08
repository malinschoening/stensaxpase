import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
    it('Should show a button with a title', () => {
        const title = 'Sten';
        render(<Button value={title}/>)
        const button = screen.getByRole("button", {text: title});

        expect(button).toBeInTheDocument()
    })
})