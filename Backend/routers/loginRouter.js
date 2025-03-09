import express from 'express';
import { LoginController } from '../controllers/loginController.js';

const LoginRouter = express.Router()
LoginRouter.post('/login',LoginController)

export default LoginRouter