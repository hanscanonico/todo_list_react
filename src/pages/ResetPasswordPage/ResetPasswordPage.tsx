import type React from 'react'
import { useState } from 'react'
import Button from '../../ui/Button'
import { resetPasswordApi } from 'api/userApi'

function ResetPasswordPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const resetPassword = () => {
        resetPasswordApi(email).then(() => {
            console.log('Reset password')
        })
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-800">
            <div className="p-6 max-w-sm w-full bg-gray-700 rounded-md shadow-md">
                <form>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Password Confirmation
                        </label>
                        <input
                            id="passwordConfirmation"
                            type="password"
                            placeholder="Password confirmation"
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-start mt-4">
                        <Button type="submit" name="Register" onClick={resetPassword} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPasswordPage
