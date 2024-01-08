import React from 'react'
import { TrashIcon } from '@radix-ui/react-icons';

interface Props {
    onClick: () => void
}

function DeleteButton({ onClick }: Props) {
    return (
        <button type="button" onClick={onClick} className="text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity">
            <TrashIcon className="w-5 h-5" />
        </button>
    )
}

export default DeleteButton