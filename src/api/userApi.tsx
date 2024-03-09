const BASE_URL = process.env.REACT_APP_BASE_URL

export const registrationApi = async (email: string, password: string) => {
    try {
        const response = await fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    email: email,
                    password: password
                }
            }),
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

    } catch (error) {
        console.error('Registration failed:', error)
    }
}

export const loginApi = async (email: string, password: string) => {
    try {
        const response = await fetch(`${BASE_URL}/users/sign_in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    email: email,
                    password: password
                }
            }),
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const token = response.headers.get('Authorization')?.split(' ')[1]

        return token

    } catch (error) {
        console.error('Login failed:', error)
    }
}

export const logoutApi = async (token: string) => {
    try {
        const response = await fetch(`${BASE_URL}/users/sign_out`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

    } catch (error) {
        console.error('Logout failed:', error)
    }
}