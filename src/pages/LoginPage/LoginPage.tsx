import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../../functions'
import { loginApi } from '../../api/userApi'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loginApi(email, password).then((token) => {
            if (token) {
                console.log('my token :', token)
                setToken(token)
                navigate('/')
            }
        })
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
