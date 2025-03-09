import mongoose from "mongoose"


const userSchema = mongoose.Schema({

    ref_id:{type:Number,require:true},
    cnt:{type:Number,require:true},
    // category:{type:String,require:true},
    // sub_category:{type:String,require:true},
    // title:{type:String,require:true},
    // description:{type:String},
    // price:{type:Number,require:true},
    // dis:{type:Number,require:true},
    // cp:{type:Number,require:true},
    // rating:{type:Number,require:true},
    // rating_count:{type:Number,require:true},
});


const cartdata=mongoose.Schema({
    username:{type:String,require:true},
    cart: [userSchema]
})

export const CartSchema=mongoose.model("CartSchema",cartdata)