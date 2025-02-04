import express from 'express';
import connectDB from './config/db.js';


const app = express()
const PORT = 8080;

app.use(express.json())
connectDB

app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
} )