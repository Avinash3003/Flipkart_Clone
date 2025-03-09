import { CartSchema } from "../models/CartSchema.js";


export const removeCartItemController=async(req,res)=>{
    const {user,ref_id}=req.body;

    console.log(typeof ref_id)

    await CartSchema.updateOne(
        {username:user},
        {$pull:{cart:{ref_id:ref_id}}}
    )

    const data=await CartSchema.findOne({username:user})

    res.json({data:data})



}