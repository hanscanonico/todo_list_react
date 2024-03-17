import type React from 'react'
import { useContext, useState } from 'react'
import { HomePageContext } from '../HomePageContext'

interface Props {
    isOpen: boolean
    onClose: () => void
}

function AddListModal({ isOpen, onClose }: Props) {
    const [listName, setListName] = useState('')
    const { createList } = useContext(HomePageContext)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createList.mutate(listName)
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-start pt-40">
            <div className="bg-white p-5 rounded">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="listName" className="block text-gray-700 text-sm font-bold mb-2">
                        List Name:
                    </label>
                    <input
                        type="text"
                        id="listName"
                        value={listName}
                        onChange={(e) => setListName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className="flex justify-center mt-4">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add
                        </button>
                        <button type="button" onClick={onClose} className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddListModal