import React from 'react'
import { Pencil1Icon } from '@radix-ui/react-icons';

interface Props {
    onClick: () => void
}

function EditButton({ onClick }: Props) {
    return (
        <button type="button" onClick={onClick} className="text-yellow-500 hover:text-yellow-700 ml-2 opacity-0 group-hover:opacity-100 transition-opacity ">
            <Pencil1Icon className="w-5 h-5" />
        </button>
    )
}

export default EditButton