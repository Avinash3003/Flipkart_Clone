
import nodemailer from 'nodemailer'
import { signUpUser } from '../models/signUpSchema.js';
import dotenv from 'dotenv'

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_URL,
        pass: process.env.MAIL_AUTH
    }
});


export const OTPController = async (req,res)=>{
    const { email,text } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    if(text){
        const userData = await signUpUser.findOne({email})
        if(!userData){
            return res.status(400).json({message:"user not found.Plz Signup"})
        }
    }

    
    const otp = Math.floor(100000 + Math.random() * 900000);

    const mailOptions = {
        from: 'avinashreddya963@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        html: `<p>Your <strong>Flipkart</strong> OTP is ${otp}</p>`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "OTP sent to your email" ,otpGenerated:otp});
    } catch (error) {
        res.status(500).json({ message: "Failed to send OTP",err });
    }
}

