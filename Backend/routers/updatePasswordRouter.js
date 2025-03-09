import express from 'express'
import { updatePasswordController } from '../controllers/updatePassword.js';

export const updatepasswordRoute= express.Router();

updatepasswordRoute.post('/update-password',updatePasswordController)