import mongoose from "mongoose";


const userSchema = mongoose.Schema({

    username:{
        type:String,
        require:true
    },
    email:String,
    phoneno:String,
    password:{
        type:String,
        require:true
    }
    
});


export const signUpUser= mongoose.model('signUpUser',userSchema)
