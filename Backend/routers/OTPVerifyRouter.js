import express from 'express'
import { verifyOTP } from '../controllers/OTPVerifyController.js'

export const OTPVerifyRoute=express.Router()

OTPVerifyRoute.post("/verify-otp",verifyOTP)


// OTPRouter.post("/verify-otp", verifyOTP);
