import React from 'react';
import { render, screen } from "@testing-library/react"
import Button from "./Button"

describe('Button', () => {
    describe('name prop', () => {
        it('should render a button with the name', () => {
            render(<Button type="submit" name="Sign In" />)
            expect(screen.getByText('Sign In')).toBeInTheDocument()
        })

        describe('when the user clicks the button', () => {
            it('should call the onClick function', () => {
                const onClick = jest.fn()
                render(<Button type="submit" name="Sign In" onClick={onClick} />)
                screen.getByText('Sign In').click()
                expect(onClick).toHaveBeenCalled()
            })
        })
    })
})