import express from 'express'
import AdminModel from '../models/AdminModel.js'

const router = express.Router()

router.post('/login', async (req, res) => {
    const {username, password} = req.body

    try {
        const admin = await AdminModel.findOne({userName: username})
        if (!admin) return res.status(404).json({ message: 'Invalid username' })

        const isMatch = (password === admin.password)
        if (!isMatch) return res.status(404).json({ message: 'Invalid password' })

    
        res.json({fullname: admin.fullName})
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
})


router.post('/register', async (req, res) => {
    const { username, password, fullname } = req.body;

    try {
        const existingUser = await AdminModel.findOne({ userName: username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const admin = new AdminModel({ fullName: fullname, userName: username, password });
        await admin.save();

        res.status(201).json({ message: 'Admin registered successfully', admin });
    } catch (error) {
        console.error('Error adding admin:', error);
        res.status(500).json({ message: 'Failed to add admin', error: error.message });
    }
});

export default router