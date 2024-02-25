import React, { useEffect } from 'react'
import LeftMenu from './components/LeftMenu'
import TaskContainer from './components/TaskContainer'
import AddButton from '../../components/buttons/AddButton'
import AddTaskModal from './components/AddTaskModal'
import { useNavigate } from 'react-router-dom'
import { ExitIcon } from '@radix-ui/react-icons'
import {
    UseMutationResult,
    useMutation,
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import { createListApi, deleteListApi, fetchLists, switchListOrderApi, updateListApi } from '../../api/listApi'
import { createTaskApi, deleteTask, fetchTasks, toogleTaskApi, updateTaskApi, switchTaskOrderApi } from '../../api/taskApi'
import { HomePageContext } from './HomePageContext'
import { List, NewTask, SwitchListOrderPayload, SwitchTaskOrderPayload, Task } from '../../types'
import { getToken, removeToken } from '../../functions'


function HomePage() {
    const token = getToken()
    const [selectedListId, setSelectedListId] = React.useState<number | null>(null)
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const refreshLists = () => {
        queryClient.invalidateQueries({ queryKey: ['getLists'] })
    }

    const refreshTasks = (listId: number) => {
        queryClient.invalidateQueries({ queryKey: ['getTasks', listId] })
    }

    const { isPending: isPendingLists, error: errorLists, data: lists } = useQuery({
        queryKey: ['getLists'],
        queryFn: () => fetchLists(token)
    })

    const { isPending: isPendingTasks, error: errorTasks, data: tasks } = useQuery({
        queryKey: ['getTasks', selectedListId],
        queryFn: () => fetchTasks(token, selectedListId),
        enabled: !!selectedListId,
    })

    const createList: UseMutationResult<List, Error, string> = useMutation({
        mutationFn: (listName: string) => {
            return createListApi(token, listName)
        },
        onSuccess: (_data) => {
            queryClient.invalidateQueries({ queryKey: ['getLists'] })
        },
    })

    const updateList: UseMutationResult<List, Error, List> = useMutation({
        mutationFn: async (list: List) => {
            return updateListApi(token, list.id, list.name)
        },
        onSuccess: (_data) => {
            queryClient.invalidateQueries({ queryKey: ['getLists'] })
        },
    })

    const deleteList: UseMutationResult<number, Error, number> = useMutation({
        mutationFn: async (listId: number) => {
            return deleteListApi(token, listId)
        },
        onSuccess: (_data) => {
            queryClient.invalidateQueries({ queryKey: ['getLists'] })
        },
    })

    const createTask: UseMutationResult<NewTask, Error, NewTask> = useMutation({
        mutationFn: (task: NewTask) => {
            return createTaskApi(token, task.listId, task.name)
        },
        onSuccess: (_data) => {
            queryClient.invalidateQueries({ queryKey: ['getTasks'] })
        },
    })

    const updateTask: UseMutationResult<Task, Error, Task> = useMutation({
        mutationFn: async (task: Task) => {
            return updateTaskApi(token, task.list_id, task.id, task.name)
        },
        onSuccess: (_data) => {
            queryClient.invalidateQueries({ queryKey: ['getTasks'] })
        },
    })

    const removeTask = useMutation<number, Error, [number, number]>({
        mutationFn: async ([listId, taskId]: [number, number]) => {
            return deleteTask(token, listId, taskId)
        },
        onSuccess: (_data) => {
            queryClient.invalidateQueries({ queryKey: ['getTasks'] })
        },
    })

    const toogleTask = useMutation<Task, Error, Task>({
        mutationFn: async (task: Task) => {
            return toogleTaskApi(token, task.list_id, task.id)
        },
        onSuccess: (_data) => {
            queryClient.invalidateQueries({ queryKey: ['getTasks'] })
        },
    })

    const switchTaskOrder = useMutation<Task, Error, SwitchTaskOrderPayload>({
        mutationFn: async ({ task, otherTask }) => {
            return switchTaskOrderApi(token, task.list_id, task.id, otherTask.id)
        },
        onSuccess: (_data) => {
            queryClient.invalidateQueries({ queryKey: ['getTasks'] })
        },
    })

    const switchListOrder = useMutation<List, Error, SwitchListOrderPayload>({
        mutationFn: async ({ list, otherList }) => {
            return switchListOrderApi(token, list.id, otherList.id)
        },
        onSuccess: (_data) => {
            queryClient.invalidateQueries({ queryKey: ['getLists'] })
        },
    })

    useEffect(() => {
        if (!isPendingLists && !selectedListId && lists.length > 0) {
            setSelectedListId(lists[0].id)
        }
    }, [isPendingLists, setSelectedListId, lists, selectedListId])

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [token, navigate])

    const handleDisconnect = () => {
        removeToken()
        navigate('/login')
    }

    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const listTaskData = {
        lists,
        createList,
        updateList,
        tasks,
        isPendingLists,
        isPendingTasks,
        errorLists,
        errorTasks,
        setSelectedListId,
        createTask,
        updateTask,
        removeTask,
        deleteList,
        toogleTask,
        switchTaskOrder,
        switchListOrder,
        selectedListId,
        refreshLists,
        refreshTasks,
    }

    return (
        <HomePageContext.Provider value={listTaskData}>
            <div className="flex">
                <LeftMenu />
                <div className="flex-1 ml-80 bg-gray-600 h-screen ">
                    <div className='flex justify-between items-center h-16 px-4'>
                        <div className="p-2" aria-hidden="true">
                        </div>
                        <span className="text-xl font-bold text-white">My Tasks</span>
                        <button
                            type="button"
                            onClick={() => { handleDisconnect() }}
                            className="p-2 rounded-md text-white hover:bg-gray-700"
                        >
                            <ExitIcon />
                        </button>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-center">
                            <AddButton onClick={() => { setIsModalOpen(true) }} name="Add Task" />
                            <AddTaskModal isOpen={isModalOpen} onClose={toggleModal} />
                        </div>
                        <TaskContainer />
                    </div>
                </div>
            </div>
        </HomePageContext.Provider>
    )
}

export default HomePage
