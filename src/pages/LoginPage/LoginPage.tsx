import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../../functions'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const BASE_URL = process.env.REACT_APP_BASE_URL

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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

            if (token) {
                setToken(token)
                navigate('/')
            } else {
                throw new Error('No token received')
            }
        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    const goToRegistrationPage = () => {
        navigate('/registration')
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-800">
            <div className="p-6 max-w-sm w-full bg-gray-700 rounded-md shadow-md">
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-start mt-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                            type="submit"
                        >
                            Sign In
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button" onClick={goToRegistrationPage}
                        >
                            Registration
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default LoginPage;
