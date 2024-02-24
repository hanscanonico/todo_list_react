import React, { useContext, useState } from 'react'
import TaskItem from './TaskItem'
import { HomePageContext } from '../HomePageContext'
import { useDrop } from 'react-dnd'

function TaskContainer() {

    const { tasks, isPendingTasks, switchTaskOrder } = useContext(HomePageContext)
    const [lastHoveredTaskId, setLastHoveredTaskId] = useState<number | null>(null)

    const [, dropRef] = useDrop({
        accept: 'TASK',
        drop: (item: { id: number }) => {
            const draggedId = item.id
            if (lastHoveredTaskId && draggedId !== lastHoveredTaskId) {
                const draggedTask = tasks.find(task => task.id === draggedId);
                const targetTask = tasks.find(task => task.id === lastHoveredTaskId);
                if (draggedTask && targetTask) {
                    switchTaskOrder.mutate({
                        task: draggedTask,
                        otherTask: targetTask,
                    })
                }
            }
            setLastHoveredTaskId(null)
        },
    })
    return (
        <div ref={dropRef} >
            {!isPendingTasks && tasks.map((task) => (
                <TaskItem key={task.id} task={task} setLastHoveredTaskId={setLastHoveredTaskId} />
            ))}
        </div>
    )
}

export default TaskContainer