import React from 'react'
import ListContainer from './ListContainer'

interface Props {
    lists: { id: number, name: string }[]
    setLists: React.Dispatch<React.SetStateAction<{ id: number, name: string }[]>>

}

function LeftMenu({ lists, setLists }: Props) {
    return (
        <div className="fixed top-0 left-0 h-screen w-80 bg-gray-800 text-white p-4">
            <ListContainer lists={lists} setLists={setLists} />
        </div>
    )
}

export default LeftMenu