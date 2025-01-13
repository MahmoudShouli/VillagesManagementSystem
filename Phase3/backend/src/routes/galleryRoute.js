import express from 'express'
import resolvers from '../resolvers/GalleryResolver.js'

const router = express.Router()

router.post('/getGallery', async (req, res) => {
    try {
        const gallery = await resolvers.Query.getGallery()
        res.json(gallery)
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
})

router.post('/addGallery', async (req, res) => {
    const { URL, Description } = req.body
    try {
        const gallery = await resolvers.Mutation.addGallery(null, { URL, Description })
        res.json(gallery)
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
})

export default router