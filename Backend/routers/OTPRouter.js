import express from 'express'
import { OTPController } from '../controllers/OTPController.js'

export const OTPRouter = express.Router()


OTPRouter.post('/send-otp',OTPController)
