import { CartSchema } from "../models/CartSchema.js";


export const cartDataRetrieve=async(req,res)=>{

    const {user}=req.body;
    console.log(user)

    const userdata=await CartSchema.findOne({username:user})
    console.log("userdata: ",userdata);

    res.status(200).json({message:"Retrieve Successful",userCartData:userdata})
}