import express from 'express'
import Admin from '../models/AdminModel.js'
import {resolvers} from '../resolvers/AdminResolver.js'

const router = express.Router()

router.post('/login', async (req, res) => {
    const {username, password} = req.body

    try {
        const admin = await Admin.findOne({userName: username})
        if (!admin) return res.status(404).json({ message: 'Invalid username' })

        const isMatch = (password === admin.password)
        if (!isMatch) return res.status(404).json({ message: 'Invalid password' })

    
        res.json({fullname: admin.fullName})
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
})

router.post('/register', async (req, res) => {
    const {username, password, fullname} = req.body

    try {
        const admin = await resolvers.Mutation.addAdmin(null, {userName: username, password, fullName: fullname})
        if(!admin) return res.status(404).json({ message: 'Username already exists' })

        res.json({fullname: admin.fullName})
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
})

export default router