import { useState } from "react"
import AddButton from "../../components/buttons/AddButton"
import List from "./List"
import AddListModal from "./AddListModal"

interface Props {
    lists: { id: number, name: string }[]
    setLists: React.Dispatch<React.SetStateAction<{ id: number, name: string }[]>>
}

function ListContainer({ lists, setLists }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const addList = (listName: string) => {
        setLists([...lists, { id: lists.length + 1, name: listName }])
    }

    return (
        <div className="space-y-4 overflow-y-auto">
            <div className="text-lg font-bold p-3 text-gray-300">My Lists</div>
            <AddButton onClick={() => setIsModalOpen(true)} name="Add List" fullWidth />
            <AddListModal isOpen={isModalOpen} onClose={toggleModal} onAdd={addList} />

            <ul className="bg-gray-700 p-3 rounded-md">
                {lists.map((list, index) => (
                    <List key={list.id} list={list} isLast={index === lists.length - 1} setLists={setLists} />
                ))}
            </ul>
        </div>
    )
}

export default ListContainer
