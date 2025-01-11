import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../apiService';
import { useAdmin } from "../AdminContext";

function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { setAdmin } = useAdmin()

    const handleLogin = async (e) => {
        e.preventDefault()

        const data = await login(username, password)
        let fullName = ""
        if(data) {
            fullName = data.fullname
            setError("")
            setAdmin(fullName)
            navigate('Overview')
        } else {
            setError("Invalid username or password")
        }

        

        
    }
    return (
        <div className="w-full max-w-sm p-6 bg-secondary rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-bold text-white mb-6">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="username">
                        Username
                    </label>
                    <input
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    />
                </div>
                <button
                    className="w-full px-4 py-2 text-white bg-button rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    type="submit"
                >
                    Login
                </button>
                {error !== "" && (
                    <p className="mt-2 text-red-600 text-lg font-semibold text-center">{error}</p> 
                )} 
            </form>
            <p className="mt-4 text-center text-sm text-gray-400">
                Dont have an account?{" "}
            <Link to='/SignUp'>
                <span className="text-button hover:underline">
                    Sign up
                </span>
            </Link>
            </p>
        </div>
    )
}

export default LoginForm
