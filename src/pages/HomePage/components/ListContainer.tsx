import { useContext, useState } from "react"
import AddButton from "../../../components/buttons/AddButton"
import ListItem from "./ListItem"
import AddListModal from "./AddListModal"
import { HomePageContext } from "../HomePageContext"

function ListContainer() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const { isPendingLists, lists } = useContext(HomePageContext)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div className="space-y-4 overflow-y-auto">
            <div className="text-lg font-bold p-3 text-gray-300">My Lists</div>
            <AddButton onClick={() => setIsModalOpen(true)} name="Add List" fullWidth />
            <AddListModal isOpen={isModalOpen} onClose={toggleModal} />

            <ul className="bg-gray-700 p-3 rounded-md">
                {!isPendingLists && lists.map((list, index) => (
                    <ListItem key={list.id} list={list} isLast={index === lists.length - 1} />
                ))}
            </ul>
        </div>
    )
}

export default ListContainer
