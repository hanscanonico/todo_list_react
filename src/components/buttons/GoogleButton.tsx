import React from 'react'
import { PlusIcon } from '@radix-ui/react-icons';

interface Props {
    onClick: () => void
    name: string
    fullWidth?: boolean
}

function GoogleButton({ onClick, name, fullWidth }: Props) {

    const defaultClassName = "mb-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition duration-300 ease-in-out"
    const className = `${defaultClassName} ${fullWidth ? "w-full" : ""}`
    return (
        <button
            onClick={onClick}
            type="button"
            className={className}>
            <PlusIcon className="w-4 h-4 mr-2" />
            {name}
        </button>
    )
}

export default GoogleButton