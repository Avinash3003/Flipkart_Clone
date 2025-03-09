
import express from 'express'
import signUp from '../controllers/signup.js'


const signUpRoute=express.Router()

signUpRoute.post('/signup',signUp)


export default signUpRoute

