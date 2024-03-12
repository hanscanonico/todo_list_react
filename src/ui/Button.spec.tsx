import React from 'react';
import { render, screen } from "@testing-library/react"
import Button from "./Button"

describe('Button', () => {
    describe('name prop', () => {
        it('should render a button with the name', () => {
            render(<Button type="submit" name="Sign In" />)
            expect(screen.getByText('Sign In')).toBeInTheDocument()
        })
    })
})