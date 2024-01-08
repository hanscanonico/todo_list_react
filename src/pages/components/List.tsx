import React, { useState } from 'react'
import DeleteButton from '../../components/buttons/DeleteButton'
import EditButton from '../../components/buttons/EditButton'
import { useForm } from 'react-hook-form'
import { CheckIcon } from '@radix-ui/react-icons'


interface Props {
    list: { id: number, name: string }
    isLast: boolean
    setLists: React.Dispatch<React.SetStateAction<{ id: number, name: string }[]>>
}

interface FormValues {
    name: string
}

function List({ list, isLast, setLists }: Props) {
    const className = isLast ? 'py-2 text-lg' : 'py-2 border-b border-gray-600 text-lg'
    const [isEditing, setIsEditing] = useState(false)
    const [newName, setNewName] = useState(list.name)

    const { register, handleSubmit, reset } = useForm<FormValues>({
        defaultValues: {
            name: list.name
        }
    })

    const onSubmit = handleSubmit((data) => {
        setLists(prevLists => prevLists.map(l => l.id === list.id ? { ...l, name: data.name } : l))
        setIsEditing(false)
        reset({ name: data.name })
    })

    const deleteList = () => {
        setLists(prevLists => prevLists.filter(l => l.id !== list.id))
    }

    return (
        <li className={className}>
            <div className="group flex items-center">
                <div className="flex items-center flex-1">
                    <div>
                        {isEditing ? (
                            <form onSubmit={onSubmit} className="flex">
                                <input
                                    {...register('name', { required: true })}
                                    type="text"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className="ml-2 text-sm text-gray-800 bg-gray-300 rounded p-2 flex-none"
                                />
                                <button
                                    type='submit'
                                    className="text-green-500 hover:text-green-700">
                                    <CheckIcon className="w-6 h-6" />
                                </button>
                            </form>
                        ) : (
                            <label htmlFor={`list-${list.id}`} className="ml-2 text-lg text-gray-300 flex-none">
                                {list.name}
                            </label>
                        )}

                    </div>
                    <EditButton onClick={() => setIsEditing(true)} />
                </div>
                <DeleteButton onClick={deleteList} />
            </div>
        </li>
    )
}

export default List