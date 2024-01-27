const BASE_URL = 'http://localhost:3000'

export const fetchLists = async (token: string) => {
    try {
        const response = await fetch(`${BASE_URL}/lists`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })

        if (response.ok) {
            const data = await response.json();
            return data;
        }

        throw new Error(`HTTP error! status: ${response.status}`);

    } catch (error) {
        console.error('Error:', error);
    }
}

export const createListApi = async (token: string, listName: string) => {
    try {
        const response = await fetch(`${BASE_URL}/lists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ name: listName })
        })

        if (response.ok) {
            const data = await response.json();
            return data;
        }

        throw new Error(`HTTP error! status: ${response.status}`);

    } catch (error) {
        console.error('Error:', error);
    }
}

export const updateListApi = async (token: string, listId: number, listName: string) => {
    try {
        const response = await fetch(`${BASE_URL}/lists/${listId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ name: listName })
        })

        if (response.ok) {
            const data = await response.json();
            return data
        }

        throw new Error(`HTTP error! status: ${response.status}`)
    } catch (error) {
        console.error('Error:', error)
    }
}

export const deleteListApi = async (token: string, listId: number) => {
    try {
        const response = await fetch(`${BASE_URL}/lists/${listId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })

        if (response.ok) {
            const data = await response.json();
            return data
        }

        throw new Error(`HTTP error! status: ${response.status}`)
    } catch (error) {
        console.error('Error:', error)
    }

} 