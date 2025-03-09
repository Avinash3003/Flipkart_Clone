import { CartSchema } from "../models/CartSchema.js";

export const cartDataController = async (req, res) => {

    const { user, itemDetails } = req.body;

    const userData = await CartSchema.findOne({ username: user });
    // console.log("userdata",userData)

    if (!userData) {

        const newUser = new CartSchema(
            {
                username: user,
                cart: [
                    {
                        ref_id: itemDetails.ref_id,
                        cnt: 1
                    }
                ]
            }
        )

        await newUser.save();
    }
    else {

        const prevRef = [...userData.cart];
        let flag = 0
        for (let item of prevRef) {
            if (item.ref_id === itemDetails.ref_id) {
                flag=1
                if(item.cnt===10){
                    return res.status(404).json({message:"Reached Max Cart size"})

                }
            }

        }

        if(flag){
            
            await CartSchema.updateOne(
                {username:user,"cart.ref_id":itemDetails.ref_id},
                {$inc:{"cart.$.cnt":1}}
            )

        }
        else {
            await CartSchema.updateOne({ username: user }, {
                $push: {
                    cart: {

                        ref_id: itemDetails.ref_id,
                        cnt: 1,

                    }

                }
            })
        }
    }
    const data = await CartSchema.findOne({ username: user })
    console.log(userData)
    res.json({ message: "success", data })

}