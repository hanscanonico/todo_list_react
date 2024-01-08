import React, { useState } from 'react'
import EditButton from '../../components/buttons/EditButton'
import DeleteButton from '../../components/buttons/DeleteButton'
import { CheckIcon } from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form';

interface Props {
    task: { id: number, name: string; isDone: boolean }
    setTasks: React.Dispatch<React.SetStateAction<{ id: number, name: string, isDone: boolean, listId: number }[]>>
}

interface FormValues {
    name: string
}

function Task({ task, setTasks }: Props) {
    const [isEditing, setIsEditing] = useState(false)
    const [newName, setNewName] = useState(task.name)

    const { register, handleSubmit, reset } = useForm<FormValues>({
        defaultValues: {
            name: task.name
        }
    });

    const onSubmit = handleSubmit((data) => {
        setTasks(prevTasks => prevTasks.map(t => t.id === task.id ? { ...t, name: data.name } : t))
        setIsEditing(false)
        reset({ name: data.name })
    })

    const startEditing = () => {
        setIsEditing(true)
    }

    const deleteTask = () => {
        setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id))
    }

    return (
        <div className="group flex items-center mb-3 p-4 border border-gray-600 rounded-lg bg-gray-700">
            <div className="flex items-center flex-1">
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
                    <label htmlFor={`task-${task.id}`} className="ml-2 text-lg text-gray-300 flex-none">
                        {task.name}
                    </label>
                )}
                <EditButton onClick={startEditing} />
            </div>
            <DeleteButton onClick={deleteTask} />
        </div >
    )
}

export default Task;
