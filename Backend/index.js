import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
// import signUpRoute from './routers/signUpRoute.js'
import signUpRoute from './routers/signupRoute.js'
import cors from 'cors'
import LoginRouter from './routers/loginRouter.js'
import dashboardRoute from './routers/dashboardRouter.js'
import { cartDataRoute } from './routers/cartDataRouter.js'
import { cartDataRetrieveRoute } from './routers/cartDataRetrieveRouter.js'
import { changeQuantityRouter } from './routers/changeQuantityRouter.js'
import { removeCartItemRouter } from './routers/removeCartItemRouter.js'
import { OTPRouter } from './routers/OTPRouter.js'
import { OTPVerifyRoute } from './routers/OTPVerifyRouter.js'
import { updatepasswordRoute } from './routers/updatePasswordRouter.js'

dotenv.config()

const app=express()
app.use(express.json())
app.use(cors())

const port=process.env.port || 3000
const uri=process.env.MONGO_URL

try{
    mongoose.connect(uri).then(console.log("Connected...."))
}catch(err){
    console.log("Error: ",err);
}

app.use(dashboardRoute)

app.use(signUpRoute)


app.use(OTPRouter)
app.use(OTPVerifyRoute)

app.use(LoginRouter)
app.use(updatepasswordRoute)

app.use(cartDataRoute)

app.use(cartDataRetrieveRoute)

app.use(changeQuantityRouter)
app.use(removeCartItemRouter)

app.listen(port,(req,res)=>{
    console.log("Server is on port ",port);
})













