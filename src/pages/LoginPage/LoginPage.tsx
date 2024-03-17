import type React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken } from 'functions'
import { loginApi } from 'api/userApi'
import Button from 'ui/Button'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loginApi(email, password).then((token) => {
            if (token) {
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
                        <Button type="submit" name="Sign In" mr={2} />
                        <Button type="button" name="Registration" onClick={goToRegistrationPage} />
                    </div>

                </form>
            </div>
        </div>
    );
}

export default LoginPage;
