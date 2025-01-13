import express from 'express'
import Village from '../models/VillageModel.js'
import resolvers from '../resolvers/VillageResolver.js'

const router = express.Router()

router.post('/getVillages', async (req, res) => {
    try {
        const villages = await resolvers.Query.getVillages();
        res.json(villages)
    } catch (error) {
        console.error(error.message)
    }
})

router.post('/addVillage', async (req, res) => {
    const { Name, Region, Area, Latitude, Longitude, Path, Categories } = req.body
    try {
        const newVillage = new Village({
            Name,
            Region,
            Area,
            Latitude,
            Longitude,
            Path,
            Categories,
            Populationsize: "",
            Agedistribution:"",
            Genderratios: "",
            Populationgrowth: "",
        })
        const village = await resolvers.Mutation.addVillage(null, newVillage)
        res.json(village)
    } catch (error) {
        console.error(error.message)
    }
})

router.post('/updateVillage', async (req, res) => {
    const { NameUpdated, Name, Region, Area, Latitude, Longitude, Path, Categories } = req.body
    try {
        const village = await resolvers.Mutation.updateVillage(null, { NameUpdated, Name, Region, Area, Latitude, Longitude, Path, Categories })
        res.json(village)
    } catch (error) {
        console.error(error.message)
    }
})

router.post('/updateData', async (req, res) => {
    const { NameUpdated, Populationsize, Agedistribution, Genderratios, Populationgrowth } = req.body
    try {
        const village = await resolvers.Mutation.updateData(null, { NameUpdated, Populationsize, Agedistribution, Genderratios, Populationgrowth })
        res.json(village)
    } catch (error) {
        console.error(error.message)
    }
})

router.post('/deleteVillage', async (req, res) => {
    const { Name } = req.body
    try {
        const village = await resolvers.Mutation.deleteVillage(null, { Name })
        res.json(village)
    } catch (error) {
        console.error(error.message)
    }
})

export default router