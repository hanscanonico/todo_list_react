import React, { useContext } from 'react'
import TaskItem from './TaskItem'
import { HomePageContext } from '../HomePageContext'

function TaskContainer() {

    const { tasks, isPendingTasks } = useContext(HomePageContext)

    return (
        <div>
            {!isPendingTasks && tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    )
}

export default TaskContainer