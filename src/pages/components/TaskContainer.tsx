import React from 'react'
import Task from './Task'

interface Props {
    tasks: { id: number, name: string, isDone: boolean }[]
    setTasks: React.Dispatch<React.SetStateAction<{ id: number, name: string; isDone: boolean, listId: number }[]>>;
}

function TaskContainer({ tasks, setTasks }: Props) {
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} setTasks={setTasks} />
            ))}
        </div>
    )
}

export default TaskContainer