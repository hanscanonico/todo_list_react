import React, { createContext } from 'react'
import { Task, List, NewTask } from '../../types'
import { UseMutationResult } from '@tanstack/react-query'

interface HomePageContextType {
    lists: List[]
    tasks: Task[]
    isPendingLists: boolean
    isPendingTasks: boolean
    errorLists: Error | null
    errorTasks: Error | null
    setSelectedListId: React.Dispatch<React.SetStateAction<number | null>>
    addTask: UseMutationResult<NewTask, Error, NewTask>
    updateTask: UseMutationResult<Task, Error, Task>
    removeTask: UseMutationResult<number, Error, [number, number]>
    createList: UseMutationResult<List, Error, string>
    updateList: UseMutationResult<List, Error, List>,
    deleteList: UseMutationResult<number, Error, number>
}


export const HomePageContext = createContext<HomePageContextType>({
    lists: [],
    tasks: [],
    isPendingLists: true,
    isPendingTasks: true,
    errorLists: null,
    errorTasks: null,
    setSelectedListId: () => { },
    addTask: {} as UseMutationResult<NewTask, Error, NewTask>,
    updateTask: {} as UseMutationResult<Task, Error, Task>,
    removeTask: {} as UseMutationResult<number, Error, [number, number]>,
    createList: {} as UseMutationResult<List, Error, string>,
    updateList: {} as UseMutationResult<List, Error, List>,
    deleteList: {} as UseMutationResult<number, Error, number>,
})

