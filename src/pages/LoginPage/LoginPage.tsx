import type React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken } from 'functions'
import { loginApi } from 'api/userApi'
import Button from 'ui/Button'
import { redirectToGoogleOAuth } from 'api/authApi'
import GoogleButton from './GoogleButton'

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

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search)
        const token = queryParams.get('token')
        if (token) {
            setToken(token)
            navigate('/')
        }
    }, [navigate])

    const goToRegistrationPage = () => {
        navigate('/registration')
    }

    const goToResetPasswordPage = () => {
        navigate('/resetPassword')
    }

    return (
        <>
            <div className="flex items-center justify-center bg-gray-800">
                <div className="p-6 max-w-md w-full bg-gray-700 rounded-md shadow-md mt-40">
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
                        <div className="flex items-center mt-4">
                            <Button type="submit" name="Sign In" mr={2} />
                            <Button type="button" name="Registration" onClick={goToRegistrationPage} mr={2} />
                            <Button type="button" name="Forget Password" onClick={goToResetPasswordPage} />
                        </div>

                    </form>
                </div>
            </div>
            <div className="flex items-center justify-center mt-5">
                <GoogleButton onClick={redirectToGoogleOAuth} />
            </div>
        </>
    )
}

export default LoginPage;
