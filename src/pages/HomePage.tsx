import React from 'react'
import LeftMenu from './components/LeftMenu'
import TaskContainer from './components/TaskContainer'
import AddButton from '../components/buttons/AddButton'
import AddTaskModal from './components/AddTaskModal'

function HomePage() {
    const [lists, setLists] = React.useState([{ id: 1, name: 'List 1' }, { id: 2, name: 'List 2' }])
    const [tasks, setTasks] = React.useState([{ id: 1, name: 'Task 1', listId: 1, isDone: false }, { id: 2, name: 'Task 2', listId: 2, isDone: true }])

    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const addTask = (taskName: string) => {
        setTasks([...tasks, { id: tasks.length + 1, name: taskName, listId: 1, isDone: false }])
    }

    return (
        <div className="flex">
            <LeftMenu lists={lists} setLists={setLists} />
            <div className="flex-1 ml-80 bg-gray-600 h-screen ">
                <div className='flex justify-center items-center h-16'>
                    <span className="text-xl font-bold text-white">My Tasks</span>
                </div>
                <div className="p-4">
                    <div className="flex justify-center">
                        <AddButton onClick={() => { setIsModalOpen(true) }} name="Add Task" />
                        <AddTaskModal isOpen={isModalOpen} onClose={toggleModal} onAdd={addTask} />
                    </div>
                    <TaskContainer tasks={tasks} setTasks={setTasks} />
                </div>
            </div>
        </div>
    )
}

export default HomePage
