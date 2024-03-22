import mongoose from 'mongoose';
import dotenv from 'dotenv';
import defaultData from "../default.js";


const connection=async (URL)=>{
    // const URL=`mongodb+srv://${userName}:${passWord}@cluster0.ipacw3s.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
        defaultData();
        console.log("Connected to DB");
    } catch (error) {
        console.log(`Error Connecting to DB. ${error}`);
    }
}

export default connection;