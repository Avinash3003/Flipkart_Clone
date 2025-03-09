import bcrypt from 'bcrypt'
import { signUpUser } from '../models/signUpSchema.js';

export const updatePasswordController =async(req,res)=>{

    const {email,password}=req.body;

    console.log("forgot password: ",email,password)

    // const userData=await signUpUser.findOne({email:email})
    // console.log(userData)

    const hashedPassword= await bcrypt.hash(password,10);
    console.log(hashedPassword)

    await signUpUser.updateOne({email},
        {$set:{password:hashedPassword}}
    )

    const isMatch= await bcrypt.compare(password,hashedPassword)
    console.log(isMatch)
    
    // const userData1=await signUpUser.findOne({email:email})
    // console.log("***",userData1)



    res.json({message:"Password Updated successfully😉"})









}