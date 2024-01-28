import React, { useContext, useState } from 'react'
import DeleteButton from '../../../components/buttons/DeleteButton'
import EditButton from '../../../components/buttons/EditButton'
import { useForm } from 'react-hook-form'
import { CheckIcon } from '@radix-ui/react-icons'
import { HomePageContext } from '../HomePageContext'

interface Props {
    list: { id: number, name: string }
    isLast: boolean
}

interface FormValues {
    name: string
}

function ListItem({ list, isLast }: Props) {

    const [isEditing, setIsEditing] = useState(false)
    const [newName, setNewName] = useState(list.name)
    const { updateList, deleteList, selectedListId, setSelectedListId, refreshTasks } = useContext(HomePageContext)

    const isSelected = selectedListId === list.id
    const selectedClassNames = isSelected ? 'bg-gray-800 text-white' : 'bg-gray-700 text-gray-300'
    const className = `${isLast ? 'rounded-md py-2 text-lg' : 'rounded-md py-2 border-b border-gray-600 text-lg'} ${selectedClassNames}`

    const { register, handleSubmit, reset } = useForm<FormValues>({
        defaultValues: {
            name: list.name
        }
    })

    const onSubmit = handleSubmit((data) => {
        setIsEditing(false)
        updateList.mutate({ ...list, name: data.name })
        reset({ name: data.name })
    })

    const setDefaultList = () => {
        setSelectedListId(list.id)
        refreshTasks(list.id)
    }

    return (
        <li className={className} onClick={setDefaultList} onKeyUp={setDefaultList}>
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
                    <EditButton onClick={() => setIsEditing(true)} hidden={!isSelected} />
                </div>
                <DeleteButton onClick={() => deleteList.mutate(list.id)} hidden={!isSelected} />
            </div>
        </li>
    )
}

export default ListItem