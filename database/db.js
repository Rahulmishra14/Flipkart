import mongoose from 'mongoose';
import dotenv from 'dotenv';
import defaultData from "../default.js";
const DB = "mongodb://localhost:27017/flipkart";

const connection=async ()=>{
    // const URL=`mongodb+srv://${userName}:${passWord}@cluster0.ipacw3s.mongodb.net/?retryWrites=true&w=majority`;
    try {
        const connection = await mongoose.connect(DB, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        if (connection) {
          console.log(`Connected to the DB`);
          defaultData();
        }
      } catch (error) {
        console.log(`Error occurred while connecting to the DB: ${error}`);
      }
}

export default connection;