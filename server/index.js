import express  from 'express';
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import User from "./models/User.js";
import Transaction from './models/Transaction.js';
import { getHealth } from './controllers/Health.js';

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
 app.post("/signup", async (req, res) => {
   const { fullName, email, password, dob } = req.body;
 
   const user = new User({
     fullName,
     email,
     password,
     dob,
   });
 
   try {
     const savedUser = await user.save();
 
     res.json({
       success: true,
       message: "Signup successfully",
       data: savedUser,
     });
   } catch (e) {
     res.json({
       success: false,
       message: e.message,
       data: null,
     });
   }
 });
app.post("/login",(req,res)=>{
   
})
app.get("/health",getHealth)



const PORT = process.env.PORT || 5000;
  app.listen (PORT,(req,res)=>{
    console.log(`server is running on port ${PORT}`);
  })
