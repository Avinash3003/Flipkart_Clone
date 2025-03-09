import bcrypt from 'bcrypt'
import {signUpUser} from '../models/signUpSchema.js'
import { CartSchema } from '../models/CartSchema.js';

const signUp = async(req,res)=>{

    const {username,email,password,phoneno,confirmpassword} = req.body;
    console.log(username,email,password,phoneno,confirmpassword);

    if(!username || !email || !password || !phoneno || !confirmpassword){
        res.status(404).json({message:"All fields need to be filled"})
    }

    // const existedData=await signUpSchema.findOne({email:email,phoneno:phoneno})

    // const existedData=await signUpUser.find({email,phoneno}) 
    const existedemail=await signUpUser.findOne({email}) 
    const existedphoneno=await signUpUser.findOne({phoneno})
    console.log(existedemail,existedphoneno)
    if(existedemail){
        const message="User Email already Existed"
        // console.log(existedData)
        return res.status(404).json({message:message});
        
    }

    if(existedphoneno){
        const message="User Phoneno already Existed"
        // console.log(existedData)
        return res.status(404).json({message:message});
        
    }
    // console.log(existedData)


    const hashedpassword=await bcrypt.hash(password,10);

    const newUser=new signUpUser(
        {
            username:username,
            email:email,
            password:hashedpassword,
            phoneno:phoneno

        }
    );

    newUser.save();

    const newCartUser=new CartSchema({
        username:email,
        cart:[]
    })

    await newCartUser.save();

    res.status(200).json({message: "Signup Successfully.."});
}

export default signUp




