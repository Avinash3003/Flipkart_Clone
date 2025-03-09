import { signUpUser } from "../models/signUpSchema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
 
export const LoginController = async(req,res)=>{

    const {email, password} = req.body
    console.log(email, password)
    if(!email || !password)
        return res.status(401).json({message: "All Fileds Required"})
    
    const data = await signUpUser.findOne({email})
    if(!data)
        return res.status(401).json({message:"User not Found"})
    
    const isMatch = await bcrypt.compare(password,data.password)
    if(!isMatch)
        return res.status(401).json({message: "Incorrect Password"})


    const token=jwt.sign(
        {
            email:email,
            username:data.username

        },
        process.env.SECRET_KEY,
        {expiresIn:'1h'}
    );

    console.log("token :",token)

    res.status(200).json({message: "Login Successfully",token:token})


}