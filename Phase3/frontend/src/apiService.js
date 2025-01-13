//this is the point of communication between the frontend and backend
import axios from 'axios'

export const login = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:3000/api/login', {
            username,
            password
        })

        return response.data
    } catch (error) {
        console.error(error.message)
    }
}

export const register = async (username, password, fullname) => {
    try {
        const response = await axios.post('http://localhost:3000/api/register', {
            username,
            password,
            fullname
        })
        
        return response.data
    } catch (error) {
        console.error(error.message)
    }
}