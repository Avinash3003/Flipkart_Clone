import { CartSchema } from "../models/CartSchema.js";


export const changeQuantityController=async(req,res)=>{
    const {user,quantity,ref_id}=req.body;

    await CartSchema.updateOne(
        {username:user,"cart.ref_id":ref_id},
        {$set:{"cart.$.cnt":quantity}}
    )

    res.status(200).json({message:"Changed succesfully"})
    
    
    
}

