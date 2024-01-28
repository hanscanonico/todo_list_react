import React, { useContext, useState } from 'react'
import EditButton from '../../../components/buttons/EditButton'
import DeleteButton from '../../../components/buttons/DeleteButton'
import { CheckIcon } from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form'
import { Task } from '../../../types'
import { HomePageContext } from '../HomePageContext'

interface Props {
    task: Task
}

interface FormValues {
    name: string
}

function TaskItem({ task }: Props) {
    const [isEditing, setIsEditing] = useState(false)
    const [newName, setNewName] = useState(task.name)

    const { removeTask, updateTask, toogleTask } = useContext(HomePageContext)

    const { register, handleSubmit, reset } = useForm<FormValues>({
        defaultValues: {
            name: task.name
        }
    })

    const onSubmit = handleSubmit((data) => {
        setIsEditing(false)
        updateTask.mutate({ ...task, name: data.name })
        reset({ name: data.name })
    })

    const startEditing = () => {
        setIsEditing(true)
    }

    const handleCheckboxChange = () => {
        toogleTask.mutate(task)
    }

    return (
        <div className="group flex items-center mb-3 p-4 border border-gray-600 rounded-lg bg-gray-700">
            <div className="flex items-center flex-1">
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={handleCheckboxChange}
                    className="ml-2"
                />
                {isEditing ? (
                    <form onSubmit={onSubmit} className="flex flex-1">
                        <input
                            {...register('name', { required: true })}
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            className="ml-2 text-lg text-gray-800 bg-gray-300 rounded p-2 flex-none"
                        />
                        <button
                            type='submit'
                            className="text-green-500 hover:text-green-700 ml-2">
                            <CheckIcon className="w-6 h-6" />
                        </button>
                    </form>
                ) : (
                    <label htmlFor={`task-${task.id}`} className={`ml-2 text-lg flex-none ${task.done ? 'line-through text-gray-500' : 'text-gray-300'}`}
                    >
                        {task.name}
                    </label>
                )}
                <EditButton onClick={startEditing} />
            </div>
            <DeleteButton onClick={() => {
                if (task.id) {
                    removeTask.mutate([task.list_id, task.id])
                }
            }} />
        </div >
    )
}

export default TaskItem
