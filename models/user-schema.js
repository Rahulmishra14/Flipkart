import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        min:5,
        max:20
    },
    username:{
        type:String,
        required:true,
        unique:true,
        min:5,
        max:10,
        lowercase:true,
        indexing:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});


const user = mongoose.model('User',userSchema)

export default user;