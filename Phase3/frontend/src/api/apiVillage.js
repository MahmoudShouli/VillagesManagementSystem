//this is the point of communication between the frontend and backend
import axios from 'axios'

const getVillages = async () => {
    try {
        const response = await axios.post('http://localhost:3000/village/getVillages')

        return response.data
    } catch (error) {
        console.error(error.message)
    }
}

export const addVillage = async (Name, Region, Area, Latitude, Longitude, Path, Categories) => {
    try {
        const response = await axios.post('http://localhost:3000/village/addVillage', { Name, Region, Area, Latitude, Longitude, Path, Categories })

        return response.data
    } catch (error) {
        console.error(error.message)
    }
}

export const updateVillage = async (NameUpdated, Name, Region, Area, Latitude, Longitude, Path, Categories) => {
    try {
        const response = await axios.post('http://localhost:3000/village/updateVillage', { NameUpdated, Name, Region, Area, Latitude, Longitude, Path, Categories })

        return response.data
    } catch (error) {
        console.error(error.message)
    }
}

export const updateDemoData = async (NameUpdated, Name, Populationsize, Agedistribution, Genderratios, Populationgrowth) => {
    try {
        const response = await axios.post('http://localhost:3000/village/updateData', { NameUpdated, Name, Populationsize, Agedistribution, Genderratios, Populationgrowth })

        return response.data
    } catch (error) {
        console.error(error.message)
    }
}

export const deleteVillage = async (Name) => {
    try {
        const response = await axios.post('http://localhost:3000/village/deleteVillage', { Name })

        return response.data
    } catch (error) {
        console.error(error.message)
    }
}

export default getVillages;