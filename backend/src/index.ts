import express, {Request, Response} from 'express';
import {sampleProducts} from './data';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { productRouter } from './router/productRouter';

dotenv.config();


const MONGO_URL = 
process.env.MONGO_URL || 'mongodb://localhost/e-commerce';
mongoose.set('strictQuery', true);
console.log(process.env.MONGODB_URI);
mongoose
.connect(MONGO_URL)
.then(() => {
    console.log('Database connection successful');
})
.catch((error) => {
    console.log('Database connection failed', error);
});


const app = express();

app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173',
    })
)



app.use("/api/products", productRouter);



const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`Server is running on port  http://localhost:${PORT}`);
})