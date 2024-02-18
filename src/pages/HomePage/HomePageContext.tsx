import React, { createContext } from 'react'
import { Task, List, NewTask, SwitchTaskOrderPayload, SwitchListOrderPayload } from '../../types'
import { UseMutationResult } from '@tanstack/react-query'

interface HomePageContextType {
    lists: List[]
    tasks: Task[]
    isPendingLists: boolean
    isPendingTasks: boolean
    errorLists: Error | null
    errorTasks: Error | null
    setSelectedListId: React.Dispatch<React.SetStateAction<number | null>>
    createTask: UseMutationResult<NewTask, Error, NewTask>
    updateTask: UseMutationResult<Task, Error, Task>
    removeTask: UseMutationResult<number, Error, [number, number]>
    createList: UseMutationResult<List, Error, string>
    updateList: UseMutationResult<List, Error, List>,
    deleteList: UseMutationResult<number, Error, number>
    toogleTask: UseMutationResult<Task, Error, Task>
    switchTaskOrder: UseMutationResult<Task, Error, SwitchTaskOrderPayload>
    selectedListId: number | null
    refreshLists: () => void
    refreshTasks: (listId: number) => void
    switchListOrder: UseMutationResult<List, Error, SwitchListOrderPayload>
}


export const HomePageContext = createContext<HomePageContextType>({
    lists: [],
    tasks: [],
    isPendingLists: true,
    isPendingTasks: true,
    errorLists: null,
    errorTasks: null,
    setSelectedListId: () => { },
    createTask: {} as UseMutationResult<NewTask, Error, NewTask>,
    updateTask: {} as UseMutationResult<Task, Error, Task>,
    removeTask: {} as UseMutationResult<number, Error, [number, number]>,
    createList: {} as UseMutationResult<List, Error, string>,
    updateList: {} as UseMutationResult<List, Error, List>,
    deleteList: {} as UseMutationResult<number, Error, number>,
    toogleTask: {} as UseMutationResult<Task, Error, Task>,
    selectedListId: null,
    refreshLists: () => { },
    refreshTasks: () => { },
    switchTaskOrder: {} as UseMutationResult<Task, Error, SwitchTaskOrderPayload>,
    switchListOrder: {} as UseMutationResult<List, Error, SwitchListOrderPayload>
})

