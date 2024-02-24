import { useContext, useState } from "react"
import AddButton from "../../../components/buttons/AddButton"
import ListItem from "./ListItem"
import AddListModal from "./AddListModal"
import { HomePageContext } from "../HomePageContext"
import { useDrop } from 'react-dnd'

function ListContainer() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [lastHoveredListId, setLastHoveredListId] = useState<number | null>(null)

    const { isPendingLists, lists, switchListOrder } = useContext(HomePageContext)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const [, dropRef] = useDrop({
        accept: 'LIST',
        drop: (item: { id: number }) => {
            const draggedId = item.id
            if (lastHoveredListId && draggedId !== lastHoveredListId) {
                const draggedList = lists.find(list => list.id === draggedId)
                const targetList = lists.find(list => list.id === lastHoveredListId)
                if (draggedList && targetList) {
                    switchListOrder.mutate({
                        list: draggedList,
                        otherList: targetList,
                    })
                }
            }
            setLastHoveredListId(null)
        },
    })

    return (
        <div className="space-y-4 overflow-y-auto">
            <div className="text-lg font-bold p-3 text-gray-300">My Lists</div>
            <AddButton onClick={() => setIsModalOpen(true)} name="Add List" fullWidth />
            <AddListModal isOpen={isModalOpen} onClose={toggleModal} />

            <ul ref={dropRef} className="bg-gray-700 p-3 rounded-md">
                {!isPendingLists && lists.map((list, index) => (
                    <ListItem key={list.id} list={list} isLast={index === lists.length - 1} setLastHoveredListId={setLastHoveredListId} />
                ))}
            </ul>
        </div>
    )
}

export default ListContainer
