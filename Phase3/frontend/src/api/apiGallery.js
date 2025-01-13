
//this is the point of communication between the frontend and backend
import axios from 'axios'

const getGallery = async () => {
    try {
        const response = await axios.post('http://localhost:3000/gallery/getGallery')

        return response.data
    } catch (error) {
        console.error(error.message)
    }
}

export const addGallery = async (URL, Description) => {
    try {
        const response = await axios.post('http://localhost:3000/gallery/addGallery', { URL, Description })

        return response.data
    } catch (error) {
        console.error(error.message)
    }
}

export default getGallery;