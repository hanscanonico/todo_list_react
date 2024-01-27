const BASE_URL = 'http://localhost:3000'

export const fetchTasks = async (token: string, listId: number | null) => {
    if (!listId) return []
    try {
        const response = await fetch(`${BASE_URL}/lists/${listId}/tasks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })

        if (response.ok) {
            const data = await response.json()
            return data
        }

        throw new Error(`HTTP error! status: ${response.status}`)

    } catch (error) {
        console.error('Error:', error)
    }
}

export const createTask = async (token: string, listId: number, taskName: string) => {
    try {
        const response = await fetch(`${BASE_URL}/lists/${listId}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ name: taskName })
        })

        if (response.ok) {
            const data = await response.json()
            return data
        }

        throw new Error(`HTTP error! status: ${response.status}`)

    } catch (error) {
        console.error('Error:', error)
    }
}

export const updateTaskApi = async (token: string, listId: number, taskId: number, taskName: string) => {
    try {
        const response = await fetch(`${BASE_URL}/lists/${listId}/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ name: taskName })
        })

        if (response.ok) {
            const data = await response.json()
            return data
        }

        throw new Error(`HTTP error! status: ${response.status}`)

    } catch (error) {
        console.error('Error:', error)
    }
}

export const deleteTask = async (token: string, listId: number, taskId: number) => {
    try {
        const response = await fetch(`${BASE_URL}/lists/${listId}/tasks/${taskId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })

        if (response.ok) {
            const data = await response.json()
            return data
        }

        throw new Error(`HTTP error! status: ${response.status}`)

    } catch (error) {
        console.error('Error:', error)
    }

}