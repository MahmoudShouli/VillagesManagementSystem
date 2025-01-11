import express from'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import authRouter from './routes/authRoute.js';
import cors from 'cors'

dotenv.config({path: '../.env'}); 
connectDB();     

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json()); 
app.use('/api', authRouter)

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});