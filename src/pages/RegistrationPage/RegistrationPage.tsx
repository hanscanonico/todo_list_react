import React, { useState } from 'react'
import { registrationApi } from '../../api/userApi'
import Button from '../../ui/Button'

function RegistrationPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        registrationApi(email, password).then(() => {
            console.log('Registration successful')
        })
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-800">
            <div className="p-6 max-w-sm w-full bg-gray-700 rounded-md shadow-md">
                <form onSubmit={handleRegistration}>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
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
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Confirm your password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-start mt-4">
                        <Button type="submit" name="Register" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationPage
