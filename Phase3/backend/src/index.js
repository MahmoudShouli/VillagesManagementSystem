import dotenv from 'dotenv';
import connectDB from './config/db.js';
import startServer from './server.js';

dotenv.config({path: '../.env'});
connectDB();
startServer();
