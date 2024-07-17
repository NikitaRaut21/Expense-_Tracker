import express  from 'express';
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express ();
app.use(express.json());
app.use(cors());

//connect mongodb
 const connectDB =async ()=>{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    if(conn){
        console.log(`mongodb is connected sucessfully..📚`);
    }
 }
 connectDB();

 app.get('/',(req,res)=>{
    res.json({
     message:`welcome to expense tracker API`
    })
 })

const PORT = process.env.PORT || 5000;
  app.listen (PORT,(req,res)=>{
    console.log(`server is running on port ${PORT}`);
  })
