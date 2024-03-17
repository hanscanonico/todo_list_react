import React from 'react';
import { getColorClassName } from './functions'
import type { Color } from './constants'

interface Props {
    onClick?: () => void
    name: string
    fullWidth?: boolean
    type: "button" | "submit" | "reset"
    color?: Color
    px?: number
    py?: number
    mr?: number
    ml?: number
}

function Button({ onClick, name, fullWidth, type, color = 'primary', px = 4, py = 2, mr = 0, ml = 0 }: Props) {
    const defaultClassName = "text-white font-bold rounded flex items-center justify-center transition duration-300 ease-in-out"
    const defaultPadding = `py-${py} px-${px}`
    const defaultMargin = `mr-${mr} ml-${ml}`
    const colorClassName = getColorClassName(color)
    const widthClassName = fullWidth ? "w-full" : ""
    const className = `${defaultClassName} ${colorClassName} ${widthClassName} ${defaultPadding} ${defaultMargin}`

    return (
        <button
            onClick={onClick}
            type={type}
            className={className}
            name={name}>
            {name}
        </button>
    )
}

export default Button